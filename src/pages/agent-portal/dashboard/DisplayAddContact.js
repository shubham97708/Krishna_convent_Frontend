import React,{useEffect,useState} from "react"
import {getData,postData} from '../../../services/FetchServices';
import BaseUrl from '../../../services/BaseUrl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {Grid, Dialog} from '@material-ui/core'
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

const useStyles = makeStyles(theme => ({

  card: {
      width:'100%',
      padding:'20px',
   
    margin: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  root: {
    background:'#CCD1D1',
    padding:'30px',
    marginTop:'10px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height:150,
    padding:'10px',
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
  padding:'10px',
},
  button: {
    marginTop: theme.spacing(1),
    width:130,
  },
  text:{
    padding:'10px',
  },
  itemtext:{
    marginTop:theme.spacing(-1),
    },
    icon:{
      color:'#000000 ',
      marginTop:theme.spacing(-1),
      },

}));

export default function DisplayAddContact(props)
{   const classes = useStyles();
const [getId,setId]=useState([])
  const [getList,setList]=useState([])
  const [getMessage,setMessage]=React.useState('')
  const [getFirstName,setFirstName]=useState('')
  const [getDate,setDate]=useState('')
  const [getEmail,setEmail]=useState('')
  const [getPhone,setPhone]=useState('')     
  const [getTrue,setTrue]=useState(false)   
  const [open, setOpen] = React.useState(false)


  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClickClose = async () => {
    setOpen(false);

  };


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
  


const clearValues=()=>{

setFirstName('')
setDate('') 
setPhone('')   
setEmail('')

}

const handleSubmitDelete=async(id)=>{
var body={id:id}

let result=await postData('addcontact/deleteRecord',body)

if(result)
{setMessage("Record Deleted...")
clearValues()
}
else
{
 setMessage("Fail to Delete Record...")
}

setTrue(true)
}

const show = (item) => (
  

<Card className={classes.card}>
  <CardContent>
  
 <Grid container spacing='5'>

 <Grid item xs={12} sm={4}>
  <Avatar alt="Picture" variant='square' src={`${BaseUrl}/images/${item.picture}`} className={classes.bigAvatar} />
  </Grid>

  <Grid item xs={12} sm={4}>

       <ListItem className={classes.list}>  
       <Typography className={classes.text} variant="h6">{item.firstname} </Typography>
      </ListItem>

        <ListItem className={classes.list}>  
        <ListItemIcon>
          <EmailIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.email} /> 
      </ListItem>

      <ListItem className={classes.list}>  
      <ListItemIcon>
          <PhoneEnabledIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.phone} /> 
      </ListItem>

      <ListItem className={classes.list}>  
      <ListItemIcon>
          <CalendarTodayIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.date} /> 
      </ListItem>
     

  </Grid>

  <Grid item xs={12} sm={4}>

  <ListItem className={classes.list}>
  <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick= {handleClickOpen}
      startIcon={<EditIcon />}
    >
      Editar
    </Button>
    <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <EditAddContact editaddcontactclose={handleClickClose} item={item}/>
      </Dialog>


      </ListItem>

      <ListItem className={classes.list}>
  <Button
      variant="contained"
      color="primary"
      onClick= {()=>handleSubmitDelete(item.id)}
      className={classes.button}
      startIcon={<DeleteIcon />}
    >
      Eliminar
    </Button>
      </ListItem>

  </Grid>
  </Grid>


</CardContent>
</Card>
)


 //let rec= props.navigation.getParam('result')

useEffect(function(){
  
  // if(rec){
  //   setList(rec)
  // }

  setuserdata()
},[])

useEffect(function(){
// fetchAllDisplayAddContact()
setuserdata()
setTrue(false)
},[getTrue])

return(<div>
{getMessage}
<Pagination
            data={getList}
            Show={show}
            displayNumber="4"
            previousText="Prev"
            nextText="Next"
        />

</div>)

}