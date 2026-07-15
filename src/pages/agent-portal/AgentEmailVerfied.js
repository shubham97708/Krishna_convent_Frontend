import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link,Grid, Divider} from '@material-ui/core';
import {postData} from '../../services/FetchServices';
import Card from '@material-ui/core/Card';
import swal from 'sweetalert';
import Dialog from '@material-ui/core/Dialog';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import OTP from 'otp-client'
import BaseUrl from '../../services/BaseUrl'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:'green',
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'green',
  },
  card: {
    padding:20,
    border:'0.5px solid green',
    margin:30,
    marginTop:40

   },
   forgetpassword:{
     fontSize:'1.2vh',

   },


   card1: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    border:'0.5px solid green'
   },

   cardContent1: {
    flexGrow: 1,
  },

  cardMedia1: {
    paddingTop: '20%', // 16:9
    maxHeight:'20%',
    maxWidth:'20%',
    //marginLeft:'8%'
   
    marginLeft:'40%',
    marginRight:'40%'
   },

   dialogsubmit:{
    backgroundColor:'green',
   }
  }
 )
);

export default function AgentSignIn(props) {

  const classes = useStyles();
  const [emailid,setEmailId]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [cpassword,csetPassword]=React.useState('')
  const [otp,setOtp]=React.useState('')

  
  
  useEffect(()=>{
    //checksignin()
    setEmailIdFromProp()
  },[])
   
  const checksignin=async()=>{
    if(cpassword==password){
    let bdy ={
        'emailid':emailid,
        'password':cpassword,
            'otp':otp
        } 

                   let resultss = await  postData('selfregister/updateAgentPassword',bdy)
                   console.log("Result From Agent Verified  hhhhhhhhh ",resultss)
                    try{
                      console.log("Result From Agent Verified  hhhhhhhhh ",resultss[0].id)
                           if(resultss[0].id){
                                swal("Admin", "Password Changed Successfully", "success");                                        
                                localStorage.setItem('AGENT', JSON.stringify(resultss)) 
                                props.history.replace({pathname:'/Dashboard'})                     
                                }else{
                                swal("Admin", "Completar correo electrónico", "error");
                                }
                          
                    }catch(e){
                      console.log(e)
                      swal("Admin", "Invalid OTP", "error");
                    }

                          
                          }else{
                               swal("Admin", "Both  Password Not Match", "error");
                              
                                }     
  }

  const setEmailIdFromProp=()=>{
    // console.log("SHUBHAM   ........",props.location.state.bdy.emailid)
     setEmailId(props.location.state.bdy.emailid)
   }

function handleEnter(event) {
  if (event.keyCode === 13) {
    
  }
}

















  return (
    
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{backgroundColor:'green'}} />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color:'green'}}>
            Admin Forget Password
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={emailid}
            label="Email Id"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              readOnly: true,
            }}
            onChange={(event)=>setEmailId(event.target.value)}
           
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onKeyDown={handleEnter}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={cpassword}
            onChange={(event)=>csetPassword(event.target.value)}
           
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onKeyDown={handleEnter}
           
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={otp}
          
           

          onChange = {
            (e) =>{
    
              if(e.target.value!=''){
            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,);
            setOtp(e.target.value);
              }
              if(e.target.value.length==0){
                setOtp('');
              }
            }}



            name="otp"
            label="Enter OTP"
            type="numric"
            id="otp"
            autoComplete="otp"
            onKeyDown={handleEnter}
           
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={checksignin}
          >
            Change Password
          </Button  >
          
         


      </div>
      </Card>
    </Container>
  );
}