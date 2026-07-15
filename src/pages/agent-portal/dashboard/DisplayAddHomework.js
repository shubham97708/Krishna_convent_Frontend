import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Button,Dialog} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {postData} from '../../../services/FetchServices';
import {getData } from '../../../services/FetchServices';
import BaseUrl from '../../../services/BaseUrl';
import EditAddHomework from './EditAddHomework';
import Pagination from 'pagination-react-hooks';




import swal from 'sweetalert';



const useStyles = makeStyles(theme => ({

  card: {
    // widht: '100%',
    // height:150,
     border:'0.5px solid green',
   // margin: theme.spacing(1),
   marginBottom:15
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  root: {
    background:'#CCD1D1',
    padding:'30px',
   // marginLeft:'75px',
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
  dense: {
    marginTop: theme.spacing(2),
  },
  icon:{
    color:'#ffcc00',
  },
  button: {
    backgroundColor:'green',
    marginTop:theme.spacing(2),
    margin:theme.spacing(1),
    width:130
  },

  text:{
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2),
    marginLeft:theme.spacing(2),
  },
  
}));

export default function DisplayAddHomework(props)
{   const classes = useStyles();
  const [getList,setList]=useState([])
  const [getMessage,setMessage]=React.useState('')
  const [getId,setId]=React.useState('')
  const [getTitle,setTitle]=React.useState('')
  const [getDescription,setDescription]=useState('')
  const [getDate,setDate]=useState('')           
  const [getTrue,setTrue]=useState(false)          
  const [DATA,setDATA]=useState(null) 

  const [open, setOpen] = React.useState(false)


  const handleClickOpen = (item1) => {
    setOpen(true);
    setDATA(item1)
  };

  const showDialog=()=>{
    console.log("////////////////",DATA)
      return(
        <Dialog
      open={open}
      onClose={handleClickClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <EditAddHomework editaddcontactclose={handleClickClose} refreshlist={setuserdata} item={DATA}/>
  </Dialog>
      )
    
    
  }

  const handleClickClose = async () => {
    setOpen(false);

  };


  const setuserdata = async ()  =>{
    let rec=  JSON.parse(localStorage.getItem('AGENT'))
     console.log("Agent Image",rec)
     let body ={
      id:rec[0].id
    }
     let result = await  postData('addhomework/displayHomeworkByAgentId',body)    
     setList(result)
     console.log("Contact Display All",result)
   }


const clearValues=()=>{
  setTitle('')
  setDescription('')   
  setDate('')
 }



const deleteDataPost=async(body)=>{

  let result=await postData('addhomework/deletehomework',body)
  if(result)
      {
        swal("La tarea se elimina con éxito!", {
          icon: "success",
        });
        setuserdata()
       }
  else
      {
       swal("DEBERES!", "Unable to Delete!", "error");
      }

}


 const handleSubmitDelete=async(id)=>{
  var body={id:id}
  swal({
    title: "Estas seguro",
    text: "Una vez eliminado, no podrás recuperar esto!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      deleteDataPost(body)
    } else {
      swal("La tarea es segura!");
    }
  });
 setTrue(true)
}

useEffect(()=>{
  setuserdata()
},[props.refreshfunction])


function handleClickalert() {
 // swal("Good job!", "You clicked the button!", "error");
  //setuserdata()
alert("Helooooooooooooo")
}


const EditAddHomeworkShow=(item)=>{

  console.log("hhhhhhhhhhhhhh",item)
  return(
    <Dialog
    open={open}
    onClose={handleClickClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
  <EditAddHomework editaddcontactclose={handleClickClose} refreshlist={setuserdata} item={item}/>
</Dialog>
  )
}



const show = (item) => (  



<Card  className={classes.card}>
<Grid container >
  <Grid item xs={12} sm={12} md={8} >  
  <Typography className={classes.text} color='inherit'><b>Título :</b> {item.title} </Typography>

  <Typography className={classes.text} color='inherit'><b>Descripción :</b> {item.description} </Typography>

  <Typography className={classes.text} color='inherit'><b>Fecha :</b> {item.date} </Typography>
  </Grid>
  
  {/* onClick= {handleClickalert}  */}

  <Grid item xs={12} sm={12} md={4}>
  <Button variant="contained" color="primary"   onClick= {()=>handleClickOpen(item)} className={classes.button}>Editar</Button>
  {open?showDialog():<React.Fragment></React.Fragment>}
 
  <Button variant="contained" color="primary" className={classes.button} onClick= {()=>handleSubmitDelete(item.id)}>Eliminar</Button>
  </Grid>

  </Grid>
</Card>




)


useEffect(function(){
setuserdata()

},[])


useEffect(function(){
  setuserdata()
  setTrue(false)
  },[getTrue])


return(<div>
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