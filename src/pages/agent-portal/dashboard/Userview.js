import React, { Component } from 'react';
import {postData} from '../../../services/FetchServices'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Script from 'react-load-script';
import TexField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import GitHubForkRibbon from "react-github-fork-ribbon";
import Geocode from "react-geocode";
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Map from './Map/index';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";




  
const styles = theme => ({
  resize:{
    fontSize:20,
    textAlign: 'center',
    
  },
  multilineColor:{
    color:'red',
    fontSize:20,
    textAlign: 'center',
},
ppr:{
  
  width:"86%",
  height:"38px",
  marginLeft:"2%",
  borderRadius:"12px",
  border:"2px solid #f5f2d0"
  
},
tp:{
  marginTop:"1%",
  marginLeft:"2%",
  fontSize:"18px",color:"#A9A9A9"
}
 
  
}); 





//const enhance = _.identity;

Geocode.setApiKey("AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk");
Geocode.enableDebug();
const MapLoader = withScriptjs(Map); 

class Userview extends Component {
  

  constructor(props) {
    super(props);

 /*    // our array
var movies = {"location":"Reservoir Dogs", "2":"Pulp Fiction","3": "Jackie Brown", 
"4":"Kill Bill", "5":"Death Proof", "6":"Inglourious Basterds"};
 
// storing our array as a string
localStorage.setItem("quentinTarantino", JSON.stringify(movies));
 
// retrieving our data and converting it back into an array
var retrievedData = localStorage.getItem("quentinTarantino");
var movies2 = JSON.parse(retrievedData);
  */
//making sure it still is an array


  this.state = {
    placehold:'',
    outlets:[],
    query: '',
    lat:'',
    lng:'',
    text:'',
    city:'',
    city1: '',
    query1: 'gwalior',
    lat1:'',
    lng1:'',
    clat1:'',
    clng1:'',
    text1:'',
    open: false,
    open1: false,
    clat:'',
    clng:'',
    cmapadd:'',
    outletmapadd:'',
    
    btn:true,
    locationforcity:'',
    cityfocus:'Enter City',
    recentSearch:[],
    locationnotavalable:'',
    distance:'',
    distance1:'',
    cityborderclr:"2px solid #f5f2d0",

    latitude: '',
    longitude: '',
    directions: null
    

  }

    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.handleScriptLoad1 = this.handleScriptLoad1.bind(this);
    this.handlePlaceSelect1 = this.handlePlaceSelect1.bind(this);
    this.getMyLocation = this.getMyLocation.bind(this)
    this.textInput = React.createRef();
  
  }



OutletNearOrNot=()=>{  
 return(<font style={{fontSize:"18px",color:"Orange"}}  >{this.state.distance}</font>) 
}

prrplatlng=(a,b)=>{
  
  localStorage.setItem("latforlastmap",a)
  localStorage.setItem("lngforlastmap",b)

 const f= localStorage.getItem("latforlastmap")
 const g =localStorage.getItem("lngforlastmap")


 console.log("paramete Lat",a)
 console.log("parameter Lng",b)
 console.log("localstorage Lat",f)
 console.log("localstorage Lng",g)
 
}






distance1 = ( clt,clg) => {
  let lat1=this.state.clat;
  let lon1=this.state.clng;
  let unit = "K";
  let lat2 = clt;
  let lon2 = clg;
    
   if ((lat1 == lat2) && (lon1 == lon2))
     {
     return 0;
      }
   else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
                          dist = 1;
                        }
                          dist = Math.acos(dist);
                          dist = dist * 180/Math.PI;
                          dist = dist * 60 * 1.1515;
          if (unit=="K") { dist = dist * 1.609344 }
          if (unit=="N") { dist = dist * 0.8684 }
 
          var num = dist;
          var n = num.toFixed(2);
          this.setState({
                          distance1:n
                        })
         
      }
 }



distance = (dt) => {
 let lat1=this.state.lat1;
 let lon1=this.state.lng1;
 let unit = "K";


 if(this.state.outlets.length>0){
  

   let lat2 = this.state.outlets[0].lat;
   let lon2 = this.state.outlets[0].lng;
   


	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }

    var num = dist;
  var n = num.toFixed(2);


    if(dist>15){
      this.setState({
        distance:"   Sorry!, This location is out of your pickup city"
      })
      //this.props.sendprops(false)
      this.sndprp(false)
    }
    else{
    this.setState({
     // distance:dist
     
     distance:n
    })
   // this.props.sendprops(dt)
    this.sndprp(dt)
    
  }
  }

}

else{

  this.setState({
    distance:"    Sorry!, This location is out of your pickup city"
  })
 // this.props.sendprops(false)
  this.sndprp(false)
}
}



// Show Recent Places
 recentplaces=()=>{  

 if(this.state.recentSearch.length==4){
  this.state.recentSearch.splice(-1,1)
 }
 
 return this.state.recentSearch.map((item,index)=>{
  return(
  <ListItem onClick={(e)=>{this.setState({text1:item,query1:item});this.check(item);this.checkCityviaOutlets(item);/*this.props.sendprops(item)*/this.sndprp(item)}}  button  style={{  width:'auto',marginTop:'0px'}} >
   <font style={{fontSize:"14px",color:"#808080"}}  >{item}</font>
  </ListItem>

  )
   })
  }



checkoutlets=async(classes)=>{
  const body={city:this.state.text}
  
  var result= await postData('user/checkOutlets',body)
  if(result.RESULT){
   

    this.setState({
      outlets:result.RESULT,
      text1:'',
      placehold:this.state.text
     
    })
  }
  
 else{

  this.setState({
    outlets:[],
    text1:''
  })
 }
}




// End **************




checkCityviaOutlets=async(item)=>{
  let body={location:item}
  
  var result= await postData('user/checkCityviaOutlets',body)
  if(result.RESULT){
   
    console.log(result.RESULT);
    this.setState({
      text:result.RESULT[0].city,
      lat:result.RESULT[0].lat,
      lng:result.RESULT[0].lng,
    
      city: result.RESULT[0].city,
     query: result.RESULT[0].city
      
    })
    console.log(result.RESULT[0].city)
    console.log(result.RESULT[0].lat)
    console.log(result.RESULT[0].lng)
  }
  
 else{
  console.log("Error from Data base");
  
 }
}


sndprp=(RawData)=>{

//var str1 = req.body.location;
//var loc1 = str1.split(', '+city[0]);
//console.log(city[0], loc1[0]);

//Removing last (,)
//var tmp = RawData;
//var loc = (tmp.slice(0,-2));
//console.log(req.body.location)
//console.log(words[0]);


if(RawData==false){

this.props.sendprops(RawData); 
}
else
{
  var str = RawData;
  var city = str.split(',');
  this.props.sendprops(city[0]); 
  
  this.setState({  
    outletmapadd:city[0]
  })
  
}



//console.log(city[0]);
}


// send lat lng to map from outlets via address
 check=(adt)=>{


Geocode.fromAddress(adt).then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log("Lat=",lat," Lng", lng);
    this.setState({
      lat1:lat,
      lng1:lng

    })
    this.prrplatlng(lat,lng);
  },
  error => {
    console.error(error);
  }
);


} 



/* onClick={this.setState({clat1:item.lat,clng1:item.lng});this.handleClickOpen1}
 */
/* <button float="right" onClick={(e)=>{this.setState({clat1:item.lat,clng1:item.lng});this.handleClickOpen1()}}>press me</button> */
// Popular Pickup Points
loca = () => {
  const classes = styles();

   var newArray = this.state.recentSearch.slice();    
 return this.state.outlets.map((item,index)=>{
return(
  
<ListItem onClick={(e)=>{this.setState({text1:item.location,query1:item.location,recentSearch:newArray,distance:''});/* this.props.sendprops(item.location) */this.sndprp(item.location);this.check(item.location); newArray.unshift(item.location);}}   button  style={{  width:'auto',marginTop:'1px'}} >
 <font style={{fontSize:"14px",color:"#808080"}}  >{item.location}
 
 
 <Button  onClick={(e)=>{this.setState({clat1:item.lat,clng1:item.lng});this.handleClickOpen1();this.distance1(item.lat,item.lng)}}  style={{float:"right"}}>
            <img  src='/images/tiny.png'></img>
            </Button>
 
 
 </font>
</ListItem>

)

 })
}





  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };
  
    
    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
     options
    );
    this.autocomplete.setComponentRestrictions(
        {'country': ['in']});
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }


  handleScriptLoad1() {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };
  
    
    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete1 = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete1'),
    // options
    );
    this.autocomplete1.setComponentRestrictions(
        {'country': ['in']});
    // Fire Event when a suggested name is selected
    this.autocomplete1.addListener('place_changed', this.handlePlaceSelect1);
  }
  



  

// List Map

  shw=()=>{


   

return( 
  <div style={{border:"2px solid black"}}>
<MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk"
      loadingElement={<div style={{ height: `100%` ,width:'100%'}} />}
      lat={this.state.clat} lng={this.state.clng} lat1={parseFloat(this.state.clat1)} lng1={parseFloat(this.state.clng1)}
    />
</div>
)

  }

 



  showmap=()=>{
    
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk",
    loadingElement: <div style={{ height: `100%`,width:'400px'}} />,
    containerElement: <div style={{ height: `265px`,width:`20%`,marginTop:`-36%`,marginLeft:'39%' }} />,
    mapElement: <div style={{ height: `100%`,width:"400px" ,border:'2px solid black'}} />,
    
  }),
  
  withScriptjs,
  withGoogleMap
)(props => (
  
  <GoogleMap   defaultZoom={17} defaultCenter={{ lat: this.state.lat1, lng:  this.state.lng1  }}>
        <Marker position={{ lat: this.state.lat1 , lng: this.state.lng1 }} />  
    
  </GoogleMap>

));

    return(
    <Paper style={{width:'1100px',height:'900px',marginLeft:'30%'}}>
    
     <GitHubForkRibbon 
       key="ribbon"
      // href="https://github.com/tomchentw/react-google-maps"
       target="_blank"
       rel="noopener noreferrer"
       //position="right"
    >
     </GitHubForkRibbon>
      </Paper>,
     <MyMapComponent key="AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk" />)
    
      }
      
  




  
  handlePlaceSelect() {
  
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      
      this.setState(
        { text:addressObject.name,
          city: addressObject.name,
          query: addressObject.formatted_address,
          lat:addressObject.geometry.location.lat(),
          lng:addressObject.geometry.location.lng(),
          cityborderclr:"2px solid #f5f2d0",
          distance:''
        }
       
      )
        
      localStorage.setItem("details", JSON.stringify(addressObject.name));
    }
     {
       
     this.checkoutlets();
     
      
    } 
  
  }

  handlePlaceSelect1() {
    if(this.state.text==''){
      this.textInput.current.focus();
      
      this.setState({
        cityfocus:"Please Select First",
        cityborderclr:"2px solid red"
        
      })
    }
    else{
    
    // Extract City From Address Object
    let addressObject1 = this.autocomplete1.getPlace();
    let address = addressObject1.address_components;
    const add = addressObject1.formatted_address;
    //this.props.sendprops(add);
    this.sndprp(add)


    //this.props.data(this.state.lat,this.state.lng,this.state.lat1,this.state.lng1)  



 // this.checkOutletsInSelectedCity(add);

  //our function    


    // Check if address is valid
    if (address) {
      // Set State
      
      this.setState(
        { text1:addressObject1.name+","+addressObject1.formatted_address,
          city1: addressObject1.name,
          
          query1: addressObject1.formatted_address,
          lat1:addressObject1.geometry.location.lat(),
          lng1:addressObject1.geometry.location.lng()
          
          
        }
      
      )
      //this.distance(this.state.text1);
      console.log("Text1 Set Mannualy")
      this.distance(this.state.text1);
        

    }}
  }

  handleClickOpen1 = () => {
    this.setState({ open1: true });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange=()=>{
    
    
    if(this.state.text>'' && this.state.text1>''){


      this.setState({ btn: false });
    
  }
    
  }







 
    
    


  componentDidMount=()=> {
        const location = window.navigator && window.navigator.geolocation
   
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
              clat: position.coords.latitude,
              clng: position.coords.longitude,
           
            })
            Geocode.fromLatLng(position.coords.latitude,position.coords.longitude ).then(
              response => {


                const address = response.results[0].formatted_address;
               
                var str = address;
                var city = str.split(',');
                
             
                this.setState({  
                  cmapadd:city[0],
                

                
                  
                })



              },
              error => {
                console.error(error);
              }
            );
        
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          })
        }
      
          
        
      }
    
    
    














  getMyLocation=()=> {

if(this.state.text==''){
  this.textInput.current.focus();
  
  this.setState({
    cityfocus:"Please Select First",
    cityborderclr:"2px solid red"
    
  })
}
else{
    const location = window.navigator && window.navigator.geolocation
// var newArray = this.state.recentSearch.slice(); 
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          lat1: position.coords.latitude,
          lng1: position.coords.longitude,
          clat: position.coords.latitude,
          clng: position.coords.longitude,
          cityborderclr:"2px solid #f5f2d0",
        //  recentSearch:newArray
                
        })
        
        Geocode.fromLatLng(position.coords.latitude,position.coords.longitude ).then(
          response => {
            const address1 = response.results[0].formatted_address;
            const address2 = response.results[2].formatted_address;
            const address4 = response.results[4].formatted_address;
            const address5 = response.results[5].formatted_address;
            this.distance(address1);
    
           // this.props.sendprops(address2);
           // newArray.unshift(address5)
            this.setState({  
              text1:address1,
              query1:address1,
            //  text:address4
            
              
            })
            console.log("Text1 Set by location buton");
            
          },
          error => {
            console.error(error);
          }
        );
    
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  
      
    }
  }








  










   
  render() {
    const { classes } = this.props;
    const MapLoader = withScriptjs(Map); 
     return (
      <div className={classes.root}>
       <Grid container spacing={24}>
       <Grid style={{marginLeft:'2%'}} item xs={6}>
       
       <div>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk&libraries=places'
          
          onLoad={this.handleScriptLoad}
        />
         
        <TexField id="autocomplete" style={{width:200,border:this.state.cityborderclr,borderTopLeftRadius:'12px',borderBottomLeftRadius:'12px'}} 
        
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.resize,
           
          },
        }}
        value={this.state.text} placeholder='Enter City'   inputRef={this.textInput} 
  onChange={(e)=>this.setState({text:e.target.text})} onFocus={this.handleChange} placeholder={this.state.cityfocus}   width={700}/>
   

      </div>
      </Grid>



      <Grid  style={{marginLeft:'-26%'}} item xs={6}>
      
      <div>
       <Script
         url='https://maps.googleapis.com/maps/api/js?key=AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk&libraries=places'
         
         onLoad={this.handleScriptLoad1}
       />
        
       <TexField  id="autocomplete1" style={{textUnderlinePosition:5 , width:500,border:'2px solid #f5f2d0',borderTopRightRadius:'12px',borderBottomRightRadius:'12px'}} 
       InputProps={{
        disableUnderline: true,
        classes: {
          
          input: classes.resize,
        },
      }}
       value={this.state.text1} placeholder={'Tell Us Your Starting Point In '+this.state.placehold}
 onChange={(e)=>this.setState({text1:e.target.text1})}     width={300}/>
  
  <Button onClick={this.getMyLocation}  style={{marginLeft:'133%',marginTop:'-16%'}}>
            <img src='/images/tiny.png'></img>
            </Button>

      <div>
        {/*   {this.state.lat1}
          2222222222222
          {this.state.lng1} */
          /* this.state.locationnotavalable */
          
          }
          
      </div>
       
     </div>
     </Grid>

</Grid>


<Button variant="outlined"    onClick={this.handleClickOpen} style={{color:'#A9A9A9',borderRadius:'12px', border:'2px solid #f5f2d0',marginLeft:'100%',marginTop:'-13%',width:'15%'}}>
          Show Mapssss
        </Button>
        {/* map content */}
        <Dialog   
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle  id="alert-dialog-title"><center><img height="40px" src="images/logo.png"/></center></DialogTitle>



          <TexField 
        
         InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.resize,
          },
        }} 
        value={this.state.text} placeholder='Enter City'
  onChange={(e)=>this.setState({text:e.target.text})}    width={700}/>


______________________________________________________________________
<TexField id="autocomplete1"  
       InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.resize,
        },
      }}
       value={this.state.text1} placeholder='   Enter PickUp Address'
 onChange={(e)=>this.setState({text1:e.target.text1})}  width={300}/>

           



          <div style={{marginLeft:'-230px',marginTop:'55%',width:'700px'}}> {this.showmap()}</div>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        
           
      <Paper className={classes.ppr}>
        <Typography className={classes.tp} >
                You Are Far From Us:     
        { this.OutletNearOrNot()}
        </Typography>
      </Paper>
       

        <div style={{marginLeft:'2%',float:"left",marginTop:"8%" ,border:"2px solid #f5f2d0",borderTopLeftRadius:"12px",minHeight:"300px",width:"450px"}}>
        <p style={{color:"#A9A9A9",marginLeft:"25%",fontSize:"18px"}}>Recent Search</p>
        {this.recentplaces()}</div>



<div style={{marginLeft:'468px',marginTop:"8%" ,border:"2px solid #f5f2d0",borderTopRightRadius:"12px",minHeight:"300px",width:"500px"}}>
  <p style={{color:"#A9A9A9",marginLeft:"35%",fontSize:"18px"}}>Popular Pickup Points</p>
      {this.loca()}</div>
       

      <Dialog  style={{border:"4px solid black"}} 
          open={this.state.open1}
          onClose={this.handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
         
 <DialogTitle  id="alert-dialog-title"><center><img height="40px" src="images/logo.png"/></center></DialogTitle>
 <DialogContentText style={{color:"orange", fontSize:"18px"}} ><center>(A){"   "}{this.state.cmapadd}{"   "}&nbsp; {"   "} (B){"  "}{this.state.outletmapadd}{"      "}{this.state.distance1}{"  "}KM.</center></DialogContentText>
 

          {this.shw()}
          
        </Dialog>
      </div>
    );
  }
}
Userview.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(Userview);
