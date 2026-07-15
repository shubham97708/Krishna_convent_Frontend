import React,{useState, useEffect } from 'react';
import { createMuiTheme,fade, makeStyles,ThemeProvider } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import AddContact from './AddContact';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Container, Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import EditIcon from '@material-ui/icons/Edit';
import EditAddContact from './EditAddContact';
import Pagination from 'pagination-react-hooks';
import {getData,postData} from '../../../services/FetchServices';
import BaseUrl from '../../../services/BaseUrl';
import swal from 'sweetalert';
import Hidden from '@material-ui/core/Hidden';
import SearchBar from 'material-ui-search-bar'
import { green, purple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
 
  main: {
     marginTop:'10px',
     margin: theme.spacing(2),
   },
   button: {
   // marginTop: theme.spacing(1),
   // width:140,
    marginTop:theme.spacing(),
    margin:theme.spacing(1),
    width:130,
    //color:'green'
    backgroundColor:'blue'
  },
  card:{
    marginBottom:15,
    // border:"0.5px solid blue",
  },

  // card: {
  //   maxWidth: 'flex',
  //   Height: '500',
  //   padding:'8px',
  //   border:"1px solid blue",
  // },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    height:'10px',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:theme.spacing(1),
  },
  Searchbutton:{
    marginTop:5,
      },

  search: {
    position: 'relative',
    // border:"0.5px solid blue",
    //border:'1px solid #C0C0C0',
    cursor:'pointer',
    borderRadius: theme.shape.borderRadius,
   
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginLeft:theme.spacing(1),
    width: '60%',
    height: '40px',
    backgroundColor:'primary',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  contactButton:{
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'5%',
    marginBottom:'5%'
  },
  contactButtonText:{
    fontSize:'20',
    color: 'white',
    fontWeight:"610",
    letterSpacing: '0.5px', 
  },
  searchbar:{
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'5%',
    marginBottom:'5%'
  },
head:
{
  fontSize:'2vw',
  color: 'blue',
  fontWeight:"610",
  letterSpacing: '0.5px',
  textAlign:'center',
 // marginLeft:theme.spacing(1),
},
}));

const useStyles2 = makeStyles(theme => ({

button:{
  backgroundColor:'blue'
},

  card: {
      width:'100%',
      padding:'5px',
      // border:"0.5px solid blue",
      //border:"0.5px solid blue",
      margin: theme.spacing(1),
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  root: {
    background:'#CCD1D1',
    padding:'10px',
    marginTop:'10px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    // margin: 10,
    width: 150,
    height:150,
    padding:'5px',
  },
  
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
list:
{
  padding:'5px',
},

  text:{
    padding:'5px',
  },
  itemtext:{
    marginTop:theme.spacing(-1),
    },
    icon:{
      color:'#000000 ',
      marginTop:theme.spacing(-1),
      },

}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function ClientPortfolio(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const [open1, setOpen1] = React.useState(false)

  const [getRefresh, setRefresh] = React.useState(false)

  const handleRefresh =  () => {
    if(getRefresh){
      setRefresh(false)
    }else{
      setRefresh(true)
      
    }
  };
  

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClickClose = async () => {
    setOpen(false);

  };

  const handleClickOpen1 = async (item1) => {
    setOpen1(true);
    setDATA(item1)
  };

  const handleClickClose1 = async () => {
    setOpen1(false);

  };

  const clearValues=()=>{

    setFirstName('')
    setDate('') 
    setPhone('')   
    setEmail('')
    
    }
    
  const [getList,setList]=useState([])
  const [getMessage,setMessage]=React.useState('')
  const [getTrue,setTrue]=useState(false) 
  const [getFirstName,setFirstName]=useState('')
  const [getDate,setDate]=useState('')
  const [getEmail,setEmail]=useState('')
  const [getPhone,setPhone]=useState('')   
  const [DATA,setDATA]=useState(null) 
  const [getAgentid,setAgentid]=useState('') 


  const deleteDataPost=async(body)=>{

    

    let result=await postData('addcontact/deleteRecord',body)
      
    if(result)
    {
    //  setMessage("Record Deleted...")
      swal("CITY", "City Deleted", "success");
     clearValues()
    }
    else
    {
    // setMessage("Fail to Delete Record...")
     swal("CITY", "City NOt Deleted", "error");
    }
    setTrue(true)
  }






    const handleSubmitDelete=async(id)=>{
      var body={id:id}

      swal({
        title: "City",
        text: "Are You Sure Want To Delete City",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteDataPost(body)
        }else{
          swal("City Is Safe");
        }
      });
      
    }





  const setuserdata = async ()  =>{
    let rec=  JSON.parse(localStorage.getItem('AGENT'))

     console.log("Agent Image",rec)

     let body ={
      id:rec[0].id
    }

   
     let result = await  postData('addcontact/displayContactByAgentId',body)    
     setList(result)
     console.log("Contact Display All",result)
   }

useEffect(()=>{
    setuserdata()
  setTrue(false)
},[getTrue,getRefresh])
const classes2 = useStyles2();

const showDialog=()=>{
  console.log('...............',DATA)
  return(<Dialog
    open={open1}
    onClose={handleClickClose1}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    
   
  >
    <EditAddContact editaddcontactclose={handleClickClose1} refreshfunction={handleRefresh} item={DATA}/>
  </Dialog>)
}


const handleClick=(view)=>{  
  props.changeView(view) 
  //props.handleDrawerClose()
  } 
  


const show = (item) => (   
  <React.Fragment>

      <Card className={classes.card}>
        <CardContent>

       <Grid container>  
      
       <Grid item xs={12} sm={4} style={{justifyContent:'center',display:'flex',textAlign:'center'}}>
        <Avatar alt="Picture"  variant='square' src={`${BaseUrl}/images/${item.picture}`} className={classes2.bigAvatar} />
        </Grid>
      
        <Grid item xs={12} sm={4} >
      
             <ListItem className={classes2.list} style={{justifyContent:'center',}}>  
             <Typography className={classes2.text} variant="h6">CITY NAME : {item.firstname} </Typography>
            </ListItem>           
        </Grid>

        <Grid item xs={12} sm={4} >
      
      <ListItem className={classes2.list} style={{justifyContent:'center',}}>  
      <Typography className={classes2.text} variant="h6">Area : {item.area} </Typography>
     </ListItem>           
 </Grid>



        <Grid item xs={12} sm={12}  style={{justifyContent:'center',textAlign:'center',}}>
         <Button variant="contained" 
            color="primary"
            className={classes.button}
            onClick= {()=>handleClickOpen1(item)}
            startIcon={<EditIcon />}
           >
           Edit
         </Button>
         

             {open1?showDialog():<React.Fragment></React.Fragment>} 
                 
         <Button
            variant="contained"
            color="primary"
            onClick= {()=>handleSubmitDelete(item.id)}
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
        </Button>            
        
        </Grid>
        
        </Grid>    
      </CardContent>
      </Card>
   
{/* 
<Hidden smUp implementation="js">
<Card className={classes.card}>
  <CardContent>
 <Grid container style={{marginLeft:-40}} >

 <Grid item xs={12} sm={4} style={{marginLeft:'40%'}}>
  <Avatar style={{borderRadius:"50%"}} alt="Picture" variant='square' src={`${BaseUrl}/images/${item.picture}`} className={classes2.bigAvatar} />
  </Grid>

  <Grid item xs={12} sm={4}>

       <ListItem className={classes2.list} style={{marginLeft:'15%'}}>  
       <Typography className={classes2.text} variant="h6">{item.firstname} </Typography>
      </ListItem>

        <ListItem className={classes2.list} style={{marginLeft:'15%'}}>  
        <ListItemIcon>
          <EmailIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes2.itemtext} primary={item.email}  /> 
      </ListItem>

      <ListItem className={classes2.list} style={{marginLeft:'15%'}}>  
      <ListItemIcon>
          <PhoneEnabledIcon className={classes2.icon}/>
          </ListItemIcon>
        <ListItemText className={classes2.itemtext} primary={item.phone}  /> 
      </ListItem>

      <ListItem className={classes2.list} style={{marginLeft:'15%'}}>  
      <ListItemIcon>
          <CalendarTodayIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes2.itemtext} primary={item.date} /> 
      </ListItem>
  </Grid>
  <Grid item xs={12} sm={12} style={{marginTop:10,marginLeft:'12%'}}>
  {open1?showDialog():<React.Fragment></React.Fragment>}
  
  <span style={{margin:10}} ><Button variant="contained" color="primary"   onClick= {()=>handleClickOpen1(item)}
      startIcon={<EditIcon />} className={classes2.button}>Editar</Button></span><span ><Button variant="contained" color="primary" className={classes2.button} onClick= {()=>handleSubmitDelete(item.id)}
      className={classes2.button}
      startIcon={<DeleteIcon />}>Eliminar</Button></span>
  </Grid>




  </Grid>    
</CardContent>
</Card>
</Hidden> */}


</React.Fragment>
      )

const [searchText, setSearchText] = useState(''); 



const showSearchBar = ()=>{
  const FetchAll= async(e)=>{
    let body={
        'searchtext':searchText,
      } 
   const result = await postData('addcontact/searchCity',body)    
  // let nresult = JSON.stringify(result)
   setList(result) 
}

return (<center>
<SearchBar
      onChange={(event)=>{setSearchText(event);console.log(event)}}
      onRequestSearch={() => FetchAll()}
      value={searchText}
      style={{
        margin: '0 auto',
        maxWidth: 800,
        border:'0.5px solid blue'
        // backgroundColor:'grey'
      }}
    />
</center>
    );
}

return (
<React.Fragment>

<Card className={classes2.card}  style={{marginLeft:-0.5}}>
<CardContent>

<Grid container spacing={1}>
<Grid item xs={12} sm={6}>
<div className={classes.searchbar}>
  
  {showSearchBar()}
  
 
  </div>
</Grid>

<Grid item xs={12} sm={2}>
</Grid>

<Grid item xs={12} sm={4}>

<ListItem className={classes2.list}>


<Hidden xsDown implementation="css">

<Button

      variant="contained"
      color="primary"
      className={classes.button}
      onClick={()=>handleClick(<AddContact addcontactclose={handleClickClose}  refreshfunction={handleRefresh}  changeView={props.changeView}/>)} 
      startIcon={<GroupAddIcon />}
      style={{marginTop:'25%'}}
    >
 Add City
</Button>

</Hidden>


<Hidden smUp implementation="js">

<Button
variant="contained"
color="primary"
className={classes.button}
onClick= {handleClickOpen}
startIcon={<GroupAddIcon />}
style={{marginLeft:'25%'}}
>
 Add City
</Button>

</Hidden>

 </ListItem>   
</Grid>
</Grid>




<Dialog
    open={open}
    onClose={handleClickClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    


      maxWidth="lg"
      fullWidth={true}
    paperWidthFalse={false}
    



    >
      <AddContact addcontactclose={handleClickClose}  refreshfunction={handleRefresh} />
      </Dialog>

      </CardContent>    
</Card>




<div >
{getList==''?<center><img src='/images/nodata.jpg'/></center>:

<Pagination
      data={getList}
      Show={show}
      displayNumber="6"
      previousText="Prev"
      nextText="Next"
  />

  }
</div>
</React.Fragment>
  );
}
