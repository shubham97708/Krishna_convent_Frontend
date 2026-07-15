import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Carousel from 'react-material-ui-carousel'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Gmap from "../Map/index";
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';


//import Map from './Map';

const useStyles = makeStyles(theme => ({
  paper: {
    // background:'#fff5cc',
     padding:'30px',
     align:'center',
     //marginLeft:'200px',
     //marginRight:'200px',
     marginTop:'10px',
     width:'50%',
     margin: theme.spacing(3),
     
   },
   
  card: {
    maxWidth: 150,
    marginTop:15,
  },
  media: {
    height: 150,
  },
  card1: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:170,
  },
  media: {
    height: 150,
  },
  card2: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:340,
  },
  media: {
    height: 150,
  },
  card3: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:510,
  },
  media: {
    height: 150,
  },
  card4: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:680,
  },
  media: {
    height: 150,
  },
  card5: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:850,
  },
  media: {
    height: 150,
  },
  card6: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:1020,
  },
  media: {
    height: 150,
  },
  card7: {
    maxWidth: 150,
    marginTop:-300,
    marginLeft:1280,
  },
  media: {
    height: 150,
  },
  link:
 {
   color:'#01a3a4',
 },
 icon1:{
  color:'#C66A0E',
},
   
 button: {
        
  
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
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: 'Atlanta Breakfast club',
    culturaldish: 'Ameriacan (Traditional)',
  },
];


function AreaMap(props)
{
    const classes = useStyles();
    const [getMapAddress, setMapAddress] = React.useState('') 
    const [getlatt, setlatt] = React.useState('') 
    const [getlngg, setlngg] = React.useState('')
    const { loading = false } = props;


const setaddresstostate =async (data,latt,lngg) => {
    setMapAddress(data)
    setlatt(latt)
    setlngg(lngg)
};

return(

  <Container>
    <div>
      <Box>
   <Typography variant="button" display="block" gutterBottom>
        <h2>Explore The Area</h2>
      </Typography>
      <Box display="flex" flexDirection="row" p={3} m={-5}>
        <Box p={3} >
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Highlights</Button>
      </Box>

       <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Restaurants</Button>
      </Box>
      
      <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Groceries</Button>
      </Box>
      
      <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Nightlife</Button>
      </Box>
      
      <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Cafes</Button>
      </Box>
      
      <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Shopping</Button>
      </Box>
      
      <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Arts and Entertainment</Button>
      </Box>

      <Box p={3}>
      <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Fitness</Button>
      </Box>
</Box>
       < Gmap addresstatechangefun={setaddresstostate} /> 
     {/*  <Map/> */}
     
     <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <img style={{ width: 150, height: 118 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box pr={2}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.culturaldish}
              </Typography>
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
       <p><h5> Amenity information provided by<Link className={classes.link} href="https://GreatSchools.com"> Yelp<ScatterPlotIcon className={classes.icon1}/></Link></h5></p>
</Typography>
    
   
     </Box>
      </div>
</Container>


)
}

export default AreaMap