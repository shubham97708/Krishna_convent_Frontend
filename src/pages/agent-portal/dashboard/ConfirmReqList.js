import React,{useEffect,useState} from "react"

import {getData} from '../../../services/FetchServices';
import {postData} from '../../../services/FetchServices';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import StarRateIcon from '@material-ui/icons/StarRate';
import BaseUrl from '../../../services/BaseUrl'
import Pagination from 'pagination-react-hooks';
const useStyles = makeStyles(theme => ({

    card: {
      minWidth: 100,
      minHeight:120,
      border:'0.5px solid green',
      marginBottom:15
      //margin:theme.spacing(2)
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
      width: 210,
      height:100,
    },
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    
    text:{
      marginTop:theme.spacing(2)
    },
    
    dense: {
      marginTop: theme.spacing(2),
    },
    icon:{
      color:'#ffcc00',
    },
    button: {
      marginLeft: theme.spacing(1),
      marginLeft:'75%',
      marginTop : 10,
      backgroundColor:'green'
      // marginRight: theme.spacing(1),
    },
  }));

export default function AproveAgentlist(props)
{   const classes = useStyles();
  const [getList,setList]=useState([])
  const [getMessage,setMessage]=React.useState('')
  const [getEnquiryid,setEnquiryid]=useState('')
  const [getName,setName]=useState('')
  const [getMobile,setMobile]=useState('')    
  const [getDescription,setDescription]=useState('')
  const [getEmail,setEmail]=useState('')
  const [getAddress,setAddress]=useState('')   
  const [getTrue,setTrue]=useState(false)    




  const fetchAllReqInfo=async()=>{
    let list=await getData('enquiry/displayConfirm')
     setList(list)
   }
   
   const clearValues=()=>{
   
       setName('')
       setMobile('')   
       setDescription('')
       setEmail('')
       setAddress('')
   
      }




      const show = (item) => (
      
    <Card className={classes.card}>
    <CardContent>   
    <Grid container >
    <Grid item xs={12} sm={6}>
    <Typography className={classes.text} ><b>ID de consulta :</b> {item.enquiryid} </Typography>
    <Typography className={classes.text} ><b>Móvil:</b> {item.mobile} </Typography>
    <Typography className={classes.text} ><b>Descripción :</b> {item.description} </Typography>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Typography className={classes.text} ><b>Nombre :</b> </Typography> 
    <Typography className={classes.text} ><b>Email :</b> {item.email} </Typography>
    </Grid>

  
    </Grid>
  

    </CardContent>
    </Card>
)


      useEffect(function(){
                            fetchAllReqInfo()
                          },[])
return(<div style={{marginLeft:-40}}>
  {getMessage}
  {getList==''?<center><img src='/images/nodata.jpg'/></center>:<Pagination
      data={getList}
      Show={show}
      displayNumber="4"
      previousText="Prev"
      nextText="Next"
  />}
</div>
)
}