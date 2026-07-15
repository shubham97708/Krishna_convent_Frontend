import React,{useEffect} from 'react';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';

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
import swal from 'sweetalert';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ListItem from '@material-ui/core/ListItem';

import SearchBar from './Map/SearchBar';

import Geocode from "react-geocode";
import ClientPortfolio from './ClientPortfolio';
Geocode.setApiKey("AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk");
Geocode.enableDebug();

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
    backgroundColor:'green'
  },
  input: {
    display: 'none',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  marginLeft:60,
  marginTop:20,
  },
  root3:{
   // width: '25%',
    border: '0.5px solid green',
   // height: "auto",
   // background: "#fff",
   // verticalAlign: "middle",
    
   // textAlign: "center",
   // alignItems: "center",
  
 //   alignContent: "flex-end",
 //   alignContent: "center",
  //  justifyItems: "center",
   // justifyContent: "center",
    display: "flex",
   // position: "absolute",
   // marginTop: '-100px',
  },
 
}));

export default function AddContact(props) {
  const classes = useStyles();
  const [getFirstName,setFirstName]=React.useState('')
  const [getPhone,setPhone]=React.useState('')
  const [getEmail, setEmail]=React.useState('')
  const [getPicture, setPicture]=React.useState('')
  const [getPicturePath, setPicturePath]=React.useState('')
  const [getMessage, setMessage ]=React.useState('')
  const [open, setOpen]=React.useState(false)
  const [getagentid, setagentid] = React.useState('')



  const [Address, SetAddress] = React.useState("Address Not Found")



  const [getarea,setarea] = React.useState([])
  const [ getTotalRoomArray, setTotalroomArray ] = React.useState([1]);
  const [ getTotalRoom, setTotalroom ] = React.useState(1);
  



  //Address To lat lon 
  const showalert = (data,index) => {
    var final = []
    var names = data.formatted_address;
    var nameArr = names.split(',');
    final = nameArr[0] 
    console.log("++++++++++++++++++++++++++++++++++++++++++++============  ",nameArr.length)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ADDRESS  ",final)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% INDEX  ",index)
   
    handlearea(index,final)
  
  
  
    // Geocode.fromAddress(data.formatted_address).then(
    //   response => {
    //     const {
    //       lat,
    //       lng
    //     } = response.results[0].geometry.location;
    //    setlatlng(
    //     initialConfig = {
    //       zoom: 12,
    //       center: {
    //         lat: lat,
    //         lng: lng,
    //       },
    //     }
    //     )
    //     console.log("My Lat ", lat, "My Lon ", lng)
        
    //   },
    //   error => {
    //     console.error(error);
       }
    





  function addroom(){
    let array = getTotalRoomArray
   // let room =props.route.params.remainroom
   // console.log("**************+++room+++++**********************",room)
   console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''",array)
    if(getTotalRoom<20){
      setTotalroom(getTotalRoom+1)
      array.push('')
      setTotalroomArray(array)
      
      console.log("**************++++++++**********************",array)
      console.log(getarea)
  }
}

function handleperson(index,event){

  let arraystate = [...getarea]
  arraystate[index] =event
  setarea(arraystate)

}

function showList()
 {

 // var nameArr = getArea.split(',');
  return getTotalRoomArray.map((item,index)=>( 
      
    <Grid item xs={12}>
      <ListItem>
      <AddIcon  onClick={(e)=>addroom(index)}/> 
    <TextField
           id="outlined-dense"
           label={`Area ${index+1}`}
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
           value={getarea[index]}
           variant="outlined"
           onChange={(event)=>handleperson(index,event.target.value)}
           fullWidth
         />
        
         <RemoveIcon  onClick={(e)=>deleteroom(index)}/>  
         </ListItem >  
    </Grid> 
))
}



// function deleteroom(){
//   let array = getTotalRoomArray
//   if(getTotalRoom>1){
//     setTotalroom(getTotalRoom-1)
//     array.splice(-1)
//     setTotalroomArray(array)
//     console.log("****************----------********************",array)
//   } 
// }


function deleteroom(index){
  console.log("Length Of mIne",index)
    let array = [...getarea]
    let arr=[...getTotalRoomArray]
    if(array.length>1){   
      array.splice(index,1)
      setarea(array)
      setTotalroomArray(array)
      
      console.log("****************----------********************",array)
    }
    else if(arr.length>1){
      arr.splice(index,1)
      setTotalroomArray(arr)
    } 
    else{
      swal("City", "City Have At least One Area", "error");
    }
    showList()
  
  }

function handlearea(index,event){
  let arraystate = getarea  
  arraystate[index-1] =event
  setarea(arraystate)
  console.log("adults ",getarea ," ++ "," length ",getarea.length)
}


function Room (){
  return  getTotalRoomArray.map((data) => {   
  return(

<React.Fragment>
    {/* <TextField
    id="outlined-dense"
    label={`${data}   Area`} 
    className={clsx(classes.textField, classes.dense)}
    margin="dense"
    value={getarea[data]}
    variant="outlined"
    onChange={(event)=>handlearea(data,event.target.value)}
    fullWidth
  /> */}


<Paper className = {classes.root3}  >

 {/* <SearchBar  add = { Address } setadd = { SetAddress }  alerr = { showalert }    /> */}
{data}
<SearchBar  add = { Address } setadd = { SetAddress }  alerr = { showalert } index={data}  />

</Paper>

</React.Fragment>
    )
  })
}


  
  const addNewRecord=async()=>{
      let firstData=getFirstName.replace(/ /g,'')
      if(getFirstName!='' && getPicture!= '' && getarea.length>0){
        const formData=new FormData()
        formData.append('firstname',getFirstName)
        formData.append('picture',getPicture)


        var err=false
        console.log(getarea)
        getTotalRoomArray.map((item,index)=>{
          
          var data=getarea[index]
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








        formData.append('area',getarea.join())
       if(!err && firstData!=''){
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('addcontact/addnewrecordpic',formData,config)
       
        if(result)
              {
                //setMessage("Contacto actualizado..")
              swal("City ", "City Added", "success");
              clearValues()
              props.refreshfunction()
              props.addcontactclose()

              props.changeView(<ClientPortfolio history={props.history} changeView={props.changeView} />)
              
                }
        else
               {
                swal("City", "Error In Server...", "error");
               //setMessage("Error al actualizar el contacto...")
               }
       }
       else{
         swal("", "Please Fill All Required Fields", "error");
       }
        
              }
              else{
                swal("City", "Please Fill All Fields", "error");
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

     const consoleFucn=()=>console.log("Clear............",getarea)

     const clearValues=async()=>{
       var arr=[]
      setTotalroom(1)
      setTotalroomArray([0])
      await setarea(arr)
      setFirstName('')
      setPhone('')
      setEmail('')
      setPicturePath('')
      }

      
  


const handlePicture=(event)=>{
  setPicturePath(URL.createObjectURL(event.target.files[0]))
  setPicture(event.target.files[0])

}


const handleClickOpen =async () => {
  if(getFirstName!='' && getPhone!= ''&& getEmail != ''){
            setOpen(true);
          }
  else{
    swal("Enviar", "Por favor llene toda la columna", "error");
  }

};

const handleClickClose =async () => {
  setOpen(false);
};

{console.log('handle state')}
return(<Container maxWidth="xs">
   <Paper className={classes.paper}>


   <Grid container xs={12}>
   <Grid  item sm={6}>
      <Typography>
    <h2> Add City  </h2>
      </Typography>  
</Grid>

{/* <Grid item sm={6} align='Right'>
  <Button  onClick={props.addcontactclose} >
       <HighlightOffIcon/> 
      </Button>
</Grid> */}
</Grid> 

<Grid container xs={24}>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="City Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={getFirstName}
        variant="outlined"
        onChange={(event)=>setFirstName(event.target.value)}
        fullWidth
      />
 </Grid>   
    
 <Grid item xs={2}></Grid>
 <Grid item xs={4}>
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
        <Button variant="contained" component="span" className={classes.button} >
          Image
        </Button>
      </label>
      </Grid>

      <Grid item xs={4} >
      <Avatar alt="Picture" src={getPicturePath} className={classes.bigAvatar} value={getPicturePath}/>
      </Grid>

      <Grid item xs={3}></Grid>

       {/* <Grid item xs={4}  >
      <Button className={classes.button} onClick={(e)=>addroom()} > +</Button>
      </Grid>

      <Grid item xs={4}  >
      <Button className={classes.button} onClick={(e)=>deleteroom()} >-</Button>
      </Grid>  */}

 
      
 <Grid item xs={12}>
 {/* <Room /> */}
 {showList()}
 </Grid>  

 </Grid> 
 
 <Grid item xs={12} align='Right'>



 <Button variant="contained"  onClick={addNewRecord} color="primary" className={classes.button}>
  Add
 </Button>
      

   <Typography>
    {getMessage}
    </Typography>
 </Grid>     
</Paper>
</Container>)

}
