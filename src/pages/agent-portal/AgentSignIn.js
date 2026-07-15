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
import CircularProgress from '@material-ui/core/CircularProgress';



import { Paper} from '@material-ui/core'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';





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
    backgroundColor:'blue',
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'blue',
  },
  card: {
    padding:20,
    border:'0.5px solid blue',
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
    border:'0.5px solid blue'
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
    backgroundColor:'blue',
   }

}));

export default function AgentSignIn(props) {

  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

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


    <div >


<nav class="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
	<div class="container-fluid">
    <div class="navbar-wrapper">

			{/* <a class="navbar-brand" href="/">Login Page</a> */}
		</div>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-bar navbar-kebab"></span>
			<span class="navbar-toggler-bar navbar-kebab"></span>
			<span class="navbar-toggler-bar navbar-kebab"></span>
		</button>

	    <div class="collapse navbar-collapse justify-content-end" id="navigation">


          <ul class="navbar-nav">
 
    {/* <li class= "nav-item  active ">
        <a href="/" class="nav-link">
            <i class="now-ui-icons users_circle-08"></i>
            Login
        </a>
    </li> */}

 
</ul>





	    </div>
	</div>
</nav>
        <div class="wrapper wrapper-full-page ">

    <div class="full-page login-page section-image" filter-color="black" style={{backgroundImage: "url(" + "../login/bg.jpg" + ")",}}>
        <div class="content">
            <div class="container" style={{height:'auto'}}>
                <div class="col-md-4 ml-auto mr-auto">
                    <form class="form" method="" action="">



<div class="card card-login card-plain">

    <div class="card-header ">
    <div class="logo-container">
   {/* <h3 style={{color:'#FFF'}}><i class="fas fa-hotel">  </i>Krishna Convent School</h3>  */}
    {/* <img src="../../assets/img/now-logo.png" alt=""/> */}
    </div>
    </div>

    {/* <div class="card-body ">


            <div class="input-group no-border form-control-lg">
                                <span class="input-group-prepend">
                                  <div class="input-group-text">
                                    <i class="fas fa-user-circle"></i>
                                  </div>
                                </span>
                                <input type="text" class="form-control" placeholder="Email"
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

                              <div class="input-group no-border form-control-lg">
                                <div class="input-group-prepend">
                                  <div class="input-group-text">
                                    <i class="fas fa-key"></i>
                                  </div>
                                </div>
                                <input type="text" placeholder="Password" class="form-control"
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
                              </div>



    </div> */}



    <div class="card-footer ">

      {  getSpinner==false?
           <a style={{fontSize:15,color:'#FFF'}} type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={checksignin} class="btn btn-primary btn-round btn-lg btn-block mb-3">
            <i class="fas fa-unlock"></i> Login</a>
              :
             <div> 
            <a 
            style={{fontSize:15,color:'#FFF'}} type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            class="btn btn-primary btn-round btn-lg btn-block mb-3">
            <i class="fas fa-unlock"></i> Login</a>
              
            <CircularProgress color="secondary"  />
            </div>
      }     
                       
        {/* <div class="pull-center" style={{justifyContent:'center',display:'flex'}}>
                            <h6><a  fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={forgot} class="link footer-link">Forget</a></h6>
                        </div> */}

                        {/* <div class="pull-right">
                           <h6><a href="#pablo" class="link footer-link">Need Help?</a></h6>
                        </div> */}
    </div>

</div>


                    </form>
                </div>
            </div>
        </div>
       

    </div>


        </div>

      <CssBaseline />

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





      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label='Username'
            placeholder='Enter username'
            variant="outlined"
            fullWidth required 
            value={emailid}
            onChange={(event)=>setEmailId(event.target.value)}
            />
          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            variant="outlined"
            fullWidth 

            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            required 
            />
         
          <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={()=>checksignin()} fullWidth>Sign in</Button>

        </Paper>
      </Grid>







    </div>
  );
}