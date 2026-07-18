import React,{useEffect,useState} from "react";
import clsx from 'clsx';
import {getData} from '../../../services/FetchServices';
import BaseUrl from '../../../services/BaseUrl';
import {postDataAndImage} from '../../../services/FetchServices';
import {postData} from '../../../services/FetchServices';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import { async } from "regenerator-runtime";
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import swal from 'sweetalert';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  page: {
    backgroundColor: "#f4f6fa",
    minHeight: "100%",
    padding: 24,
  },
  root: {
    background:'#fff',
    padding: '24px',
    marginTop:'10px',
    borderRadius: 16,
    boxShadow: "0 4px 20px rgba(20, 40, 90, 0.08)",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "2px solid #e3ecfb",
  },
  sectionIcon: {
    color: "#1565c0",
    marginRight: 10,
  },
  sectionTitle: {
    fontWeight: 700,
    color: "#0d1b4c",
    fontSize: "1.05rem",
  },
  textField: {
    marginTop: "6px",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: "1%",
    minWidth: 220,
    height: 48,
    borderRadius: 10,
    fontWeight: 700,
    letterSpacing: 0.4,
    textTransform: "none",
    fontSize: "1rem",
    background: "linear-gradient(90deg, #1565c0 0%, #1e88e5 100%)",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(21, 101, 192, 0.35)",
    "&:hover": {
      background: "linear-gradient(90deg, #0d47a1 0%, #1565c0 100%)",
    },
  },
  input: {
    display: 'none',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    marginBottom:'20px'
  },
}));

function SectionHeader({ classes, icon, title }) {
  return (
    <div className={classes.sectionHeader}>
      {icon}
      <Typography className={classes.sectionTitle}>{title}</Typography>
    </div>
  );
}

export default function EditProfile(props)
{  

  const classes = useStyles();
  const [getList,setList]=useState([])
  const [getMessage,setMessage]=React.useState('')
  const [getId, setId] = React.useState('')
  const [getFirstName, setFirstName] = React.useState('')
  const [getLastName, setLastName] = React.useState('')
  const [getPhone, setPhone] = React.useState('')
  const [getEmailId, setEmailId] = React.useState('')
  const [getDescription,setDescription] = React.useState('')
  const [getPassword, setPassword] = React.useState('') 
  const [getNewPassword, setNewPassword] = React.useState('')
  const [getConfirmPassword, setConfirmPassword] = React.useState('')
  const [getPicture, setPicture] = React.useState("");
  const [getPicturePath, setPicturePath] = React.useState("");
  const [getStatus,setStatus]=React.useState('') 
  const [getListdata,setListdata]=React.useState([]);
  const [warning,setWarning]=React.useState('')
  const [getNumber,setNumber]=React.useState('')
  const [open, setOpen]=React.useState(false)
  const [getOtp, setOtp]=React.useState('')

  

  
const setuserdata = async() =>{

    let rec=await JSON.parse(localStorage.getItem('AGENT')) 
    setListdata(rec[0])
    setId(rec[0].id)
    setFirstName(rec[0].firstname)
    setLastName(rec[0].lastname)
    setEmailId(rec[0].emailid)
    setNumber(rec[0].number)
    setPassword(rec[0].password)
    setConfirmPassword(rec[0].password)

  }



useEffect(()=>{
    setuserdata(); 
  },[])


 const handleConfirmPassword=(e)=>{
    setConfirmPassword(e.target.value)
    if(getPassword===e.target.value){
      setStatus("Password Match")
    }
    else{
      setStatus("Password Not Match")
    }
  }


  const otpset =async()=>{

    if(getOtp != ""){
    let body={
      id : getId,
      firstName : getFirstName,
      lastName: getLastName,
      emailId: getEmailId,
      password : getPassword,
      number : getNumber,
      otp:getOtp
    }

    let result1=await postData('selfregister/updateNewProfile',body)


    if(result1.result)
    {
     await localStorage.setItem('AGENT', JSON.stringify(result1.data))
     setuserdata()
     setOpen(false)
     swal("Admin", "Admin Profile Successfuly Changed", "success");
        
    }else{
   swal("ADMIN", "Invalid OTP", "error");
    }
  }else{
    swal("ADMIN", "Please Enter OTP", "error");
  }


  }
 



const handleSubmitEdit=async()=>{
     
    let body={
          id : getId,
          firstName : getFirstName,
          lastName: getLastName,
          emailId: getEmailId,
          password : getPassword,

         // number : getNumber,
        }

   

        if(getFirstName !="" && getLastName !="" && getPassword !="" && getConfirmPassword !="" ){
        if(getPassword == getConfirmPassword){


    //  let result=await postData('selfregister/updateotpAdmin',body)

      let result=await postData('selfregister/updateNewProfile',body)
        if(result.result)
        {
         // setOpen(true)
         swal("Admin", "Admin Profile Successfuly Changed", "success");

         

        }else{  
           swal("ADMIN", "There Is An Error In Server", "error");
        }

        }else{
         // alert("Password Not Match")
          swal("ADMIN", "Password Not Match", "error");
        }
      }else{
       // alert("Fill All The Feild's")
        swal("ADMIN", "Fill All The Feild's", "error");
    }
  }

const clearValues=()=>{
        setFirstName('')
        setLastName('')
        setEmailId('')
        setPassword('')
        setNewPassword('')   
        setConfirmPassword('') 
  }


const handleClickClose = async () => {
  setOpen(false);
    };


const mylistdata =()=>{
  return(
    <Paper className={classes.root}>
    <SectionHeader classes={classes} icon={<PersonIcon className={classes.sectionIcon} />} title="School Admin Profile" />
    <React.Fragment>

    <Grid container spacing={2}>

    <Grid item xs={12} sm={6}>
      <TextField
      id="outlined-dense"
      label="First-Name"

      className={classes.textField}
      margin="normal"
      variant="outlined"
      value={getFirstName}
      onChange={(event)=>setFirstName(event.target.value)}
      fullWidth
      />
    </Grid>

    <Grid item xs={12} sm={6}>
      <TextField
      id="outlined-dense"
      label="Last-Name"

      className={classes.textField}
      margin="normal"
      variant="outlined"
      value={getLastName}
      onChange={(event)=>setLastName(event.target.value)}
      fullWidth
      />
    </Grid>


    <Grid item xs={12} sm={6}>
      <TextField
      id="outlined-dense"
      label="Email"
      className={classes.textField}
      margin="normal"
      variant="outlined"

      value={getEmailId}
      onChange={(event)=>setEmailId(event.target.value)}
      fullWidth
    />
    </Grid>


    {/* <Grid item xs={12} sm={6}>
    <TextField
      id="outlined-dense"
      label="Mobile Number"
     
      className={clsx(classes.textField, classes.dense)}
      margin="normal"
      variant="outlined"

      onChange = {
        (e) =>{

          if(e.target.value!=''){
        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,10);
        setNumber(e.target.value);
          }
          if(e.target.value.length==0){
            setNumber('');
          }
        }}

      value={getNumber}
     // onChange={(event)=>{setNumber(event.target.value);}}
      
      fullWidth
    />
    </Grid> */}

    
    
    
    <Grid item xs={12} sm={6}>
    <TextField
      id="outlined-dense"
      label="New Password"
      type="password"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      value={getPassword}
      onChange={(event)=>setPassword(event.target.value)}
      fullWidth
    />
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
     id="outlined-dense"
      label="Confirm New Password"
      type="password"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      value={getConfirmPassword}
      onChange={(e)=>handleConfirmPassword(e)}
      fullWidth
    />
   {getStatus}
    </Grid>


  <Grid item xs={12} align="center" style={{ marginTop: 12 }}>
  <Button onClick={handleSubmitEdit} variant="contained" className={classes.button}>
  Submit
  </Button>
    </Grid>

    
  <Grid item xs={12}>
   <Typography>
   {getMessage}
   </Typography>
  </Grid>
   
    </Grid>
    </React.Fragment>
    </Paper> 
  )
}


return(<div className={classes.page}>
{mylistdata()}


<Dialog
    open={open}
    onClose={handleClickClose}
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
      id="otp"
     value={getOtp}
      label="OTP"
      name="otp"
      autoComplete="otp"
          autoFocus
    onChange={(event)=>setOtp(event.target.value)}
    
   
 />
 </div>

 <div style={{padding:20}}>
  <Button variant="outlined"  className={classes.dialogsubmit} onClick={(e)=>otpset()}  >
    SUBMIT OTP
  </Button>
  </div>

</Grid>

  </CardActions>
</Card>
</Grid>

  </Dialog>
</div>)

}