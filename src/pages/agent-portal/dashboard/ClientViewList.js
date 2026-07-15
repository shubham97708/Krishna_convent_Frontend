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
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Pagination from 'pagination-react-hooks';



const useStyles = makeStyles(theme => ({

  card: {
      width:'100%',
    margin: theme.spacing(1),
    border:'0.5px solid blue'
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
    width: 120,
    height:120,
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
    margin: theme.spacing(2),
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

export default function ClientViewList(props)
{   
  const classes = useStyles();
  const [getList,setList]=useState([])
  const [getMessage,setMessage]=React.useState('')
  const [getFirstName,setFirstName]=useState('')
  const [getDate,setDate]=useState('')
  const [getEmail,setEmail]=useState('')
  const [getPhone,setPhone]=useState('')     





const setuserdata = async ()  =>{
   let body ={
    'postid':props.postid
  }
  console.log("Post IDDDDDDDDDDDDDDDDDDD  ",props.postid)
   let result = await  postData('postadd/postviewlist',body)    
   setList(result)
   console.log("Contact Display All",result)
}
  



const show = (item) => (
  
<Card className={classes.card}>
<CardContent>
 <Grid container spacing='3'>

 <Grid item xs={12} sm={3}>
  <Avatar alt="Picture" variant='square' src={`${BaseUrl}/images/${item.picture}`} className={classes.bigAvatar} />
  </Grid>

  <Grid item xs={12} sm={4}>

  <ListItem className={classes.list}>  
      <ListItemIcon>
          <PlaylistAddCheckIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.clientid} /> 
      </ListItem>

      <ListItem className={classes.list}>  
      <ListItemIcon>
          <PhoneEnabledIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.phone} /> 
      </ListItem>

      <ListItem className={classes.list}>  
      <ListItemIcon>
          <VisibilityIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.count} />
      </ListItem>

  </Grid>

  <Grid item xs={12} sm={5}>

  <ListItem className={classes.list}>  
        <ListItemIcon>
          <PersonIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={`${item.firstname} ${item.lastname}`} /> 
      </ListItem>


  <ListItem className={classes.list}>  
        <ListItemIcon>
          <EmailIcon className={classes.icon}/>
          </ListItemIcon>
        <ListItemText className={classes.itemtext} primary={item.emailid} /> 
      </ListItem>
  </Grid>

  </Grid>

</CardContent>
</Card>
)


useEffect(function(){
setuserdata()
},[])

return(<div style={{marginLeft:-55}}>
{getMessage}
{getList==''?<center><img src='/images/nodata.jpg'/></center>:<Pagination
      data={getList}
      Show={show}
      displayNumber="4"
      previousText="Prev"
      nextText="Next"
  />}

</div>)

}