import React,{useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import { Container, Typography ,Divider} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Gmap from "./Map/index";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {postData} from '../../../services/FetchServices';
import BaseUrl from '../../../services/BaseUrl'
import {ListItemIcon,List,CardContent} from '@material-ui/core';
import HotelIcon from '@material-ui/icons/Hotel';
import HomeIcon from '@material-ui/icons/Home';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Paper from '@material-ui/core/Paper';
import { Carousel } from "react-responsive-carousel";
import Carousel1 from 'react-material-ui-carousel'
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import Rating from '@material-ui/lab/Rating';

import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // For Image Slider

const useStyles = makeStyles(theme => ({

  
  card: {
    maxwidth: 300,
    maxheight: 400,
  },
  card1:{
    minWidth: 123,
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontSize:30,
    fontWeight:'bold',
    letterSpacing: '2px',  
    padding: '10px',
   
 },
 enquiry:{
marginTop:"35%"

 },
  image:{
    width:"100%",
    height:"100%",
    paddingTop:35,
    paddingBottom:35,
   paddingRight: 35,
   paddingLeft:35,
  
 },
 imagecardhover:{
  width:600,
  height:430,

  background: 'rgba(0, 0, 0, 0.7)',//1vikram
  opacity:4,//vikram
  '&:hover': {              
     height:420,
     width:300,           
     transition: '.5s'
    },
    transition: '.5s'
},
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    height:'10px',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  button1: {
        
    margin:10, 
    color:'black',
    fontWeight:'bold',
    
    '&:hover': {
        backgroundColor: '#01a3a4',
      color:'white',
    fontStyle:"bold"},
  },
 link:
 {
   color:'#01a3a4',
 },
 icon:{
  color:'#01a3a4',
},
 card1:
 {
backgroundColor:'#01a3a4',
 },
 disablebutton: {
    
  margin:10, 
  color:'black',
  fontWeight:'bold',
  
  '&:hover': {
      backgroundColor: '#01a3a4',
    color:'white',
  fontStyle:"bold"}, 

},
avatar: {
    width: theme.spacing(14),
    height: theme.spacing(10),
  },
des:{
  marginTop:'3%'
},Card:{  
  color:'black',
  fontWeight:'bold',
  height:130,
  // width:250,
},
buttonf:{
  marginTop:10,
padding:"3%",
backgroundColor:'#01a3a4',
margin: theme.spacing(3, 0, 2),

},
CardC:{  
  color:'black',
  fontWeight:'bold',
  height:380,
  // width:250,
},
button2:{

  color:'black',
  backgroundColor: 'white',
},

list:{
  marginTop:-4,
  marginLeft: -22,
},

list1:{
marginLeft: theme.spacing(0),
marginRight: theme.spacing(0),
padding:theme.spacing(0)
},
}));






export default function SafetyAndCrime(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [getMapAddress, setMapAddress] = React.useState('')  
  const [getlatt, setlatt] = React.useState('') 
  const [getlngg, setlngg] = React.useState('') 
  const { loading = false } = props;

  const [getPhone, setPhone] = React.useState('')  
  const [getPostDataList, setPostDataList] = React.useState([])  
  const [getPMessage, setPMessage] = React.useState('')  
  const [getMessage, setMessage] = React.useState('')  

  const [getDataList,setDataList]=React.useState([])
  const [getPicture,SetPicture]=React.useState([])
  const setaddresstostate =async (data,latt,lngg) => {
    setMapAddress(data)
    setlatt(latt)
    setlngg(lngg)
}

const setuserdata = async ()  =>{
  let rec=  JSON.parse(localStorage.getItem('AGENT'))
   console.log("Agent Image",rec)
   
   
   let body ={
    id:rec[0].id
  }

   let result = await  postData('postadd/displaydatabyagent1',body)    // for similar properties
   setDataList(result)
   console.log("Agent data",result)
 }
var Picture=[];

 


const getPostDataById=async()=>{
  var id=props.postid
  console.log("gggg",id)
   var body={
    id:id,
   }
  let result = await  postData('postadd/displaypostbyid',body)    // for main post
  await setPostDataList(result[0])
  console.log("Postdata",result[0])
  var Pic=(result[0].picture).split(' ')
console.log('pic',Pic)

for(var i=0;Pic[i];i++){
  Picture[i]=Pic[i]
}
console.log('hhh',Picture)
SetPicture(Picture)
}
 



// const showfacility=(data)=>{

//   const nameArr = data.split(',');

//   console.log("Facility Data",nameArr)

//   // return(nameArr.map((item,index)=>( 
//   //  <div>
//   //   {item.index}
//   //  </div>)
//   //  ))

// }



const handleSubmit=async()=>{

  let data={'phone':getPhone,
            'message':getPMessage}
  let result=await postData('chat/addNewRecord',data)
  if(result)
  {setMessage("Record Subbmited..")}
  else
  {
   setMessage("Fail to Submit Record...")
  }

 }


 useEffect(()=>{
   getPostDataById();
  setuserdata(); 
},[]) 

function ShowImage(){
  return(getPicture.map(item=>( <div>
    <img src={`${BaseUrl}/images/${item}`} height={400} width={"100%"}  />
 </div>))
   
  )
}
function ShowImage1(pic){
  var Pic=pic.split(' ')
 var Pic1=[]
  for(var i=0;Pic[i];i++){
    Pic1[i]=Pic[i]
  }
 
  
  return(Pic1.map(item=>( <div>
    <img src={`${BaseUrl}/images/${item}`} height='150'  />
 </div>))
   
  )
}


function Post(){
  
return(getDataList.map(item=>(
    

<Box style={{display:'flex',flexWrap:'wrap'}} className={classes.Top}  >   
  <Box   width={300} marginRight={4} my={5} >

  <Card className={classes.CardC}>
  <Carousel showThumbs={false} style={{ width: 280, height: 250 , borderRadius:'7px'}}>
  {ShowImage1(item.picture)}
</Carousel> 

 <Button className={classes.button2} /* onClick={()=>handleClickNext( item.id)} */>  

      <Box pr={2} >
      <CardContent  style={{height:190}}>
      <Grid Container spacing={2}>

      <Grid xs={12} className={classes.list} > 
      <Typography display="block" variant="caption" className={classes.list1}>

      <List component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
        <ListItem>
          <ListItemIcon>
          <HomeIcon style={{color:"black"}}/>
          </ListItemIcon>
          {item.categoryid}   
        </ListItem>
        <ListItem>
          <ListItemIcon>
          <AttachMoneyIcon style={{color:"black"}}/>
          </ListItemIcon>
          {item.price} 
        </ListItem>
  </List>

      </Typography>  
      </Grid>


      <Divider /> <Divider /> 

      <Grid xs={12} className={classes.list}>
        <Typography display="block" variant="caption" className={classes.list1}>

        <List component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
        <ListItem>
          <ListItemIcon>
          <HotelIcon style={{color:"black"}}/>
          </ListItemIcon>
          {item.room}
        </ListItem>
        <ListItem>
          <ListItemIcon>
          <BathtubIcon style={{color:"black"}}/>
          </ListItemIcon>
          {item.bathroom}
        </ListItem>

        <ListItem>
          <ListItemIcon>
          <DirectionsCarIcon style={{color:"black"}}/>
          </ListItemIcon>
          {item.parking}
        </ListItem>
  </List>
    </Typography>
      </Grid>   

 
      <Divider /> <Divider /> 

      <Grid xs={12} className={classes.list}>
      <ListItem>
          {item.mapaddress}
        </ListItem>
        </Grid>
        </Grid>
        </CardContent>
      </Box>
      </Button>
      </Card>

  </Box>
  </Box>


))
  );
}

 
return(
  <div>
  
    <Container>
<Grid container  spacing={2}>

<Grid item xs={12}> 

      <List  component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
          <ListItem>
          <Rating
           max={7}
           name="simple-controlled"
           value={getPostDataList.rating}
          />

          <Typography  display="block" style={{color:'#2BB573',padding:10}}>
                  <h3>{getPostDataList.name} </h3>
          </Typography>
        </ListItem>
   </List>
</Grid>    


<Grid item xs={12} sm={12}>
    <Box> 
       <Carousel1 showThumbs={false} infiniteLoop={true} index={0}>
          { ShowImage()}
      </Carousel1>
    </Box>
</Grid>
      
<Divider /> <Divider />      
{/* </Paper> */}


{/* <Grid item xs={12} sm={4} align="center"> 
<Container component="main" maxWidth="xs">
<CssBaseline />
<div>
< Gmap addresstatechangefun={setaddresstostate} /> 
</div>
  </Container>
</Grid> */}





      
<Divider /> <Divider /> 

<Grid item xs={12} sm={12}>   
<Typography><h2>Details</h2></Typography>

<Grid>
<Box> 
  <List  component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
          <ListItem>
          <ListItemIcon>
          <AttachMoneyIcon/>
          </ListItemIcon>
          <Typography  display="block">
            
          <h3 style={{color:'#2BB573'}}>Price : {getPostDataList.price} </h3>
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
          <AttachMoneyIcon />
          </ListItemIcon>
          <Typography  display="block">
          <h3 style={{color:'#2BB573'}}>Discount : {getPostDataList.discount} </h3>
          </Typography>
        </ListItem>


        <ListItem>
          <ListItemIcon>
          <SquareFootIcon/>
          </ListItemIcon> 
          <Typography  display="block">
          <h3 style={{color:'#2BB573'}}> Contact No. : {getPostDataList.contactno}</h3> 
          </Typography>    
        </ListItem>
       
      </List>   
      </Box>
  </Grid>

  <Divider /> <Divider /> 



<Grid>
  <Box>
        <List  component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
        <ListItem>
        <ListItemIcon>
          < BusinessRoundedIcon/>
          </ListItemIcon>
      <h4 style={{color:'#2BB573'}}>Address :</h4><h4 style={{color:'#2BB573'}}> {getPostDataList.mapaddress}</h4>
        </ListItem>   
      </List>
  </Box> 
 
  <Divider /> <Divider /> 

<Box>
      <List  component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
      <ListItem>
      <ListItemIcon>
      < BusinessRoundedIcon/>
      </ListItemIcon>
      <b style={{color:'#2BB573'}}>Description :</b>
        
                 <h4 style={{color:'#2BB573'}}>
                    {getPostDataList.description}
                 </h4>

      </ListItem>   
    </List>
</Box> 

<Divider /> <Divider /> 
<Box>
      <List  component="nav" aria-label="main mailbox folders" style={{display:'flex',flexwrap:'wrap'}}>
      <ListItem>
      <ListItemIcon>
      < BusinessRoundedIcon/>
      </ListItemIcon>
      <b style={{color:'#2BB573'}}>Facility :</b>
        
                 <h4 style={{color:'#2BB573'}}>
                   {getPostDataList.facility}
                 {/* {showfacility(getPostDataList.facility)} */}
                  
                 </h4>
      </ListItem>   
    </List>
</Box>




</Grid> 


</Grid>
</Grid>

       
</Container>
    </div>
 )
}
