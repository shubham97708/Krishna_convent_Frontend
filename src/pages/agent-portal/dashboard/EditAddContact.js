import React,{useEffect} from 'react';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {postDataAndImage,postData} from '../../../services/FetchServices';
import Dialog from '@material-ui/core/Dialog';
import AddTask from './AddTask';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Avatar from '@material-ui/core/Avatar';
import BaseUrl from '../../../services/BaseUrl';
import swal from 'sweetalert';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      
    },
  },
  card: {
    marginTop: theme.spacing(8),
    minWidth: 275,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    height:'600',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField:{
    marginBottom:13,
  },
  button:
  {
    margin: theme.spacing(3, 0,),
    backgroundColor:'blue'
  },
  input: {
    display: 'none',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  marginLeft:80,
  marginTop:20,
  },
 
}));

export default function EditAddContact(props) {
  const classes = useStyles();
  const [getFirstName,setFirstName]=React.useState('')
  const [getPhone,setPhone]=React.useState('')
  const [getEmail, setEmail]=React.useState('')
  const [getPicture, setPicture]=React.useState('')
  const [getPicturePath, setPicturePath]=React.useState('')
  const [getMessage, setMessage ]=React.useState('')
  const [getId, setId] = React.useState('')
  const [getArea, setArea] = React.useState([])

  const setaddcontact = async() =>{
  //  let rec=JSON.parse(localStorage.getItem('CONTACT'))
    //console.log("get data ",rec)
    //console.log("my id",props.location.state.id)
 
 //  setTitle(rec[0].title)
 //  setDescription(rec[0].description)
 //  setDate(rec[0].date)
 
  console.log(props.item)
  setId(props.item.id)
  setFirstName(props.item.firstname)
  setPicturePath(`${BaseUrl}/images/${props.item.picture}`)
  var nameArr = props.item.area.split(',');
  setArea(nameArr)  

   }
 
   useEffect(()=>{
     setaddcontact(); 
   },[])


   const handleSubmitEdit=async()=>{

    var err=false
    console.log(getArea)
    getArea.map((item,index)=>{
      
      var data=getArea[index]
      try {
        data=data.replace(/ /g,'')
      } catch (error) {
        
      }
      
      console.log("item",data)
      if(data==undefined || data==''){
        console.log(index)
        alert(`Please Enter Area ${index+1}`)
        err=true
      }
    })

    let firstData=getFirstName.replace(/ /g,'')
    
    if(!err && firstData!=''){
      var textval = getArea.join()
      if(textval!=""){
      
          if(getPicture=='')
          {
      
          let body={
                     'id':getId,
                     'firstname':getFirstName,
                     'area':getArea.join()
                    }
              let result=await postData('addcontact/editRecord',body)
              if(result)
              {
                swal("CITY", "City Edited Succefully", "success");
                props.refreshfunction()
                props.editaddcontactclose()
               // setMessage("Contacto actualizado..")
                clearValues()
             }
              else
              {
                swal("CITY", "There Is An Error To Edit City", "error");
              // setMessage("Error al actualizar el contacto...")
              }}
              else{
                var formData=new FormData()
               
                formData.append('id',getId)
                formData.append('firstName',getFirstName)
                formData.append('area',getArea.join())
                formData.append('picture',getPicture)
              
              
                let config={headers:{'content-type':'multipart/form-data'}}        
                let result=await postDataAndImage('addcontact/editRecordPic',formData,config)
      
                if(result)
                {
                 // setMessage("Contacto actualizado..")
                  swal("City", "City Edited Succefully", "success");
                  props.refreshfunction()
                }
                else
                {
                // setMessage("Error al actualizar el contacto...")
                 swal("City", "There Is An Error To Edit City", "error");
                }
              }
      
      
            }else{
              swal("City", "City Must Have Area", "error");
            }
         

    }
    else{
      swal("Edit", "Please Fill required fields", "error");
    }
    

       }

       const clearValues=()=>{

        setFirstName('')
        setPhone('')
        setEmail('')
        setArea([])
        setId('')
        setMessage('')
        setPicturePath('')
        setPicture('')


  }
 

  
const handlePicture=(event)=>{
  console.log("********************** ",event.target.files[0])
  setPicturePath(URL.createObjectURL(event.target.files[0]))
  setPicture(event.target.files[0])
 }





 function handleperson(index,event){

  let arraystate = [...getArea]
  arraystate[index] =event
  setArea(arraystate)

}




function addroom(index){
  let array = [...getArea]
  array.splice(index+1, 0, "")
    setArea(array)
    showList()
}




function deleteroom(index){
console.log("Length Of mIne",index)
  let array = [...getArea]
  if(array.length>1){   
    array.splice(index,1)
    setArea(array)
    console.log("****************----------********************",array)
  } else{
    swal("City", "City Have At least One Area", "error");
  }
  showList()

}




 function showList()
 {

 // var nameArr = getArea.split(',');
  return getArea.map((item,index)=>( 
      
    <Grid item xs={12}>
      <ListItem>
      <AddIcon  onClick={(e)=>addroom(index)}/> 
    <TextField
          //  id="outlined-dense"
           label={`Area ${index+1}`}
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
           value={getArea[index]}
           variant="outlined"
           onChange={(event)=>handleperson(index,event.target.value)}
           fullWidth
         />
        
         <RemoveIcon  onClick={(e)=>deleteroom(index)}/>  
         </ListItem >  
    </Grid> 
))
}






{console.log('handle state')}
return(<Container maxWidth="xs">
   <Paper className={classes.paper}>
  
   <Grid item sm={12}>
      <Typography>
    <h2> Edit City </h2>
      </Typography>  
</Grid>


<Grid container xs={24}>
 <Grid item xs={12}>
 <TextField
        // id="outlined-dense"
        label="City Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={getFirstName}
        variant="outlined"
        onChange={(event)=>setFirstName(event.target.value)}
        fullWidth
      />
 </Grid>   
  

 <Grid item xs={3}>
       <input
        accept="image/*"
        className={classes.input}
        id="Picture"
        multiple
        type="file"
        onChange={(event)=>handlePicture(event)}
        fullWidth
      />
      <label htmlFor="Picture">
        <Button variant="contained" color="primary" component="span" className={classes.button} >
        Imagen
        </Button>
      </label>
      </Grid>
      <Grid item xs={3} >
      <Avatar alt="Picture" src={getPicturePath}  className={classes.bigAvatar} value={getPicturePath}/>
      </Grid>
 </Grid> 



{showList()}






 
 <Grid item xs={12} align='Right'>
 <Divider />
 <Button variant="contained"  onClick={handleSubmitEdit} color="primary" className={classes.button}>
  Edit
 </Button>
      

   <Typography>
    {getMessage}
    </Typography>
 </Grid>     
</Paper>
</Container>)

}
