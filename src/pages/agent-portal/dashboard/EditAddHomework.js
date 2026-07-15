import React,{useEffect,useState} from "react";
import clsx from 'clsx';
import {postData} from '../../../services/FetchServices';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';

import Alert from 'react-s-alert';
// mandatory
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import swal from 'sweetalert';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

 
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:40,
    width:'100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    
  },
  dense: {
    marginTop: 19,
    padding:15,
    marginLeft:'0.5%'
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    padding:15,
    marginLeft:'2%',
    width:'100%',
    backgroundColor:'green'
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

export default function EditAddHomework(props)

{  
  const classes = useStyles();
  const [getMessage,setMessage]=React.useState('')
  const [getId, setId] = React.useState('')
  const [getTitle, setTitle] = React.useState('')
  const [getDescription,setDescription] = React.useState('')
  const [getDate, setDate] = React.useState('')
  const [getSelectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  const sethomework = async() =>{
   setId(props.item.id)
   setTitle(props.item.title)
   setDescription(props.item.description)
   setDate(props.item.date)
  }

  useEffect(()=>{
    console.log(props.item.id)
    sethomework(); 
  },[])


const editDataPost =async(body)=>{

  let result=await postData('addhomework/edithomework',body)
  if(result)
 {
  swal("DEBERES!", "Tarea agregada con éxito!", "success");
  props.refreshlist()
  props.editaddcontactclose()
  }
  else
  {
    swal("DEBERES!", "No se puede agregar tarea!", "error");
  }
}







  const handleSubmitEdit=()=>{
    let body={
              'id':getId,
              'title' : getTitle,
              'description': getDescription,
              'date': getSelectedDate,
            }

            swal({
              title: "Estas seguro",
              text: "Una vez eliminado, no podrás recuperar  55 esto!",
              icon: "success",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                editDataPost(body)
              } else {
                swal("La tarea es segura!");
                props.editaddcontactclose()
              }
            });
          }

const clearValues=()=>{
        setTitle('')
        setDescription('')
        setDate('')
        }


        return(<Container maxWidth="xs">
        <Paper className={classes.paper}>
        <Grid container xs={12}>
        <Grid item xs={6}>
           <Typography>
         <h2> Editar tarea </h2>
           </Typography>  
     </Grid>
     
     
     </Grid>
     
     
     
     <Grid container>
      <Grid item xs={12}>
      <TextField
             id="outlined-dense"
            //  label="Title"
            placeholder="Title"
             className={clsx(classes.textField, classes.dense)}
             margin="dense"
             value={getTitle}
             variant="outlined"
             onChange={(event)=>setTitle(event.target.value)}
             fullWidth
           />
      </Grid>   
      <Grid item xs={12}>
      <TextField
             id="outlined-dense"
            //  label="Description"
            placeholder="Description"
             multiline
             rows="4"
             className={clsx(classes.textField, classes.dense)}
             margin="dense"
             value={getDescription}
             variant="outlined"
             onChange={(event)=>setDescription(event.target.value)}
             fullWidth
           />
      </Grid> 
     
      <Grid item xs={12}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
             <KeyboardDatePicker
             className={clsx(classes.textField, classes.dense)}
               margin="normal"
               id="date-picker-dialog"
              //  label="Date"
              placeholder="Date"
               format="MM/dd/yyyy"
               value={getSelectedDate}
               InputLabelProps={{
                 shrink:true,
               }}
               onChange={date=>handleDateChange(date)}
               KeyboardButtonProps={{
                 'aria-label': 'change date',
               }}
               fullWidth
             />
             </MuiPickersUtilsProvider>
     </Grid>  
     
      
          
      <Button variant="contained" onClick={handleSubmitEdit}  color="primary" className={classes.button} fullWidth>
      Actualizar
           </Button>
         
     </Grid>
     </Paper>
     <Typography>
     {getMessage}
     </Typography>
     
     </Container>)
     }
     