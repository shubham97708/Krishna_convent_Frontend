import React,{useEffect,useState} from "react"
import{getData,postData} from '../../../services/FetchServices';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({

    card: {
      Width: "100%",
      Height:"100%",
    // padding:50,
     // background:'#99ffe6',
      margin:10,
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
      width: 200,
      height:200,
    },
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    icon:{
      color:'#ffcc00',
    },
    text:{
        marginTop:theme.spacing(2)
      },
          

  }));

export default function ChatList(props)
{   const classes = useStyles();
    const [getList,setList]=useState([])
    const [getPhone,setPhone]=useState('')  
    const [getPMessage,setPMessage]=React.useState('')
       

const fetchAllChatList=async()=>{
 let list=await getData('chat/displayAll')
  setList(list)
}

function showList()
{
 return getList.map(item=>(
    
    <Grid  style={{float:"left"}}>
        <Box width={300} >
<Card className={classes.card}>
    <CardContent  >
  
<Typography className={classes.text} multiline rows="2" color='textSecondary'><b>Móvil:</b>{item.phone} </Typography>

<Typography className={classes.text} multiline rows="2" color='textSecondary' ><b>Mensaje :</b>{item.message}</Typography>
    
 </CardContent>
  </Card>
  </Box>
  </Grid>
))

}


useEffect(function(){
fetchAllChatList()

},[])
return(<div>
{showList()}

</div>)

}