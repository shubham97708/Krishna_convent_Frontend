import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  Geocode
} from "react-google-maps"

// import {getData,postData, postDataAndImage} from '../../FetchServices';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HotelIcon from '@material-ui/icons/Hotel';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BaseUrl from '../../../../services/BaseUrl'
import { Carousel } from 'react-responsive-carousel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HomeIcon from '@material-ui/icons/Home';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import BathtubIcon from '@material-ui/icons/Bathtub';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },   
  app:{
    color:'black',
    backgroundColor:'white',
    position:'fixed',
    marginBottom:50,
    borderBottom:'0'
  },
button:{
    margin:10, 
        color:'black',
        fontWeight:'bold',  
        '&:hover': {
            backgroundColor: '#01a3a4',
          color:'white',
        fontStyle:"bold"},
  },
  
  button1: {
    border: '0.5px solid grey',
    width:"auto",
    maxWidth:360,
    margin:10, 
    color:'black',
    fontWeight:'bold',
    
    '&:hover': {
        backgroundColor: '#01a3a4',
      color:'white',
    fontStyle:"bold"},
  },
  
  button2:{
    height:'auto',
    color:'black',
    backgroundColor: 'white',
  },
  signupbutton: {
    border: '0.5px solid grey',
    width:"auto",
    maxWidth:360,
    margin:10, 
    color:'black',
    fontWeight:'bold',
    
    '&:hover': {
        backgroundColor: '#01a3a4',
      color:'white',
    fontStyle:"bold"},
  },

  menuButton: {
    marginRight: theme.spacing(2),
      marginLeft: -18,
    marginRight: 10,
  },

  title: {
    fontWeight:'bold',
    flexGrow: 1,
   
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(3),
    
  },

  Card:{  
    color:'black',
    fontWeight:'bold',    
    height:'auto',
    width:220,
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
    paddingBottom: theme.spacing(6),
    
  },
  cardContent: {
    flexGrow: 1,
    
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    
  },
  list:{
    height:'auto',
    marginTop:-4,
    marginLeft: -50,
  },
list1:{
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(0),
  padding:theme.spacing(0)
},
paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  toggle:{
        color:'black',
        fontWeight:'bold',
         border: '1px solid',
        '&:hover': {
            backgroundColor: '#01a3a4',
          color:'white',
        fontStyle:"bold"},
  },
  toggles:{
    width:"100%",
         color:'black',
         fontWeight:'bold',
          border: '1px solid',
         '&:hover': {
             backgroundColor: '#01a3a4',
           color:'white',
         fontStyle:"bold"},
   },
  togglegroup:{
     margin:4, 
     width:"96%",
           },
  popper:{
    border: '2px solid',
  },
 minmax:
 {
   margin:10,
 },

atcom:
{
  width:"96%",
  margin:9,
},
lowerbutton:
{
  width:"96%",
  margin:"1%",
  color:'black',
  fontWeight:'bold',
  
  '&:hover': {
      backgroundColor: '#01a3a4',
    color:'white',
  fontStyle:"bold"},
},
}));


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  const classes = useStyles();




  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 26.2183, lng: 78.1828 }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)

        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {marker.shelter }               
{/* /////////////////////////////////////////////////////////////////////////////////////////// */}
<Card className={classes.Card}>


 <img src={`${BaseUrl}/images/${marker.picture}`} height='110' width='220'/> 


<CardContent  style={{height:'auto'}}>
  <Grid xs={12} container direction="row" > 
            <Typography  variant="h6" >${marker.price}</Typography>
    <ArrowDownwardIcon style={{marginTop:5, color:'green'}}/>    
  </Grid>
  <Grid xs={12} container direction="row" >  
  <AirlineSeatIndividualSuiteIcon fontSize='small' style={{ color:'grey'}}/> 
  <Typography  variant="h6" style={{fontSize:13,color:'grey',fontWeight:'500'}} >{marker.room}</Typography>   
  <BathtubIcon fontSize='small' style={{ color:'grey', marginLeft:'10'}}/> 
  <Typography  variant="h6" style={{fontSize:13,color:'grey',fontWeight:'500'}} >{marker.bathroom}</Typography>   
  <SquareFootIcon fontSize='small' style={{ color:'grey', marginLeft:'10'}}/> 
  <Typography  variant="h6" style={{fontSize:13,color:'grey',fontWeight:'500'}} >{marker.size} -Sqft</Typography>    
  </Grid>

 <Grid style={{marginTop:'20'}} >
<Typography  variant="h6" style={{fontSize:13,color:'grey',fontWeight:'500', marginTop:'20'}} >{marker.mapaddress}</Typography> 
</Grid> 
</CardContent>
</Card>
{/* //////////////////////////////////////////////////////////////////////////////////////////// */} 
                  </div>
              </InfoWindow>}
            
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

var count = 0
var dataarray = []

export default class ShelterMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelters: [],
      selectedMarker: false
    }
  }
 

  componentDidUpdate(){

    console.log("$$$$$$$$$$ CHange ++ ",JSON.parse(this.props.mapdata) )
    if(count == 0){
               if(this.props.mapdata == "[]"){    
                                             console.log("  111111 This Props Data Map Data With WillUpdate IF    ",JSON.parse(this.props.mapdata))                                
                                            }
               else{ 
                                               console.log("  111111 This Props Data Map Data With WillUpdate Else  ",JSON.parse(this.props.mapdata))
      
              for( var i =0 ; i < JSON.parse(this.props.mapdata).length; i++){
                let Pic =(JSON.parse(this.props.mapdata)[i].picture).split(' ')
                let Add =(JSON.parse(this.props.mapdata)[i].mapaddress).split(',')
                  var datajson ={
                  "id":JSON.parse(this.props.mapdata)[i].id,
                  "picture":Pic[0],
                  "latitude":JSON.parse(this.props.mapdata)[i].lat,
                  "longitude":JSON.parse(this.props.mapdata)[i].lng,
                  "price":JSON.parse(this.props.mapdata)[i].price,
                  "room":JSON.parse(this.props.mapdata)[i].room,
                  "bathroom":JSON.parse(this.props.mapdata)[i].bathroom,
                  "parking":JSON.parse(this.props.mapdata)[i].parking,
                  "size":JSON.parse(this.props.mapdata)[i].size,
                  "mapaddress":Add[0]+Add[1], 
                  }
                  dataarray.push(datajson)
             } 
             console.log(dataarray)
                this.setState({ shelters : dataarray})
                count++
          }
        }
  }
 

  handleClick = (marker, event) => {
     console.log( marker )
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.shelters}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk&v=3.exp&libraries=geometry,drawing,places"   
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}