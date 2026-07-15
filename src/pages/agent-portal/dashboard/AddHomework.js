import React,{useEffect} from 'react';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {postData} from '../../../services/FetchServices';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import swal from 'sweetalert';


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
    marginBottom:40,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button:{
    backgroundColor:'green'
  }
}));

export default function AddHomework(props) {
  const classes = useStyles();
  const [title,setTitle]=React.useState('')
  const [description,setDescription]=React.useState('')
  const [message, setMessages ]=React.useState('')
  const [date, setDate] = React.useState(new Date());
  const [getagentid, setagentid] = React.useState('')
  const [getSelectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };







  const addNewRecord=async()=>{
    var data={'title':title,'description':description, 'date':getSelectedDate,'agentid':getagentid,}
    let result=await postData('addhomework/addnewrecord',data)
    if(result){
      swal("DEBERES!", "Tarea agregada con éxito!", "success");
      
      props.addcontactclose()
      props.refreshfunction()
      
      //props.callDisplay()
      
      await setTitle('')
      await setDescription('')
      await setDate('')
    }
    else{
      swal("DEBERES!", "No se puede agregar tarea!", "error");
  }
    }

    useEffect(function(){
      setuserdata(); 
    },[])

     const setuserdata = () =>{
      let rec=JSON.parse(localStorage.getItem('AGENT'))
       console.log(rec)
       setagentid(rec[0].id)
     }



    
return(<Container maxWidth="xs">
   <Paper className={classes.paper}>
   <Grid container xs={12}>
   <Grid item xs={6}>
      <Typography>
    <h2> Agregar tarea </h2>
      </Typography>  
</Grid>

<Grid item xs={6} align='Right'>
  <Button  onClick={props.addcontactclose} className={classes.button}>
       <HighlightOffIcon/> 
      </Button>
</Grid>
</Grid>


      <Divider /><Divider />

<Grid container>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Título"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={title}
        variant="outlined"
        onChange={(event)=>setTitle(event.target.value)}
        fullWidth
      />
 </Grid>   
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Descripción"
        multiline
        rows="4"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={description}
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
          label="Fecha"
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

 
 

 <Grid item xs={12}>
 <Divider />
 <Button variant="contained"  onClick={addNewRecord}color="primary" className={classes.button} fullWidth>
 Añadir
      </Button>
 </Grid>    
</Grid>
</Paper>
<Typography>
{message}
</Typography>

</Container>)
}
