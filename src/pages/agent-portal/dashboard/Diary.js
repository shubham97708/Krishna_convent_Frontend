import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import BaseUrl from '../../../services/BaseUrl'
import {postData } from '../../../services/FetchServices'
import {getData} from '../../../services/FetchServices'
import Dialog from '@material-ui/core/Dialog';
import AddHomework from './AddHomework';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import QueueIcon from '@material-ui/icons/Queue';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Calendar from 'react-calendar'
import DisplayAddHomework from './DisplayAddHomework';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  main: {
    marginTop:'10px',
    margin: theme.spacing(2),
    width:'100%'
  },


   paper: {
   // width:'100%',
   // padding:'5px',
    border:"0.5px solid green",
   // margin: theme.spacing(1),
   // marginLeft:10 
   },


   card: {
    width:'100%',
  //  padding:'5px',
    // border:"1px solid blue",
   // margin: theme.spacing(1),
},


  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  button:{ 
    backgroundColor:'green',
    marginTop:theme.spacing(2),
    margin:theme.spacing(1),
    width:130

  },



}));

export default function Diary(props) {
 

  const classes = useStyles();
  const [open, setOpen]=React.useState(false)
  const [date, setDate]=React.useState(new Date())
  const [calendarstate, setCalendarstate]=React.useState("none")


  // refreshfunction={handleRefresh}

  const [getRefresh, setRefresh] = React.useState(false)

  const handleRefresh =  () => {
    if(getRefresh){
      setRefresh(false)
    }else{
      setRefresh(true)
      
    }
  };

  const handleClickOpen = async () => {
    setOpen(true);
  };
  const handleClickClose = async () => {
    setOpen(false);
  };



  const handleCalender = async () => {
    if(calendarstate=="none")
    {
   setCalendarstate(""); 
    }
    else{
      setCalendarstate("none")
    }
    };

  
    
  
  return (

    <React.Fragment >
    
    <Paper className={classes.paper}>


    <Grid container spacing={1}>
    <Grid item xs={12} sm={8}>
    <Typography style={{marginLeft:'20px'}}>
     <h2> Quehaceres </h2>
       </Typography>  
    </Grid>

    <Grid item xs={12} sm={4}>
       <Button variant="contained" color="primary" className={classes.button}
       onClick={handleCalender}
        startIcon={<EventAvailableIcon  />}>
     Calander 
      </Button>

        <Button variant="contained" color="secondary" onClick={handleClickOpen} className={classes.button}  startIcon={<QueueIcon  />}>
       + Deberes 
        </Button>
      </Grid>

  
  <div style={{
    display:calendarstate
  }}>
        <Calendar   
          value={date}
        />
      </div>


        <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
    <AddHomework addcontactclose={handleClickClose}  refreshfunction={handleRefresh}   />
    </Dialog>

    </Grid>
    </Paper>


    
    <div style={{marginLeft:-40}}>
    <DisplayAddHomework changeView={props.changeView} refreshfunction={getRefresh}  /> 
    </div>
  
    
    
    </React.Fragment>

  );
}