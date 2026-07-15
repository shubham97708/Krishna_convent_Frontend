import React,{useEffect,useState} from "react"
import {getData,postData} from '../../../services/FetchServices';
import BaseUrl from '../../../services/BaseUrl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GotoEnd from './GotoEnd'

const useStyles = makeStyles(theme => ({

    card: {
        width:'100%',
     
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
      marginLeft:'75px',
      marginRight:'75px',
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
      width: '50%',
      height:'75%',
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
    marginLeft:80,
},
    button: {
      marginTop:'15%',
      width:130,
    },
    text:{
      marginTop:theme.spacing(2)
    },
    itemtext:{
      color:'#000000 ',
      marginTop:theme.spacing(-1),
      },
      icon:{
        color:'#000000 ',
        marginTop:theme.spacing(-1),
        },
        text:{
          marginTop:'-5%',
          height:'50px'
        },

  }));

  function DisplayPostAdd(props)
{   const classes = useStyles();
    const [getList,setList]=useState([])
    const [getMessage,setMessage]=React.useState('')
    const [getTitle,setTitle]=useState('')
    const [getDescription,setDescription]=useState('')
    const [getDetail,setDetail]=useState('')
    const [getPrice,setPrice]=useState('')  
    const [getDataList,setDataList]=React.useState([])   



    const handleClick=(view)=>{  
      props.changeView(view) 
      } 
      

      const setuserdata = async ()  =>{
        let rec=  JSON.parse(localStorage.getItem('AGENT'))
         console.log("Agent Image",rec)
         
         
         let body ={
          id:rec[0].id
        }
    
         let result = await  postData('postadd/displaydatabyagent',body)    
         setDataList(result)
         console.log("Agent data",result)
       }


const fetchAllAddContactList=async()=>{
 let list=await getData('postadd/displayAll')
  setList(list)
}


useEffect(function(){
  setuserdata()
fetchAllAddContactList()

},[])





function showList()
   {
    return getDataList.map(item=>(    
    
  
<Card className={classes.card}>
    <CardContent>
    
   <Grid container xs={12} >

   <Grid item xs={4}>
    <Avatar alt="Picture" variant='square' src={`${BaseUrl}/images/${item.picture}`} className={classes.bigAvatar} />

    <ListItem>  
    <ListItemIcon>
            <MonetizationOnIcon className={classes.icon}/>
            </ListItemIcon>
          <ListItemText className={classes.itemtext} primary={item.price} /> 
        </ListItem>

    </Grid>

    <Grid item xs={4} >

      
        <ListItem>  
        <Typography className={classes.text} variant="h7"><b>Id :</b> {item.id} </Typography>
        </ListItem>
  
         <ListItem>  
         <Typography className={classes.text} variant="h7"><b>Título :</b>{item.title} </Typography>
        </ListItem>

          <ListItem>  
          <Typography className={classes.text} variant="h7"><b>Descripción :</b>{item.description} </Typography> 
        </ListItem>


    </Grid>

    <Grid item xs={4} >

    
        
        <ListItem className={classes.list}>
    <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<VisibilityIcon />}
        onClick={()=>handleClick(<GotoEnd history={props.history}  postid={item.id} />)}
      >
        Explorar
      </Button>
        </ListItem>

    </Grid>

    </Grid>
  

 </CardContent>
  </Card>
))

}


return(<div>
  {getMessage}
{showList()}

</div>)

}

export default DisplayPostAdd;