import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Paper} from '@material-ui/core'

import schoolLogo from './dashboard/Marksheet/img/logo.png'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  page: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a237e 0%, #1565c0 45%, #1e88e5 100%)',
    padding: theme.spacing(2),
  },
  card: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 20,
    padding: theme.spacing(5, 4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 20px 50px rgba(13, 30, 77, 0.35)',
  },
  avatar: {
    width: 76,
    height: 76,
    backgroundColor: '#ffffff',
    border: '3px solid #1565c0',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: 6,
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
    textAlign: 'center',
    color: '#1a237e',
  },
  subtitle: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
    color: '#78909c',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  textField: {
    marginBottom: theme.spacing(2.5),
  },
  submit: {
    marginTop: theme.spacing(1),
    height: 48,
    borderRadius: 10,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'none',
    fontSize: '1rem',
    background: 'linear-gradient(90deg, #1565c0 0%, #1e88e5 100%)',
    boxShadow: '0 8px 20px rgba(21, 101, 192, 0.4)',
  },
   card1: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    border:'0.5px solid blue'
   },

   cardContent1: {
    flexGrow: 1,
  },

  cardMedia1: {
    paddingTop: '20%', // 16:9
    maxHeight:'20%',
    maxWidth:'20%',
    marginLeft:'40%',
    marginRight:'40%'
   },

   dialogsubmit:{
    backgroundColor:'blue',
   },

  credit: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.85)',
  },

}));

export default function AgentSignIn(props) {

  const classes = useStyles();
  const [emailid,setEmailId]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [openDialog,closeDialog] = React.useState(false)

  const [getSpinner,setSpinner] = React.useState(false)


  const LoginPage=async()=>{
    var client = await localStorage.getItem("CLIENT")
    var agent = await localStorage.getItem("AGENT")
    var admin = await localStorage.getItem("ADMIN")

    if(client){
      localStorage.removeItem("AGENT");
      localStorage.removeItem("ADMIN");
      props.history.push({pathname:'/ClientDashboard'})


    }else if(agent){
      localStorage.removeItem("CLIENT");
      localStorage.removeItem("ADMIN");
      props.history.replace({pathname:'/Dashboard'})

    }else if(admin){
      localStorage.removeItem("CLIENT");
      localStorage.removeItem("AGENT");
      props.history.push({pathname:'/AdminDashboard'})
    }
}


  useEffect(()=>{
    LoginPage();
  },[])

const checksignin = async ()   =>  {

  setSpinner(true)


    if(emailid!='' && password!='' ) {

  let body={
            'emailid':emailid,
            'password':password
           }
   let result = await  postData('selfregister/checkagentsignin',body)

  if (result.RESULT)
  {
    setSpinner(false)
    swal("Admin", "Successfuly Logged In", "success");
    localStorage.setItem('AGENT', JSON.stringify(result.RESULT)) // JSON.stringify use for change json to string
    props.history.replace({pathname:'/Dashboard'})  // we can use push(back) or replace(not back)
  }
  else
  {
    setSpinner(false)
   // alert("Invalid Id Password")
    swal("Admin", "Invalid ID or Password", "error");
    props.history.push({pathname:'/AgentSignIn'})
  }
}else{
  setSpinner(false)
  swal("Admin", "Please Fill Both Fields", "error");
}
}



function handleEnter(event) {
  if (event.keyCode === 13) {
    checksignin()
  }
}


const handleClickCloseDialog = ()=>{
  closeDialog(false)
 }


  const forgot=()=>{
    closeDialog(true)
  }






const veryfyEmail = async () => {
    if (emailid != '') {
      let body = {
        'emailid': emailid,
                 }

      let result = await postData('selfregister/veryfyEmail', body)
        console.log("Reply Is Not Comming ..  ", result)
      if (result.length>0) {
        //------------Create OTP Token Start--------------------------
        const secret = 'TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY'
        const otp = new OTP(secret)
        const tokens = otp.getToken() // e.g. 624343
        console.log("OTP Token Store", tokens)
        //-------------OTP Token End----------------------------------

        let bdy = {
          'emailid': emailid,
          'otp': tokens,
          'number':result[0].number
        }



          let resultss = await postData('selfregister/updateAgentOtp', bdy)
          console.log("Result From UPDATE ", resultss)
          if (resultss) {

            swal("OTP", "OTP Sent Successfully", "success");
            closeDialog(false)
            props.history.push({
              pathname: '/AgentEmailVerfied'
            }, {
              bdy
            })

          } else {
            swal("Agente", "Error In Server", "error");
          }





      }



      else {

        swal("OTP", "Account Does Not Exist", "error");
        props.history.push({
          pathname: '/AgentSignIn'
        })
      }
    }



    else {
      swal("OTP", "Please Fill Email", "error");
    }
  }


  return (
    <div className={classes.page}>
      <CssBaseline />

      <Card className={classes.card}>
        <Avatar className={classes.avatar}>
          <img src={schoolLogo} alt="Krishna Convent School" className={classes.avatarImg} />
        </Avatar>

        <Typography variant="h5" className={classes.title}>
          Krishna Convent Hr. Sec. School
        </Typography>
        <Typography variant="body2" className={classes.subtitle}>
          Sign in to the Agent Portal
        </Typography>

        <div className={classes.form}>
          <TextField
            label='Username'
            placeholder='Enter username'
            variant="outlined"
            fullWidth
            required
            className={classes.textField}
            value={emailid}
            onChange={(event)=>setEmailId(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon color="disabled" />
                </InputAdornment>
              ),
            }}
            />
          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            variant="outlined"
            fullWidth
            required
            className={classes.textField}
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            onKeyDown={handleEnter}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="disabled" />
                </InputAdornment>
              ),
            }}
            />

          <Button
            type='submit'
            color='primary'
            variant="contained"
            className={classes.submit}
            onClick={()=>checksignin()}
            disabled={getSpinner}
            fullWidth
          >
            { getSpinner ? <CircularProgress size={24} style={{color:'#fff'}} /> : 'Sign In' }
          </Button>
        </div>
      </Card>

      <Typography variant="body2" className={classes.credit}>
        Developed by Shubham Soni &middot; 9770856257
      </Typography>

      <Dialog
              open={openDialog}
              onClose={handleClickCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
             >

              <Grid item  xs={12} >

                <Card className={classes.card1}>
                  <CardContent className={classes.cardContent1}>
                  <CardMedia
                    className={classes.cardMedia1}
                   image='./images/User.png'
                    title="Image title"
                  />

                  </CardContent>


                  <CardActions>
                  <Grid  justify="center">
                    <div style={{padding:13}} >
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
                    onChange={(event)=>setEmailId(event.target.value)}


                 />
                 </div>

                 <div style={{padding:20}}>
                  <Button variant="outlined"  className={classes.dialogsubmit} onClick={(e)=>veryfyEmail()} >
                    Send Otp
                  </Button>
                  </div>

              </Grid>

                  </CardActions>
                </Card>
              </Grid>

             </Dialog>
    </div>
  );
}
