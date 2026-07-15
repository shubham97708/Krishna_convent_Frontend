import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StyleIcon from '@material-ui/icons/Style';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TabIcon from '@material-ui/icons/Tab';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Gmap from "../Map/index";
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Brightness3Icon from '@material-ui/icons/Brightness2';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';






//import RealState from './profile/RealState';


const useStyles = makeStyles(theme => ({

  paper: {
    // background:'#fff5cc',
     padding:'30px',
     align:'center',
     //marginLeft:'200px',
     //marginRight:'200px',
     marginTop:'10px',
     width:'100%',
   },
  card: {
    minWidth: 245,
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
}));


const data = [
  {
    title: 'Centennial Academy',
    pk: 'PK-8',
    security: 'PUBLIC',
    strength: '750 Students',
    place: 'Atlanta Public Schools',
    schoolrating:'Great Schools Rating',
    starrating:'Parent Rating Average',
    peopleavatar:'Parent Review',
    time:'7min ago',
    reviews:'14 reviews',
  },
  {
    title: 'Centennial Academy',
    pk: 'PK-8',
    security: 'PUBLIC',
    strength: '750 Students',
    place: 'Atlanta Public Schools',
    schoolrating:'Great Schools Rating',
    starrating:'Parent Rating Average',
    peopleavatar:'Parent Review',
    time:'7min ago',
    reviews:'14 reviews',
  },{
    title: 'Centennial Academy',
    pk: 'PK-8',
    security: 'PUBLIC',
    strength: '750 Students',
    place: 'Atlanta Public Schools',
    schoolrating:'Great Schools Rating',
    starrating:'Parent Rating Average',
    peopleavatar:'Parent Review',
    time:'7min ago',
    reviews:'14 reviews',
  },
  {
    title: 'Centennial Academy',
    pk: 'PK-8',
    security: 'PUBLIC',
    strength: '750 Students',
    place: 'Atlanta Public Schools',
    schoolrating:'Great Schools Rating',
    starrating:'Parent Rating Average',
    peopleavatar:'Parent Review',
    time:'7min ago',
    reviews:'14 reviews',
  },
  {
    title: 'Centennial Academy',
    pk: 'PK-8',
    security: 'PUBLIC',
    strength: '750 Students',
    place: 'Atlanta Public Schools',
    schoolrating:'Great Schools Rating',
    starrating:'Parent Rating Average',
    peopleavatar:'Parent Review',
    time:'7min ago',
    reviews:'14 reviews',
  },
  {
    title: 'Centennial Academy',
    pk: 'PK-8',
    security: 'PUBLIC',
    strength: '750 Students',
    place: 'Atlanta Public Schools',
    schoolrating:'Great Schools Rating',
    starrating:'Parent Rating Average',
    peopleavatar:'Parent Review',
    time:'7min ago',
    reviews:'14 reviews',
  },
 
  
];





export default function SafetyAndCrime(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [getMapAddress, setMapAddress] = React.useState('')  
  const [getlatt, setlatt] = React.useState('') 
  const [getlngg, setlngg] = React.useState('') 
  const { loading = false } = props;

  const setaddresstostate =async (data,latt,lngg) => {
    setMapAddress(data)
    setlatt(latt)
    setlngg(lngg)
};

  return (
    <Container>

<div>
<Box>
  <Typography variant="button" display="block" gutterBottom>
        <h2>Safety And Crime</h2>
</Typography>
       < Gmap addresstatechangefun={setaddresstostate} /> 
     {/*  <Map/> */}
     <Typography color="textSecondary">
       <p><h5>Data provided by <Link className={classes.link} href="https://spotcrime.com">spotcrime.com</Link> and <Link className={classes.link} href="https://crimereports.com">crimereports.com</Link>. <Link className={classes.link} href="https://abouttrulia.com">Learn more</Link>.</h5></p>
</Typography>
<Typography variant="button" display="block" gutterBottom>
<h2>What Local Say About Safety</h2>
</Typography>
<Typography  display="block" color="textSecondary" gutterBottom>
At least 126 Trulia users voted on each feature.
</Typography>


<Box display="flex" flexDirection="row" p={1} m={1} >
<Box p={1}>   
        <ListItem>
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon />
          </ListItemIcon>   
          <ListItemText primary="78%" />  
          </Button>
          <ListItemIcon className={classes.icon}>
            <DirectionsWalkIcon />
          </ListItemIcon>  
          <ListItemText primary="it's dog are friendly" /> 
        </ListItem>
      </Box>  

      <Box p={1}> 
        <ListItem >     
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon/>
          </ListItemIcon>
          <ListItemText primary="76%" />
          </Button>    
          <ListItemIcon className={classes.icon}>
            <ApartmentIcon />
          </ListItemIcon>  
          <ListItemText primary="Car is needed" /> 
        </ListItem>
        </Box>   


<Box p={1}>
        <ListItem>  
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="87%" />
          </Button>
          <ListItemIcon className={classes.icon}>
            <Brightness3Icon />
          </ListItemIcon>  
          <ListItemText primary="There are sidewalks" /> 
        </ListItem>
        </Box>
      </Box>

<Typography color="textSecondary">
       <p><h5> <Link className={classes.link} href="https://truliamethodology.com">Learn more </Link> about our methodology.</h5></p>
</Typography>


<Typography variant="button" display="block" gutterBottom>
        <h2>Schools</h2>
</Typography>

<Box display="flex" flexDirection="row" p={-1} m={-2} >
  <Box p={1}>
  <Button className={classes.button1} variant="outlined"  style={{fontStyle:'bold'}} color="inherit">Buy</Button>
  </Box>
  <Box p={1}>
  <Button className={classes.button1}  variant="outlined" style={{fontStyle:'bold'}} color="inherit">Rent</Button>
  </Box>
  <Box p={1}>
  <Button className={classes.button1} variant="outlined" style={{fontStyle:'bold'}} color="inherit">Mortgage</Button>
  </Box>
  </Box>   
  
   

          <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} width={200} marginRight={0.5} pr={5} my={1}>
         

          {item ? (
            <Box pr={-8}>
              <Card>
                <CardContent>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${item.pk} • ${item.security} • ${item.strength}`}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.place}
              </Typography>
              
              <Box display="flex" flexDirection="row" p={1} m={1} >
<Box p={1}>
      <Avatar>N/A</Avatar>
      <Typography variant="caption">{item.schoolrating}</Typography>
      </Box>
      <Box p={1}>
        <Rating
          name="customized-empty"
          value={2}
          precision={0.5}
          emptyIcon={<StarIcon fontSize="small" />}
        />
         <Typography variant="caption">{item.starrating}</Typography>
         </Box>
</Box>     

      <Card className={classes.card1}>
        <CardContent>
        <Typography>My son attended the public pre-K program at Hope Hill and is now in kindergarten. The teachers and administrative faculty are fantastic. </Typography>
        <Box display="flex" flexDirection="row" p={1} m={1} >
          <Box p={1}>
      <Avatar src="/broken-image.jpg" style={{float:"left",}}/>
      </Box>
      <Box p={1}>
      <Typography variant="h6" style={{float:"right",}}>{item.peopleavatar}</Typography>
      <Typography display="block" variant="caption" color="textSecondary">
                {item.time}
      </Typography>
      </Box>
      </Box>
      </CardContent>
      </Card>
      
      <Typography display="block" variant="caption" color="textSecondary">
                {item.reviews}
      </Typography>
      
</CardContent>
              </Card>
            </Box>
          ) : (
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
   

    <Typography color="textSecondary">
       <p><h5> <Link className={classes.link} href="https://GreatSchools.com">GreatSchools </Link> ratings are based on test scores and additional metrics when available.</h5></p>
</Typography>
<Typography color="textSecondary">
       <p><h5> Check with the applicable school district prior to making a decision based on these schools.<Link className={classes.link} href="https://GreatSchools.com"> Learn more. </Link></h5></p>
</Typography>

     </Box>

</div>
</Container>
  );
}
