import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



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
  card: {
    height: '350px',
    
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
}));

//const cards = [1, 2, 3, 4,];
const data = [
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    price: '$ 174,000',
    size1: '2bd',
    size2: '2ba',
    size3: '1,156 sqft',
    speciality2: '20 Marietta St NW #6B',
    place: 'Downtown,Atlanta,GA'
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    price: '$ 174,000',
    size1: '2bd',
    size2: '2ba',
    size3: '1,156 sqft',
    speciality2: '20 Marietta St NW #6B',
    place: 'Downtown,Atlanta,GA'
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    price: '$ 174,000',
    size1: '2bd',
    size2: '2ba',
    size3: '1,156 sqft',
    speciality2: '20 Marietta St NW #6B',
    place: 'Downtown,Atlanta,GA'
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    price: '$ 174,000',
    size1: '2bd',
    size2: '2ba',
    size3: '1,156 sqft',
    speciality2: '20 Marietta St NW #6B',
    place: 'Downtown,Atlanta,GA'
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    price: '$ 174,000',
    size1: '2bd',
    size2: '2ba',
    size3: '1,156 sqft',
    speciality2: '20 Marietta St NW #6B',
    place: 'Downtown,Atlanta,GA'
  },
  {
    src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    price: '$ 174,000',
    size1: '2bd',
    size2: '2ba',
    size3: '1,156 sqft',
    speciality2: '20 Marietta St NW #6B',
    place: 'Downtown,Atlanta,GA'
  },
];
  

export default function Album(props) {
  const classes = useStyles();
  const { loading = false } = props;

  return (
  

     
        
 <Container display="flex"> 
 <div>
   <Box>
   <Typography variant="button" display="block" gutterBottom>
        <h2>Homes in Downtown</h2>
</Typography>


<Box display="flex" flexDirection="row" p={1} m={-3} >
  <Box p={1}>
<Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>For Sale(83)</Button>
</Box>
<Box p={1}>
<Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>For Rent(63)</Button>
</Box>
</Box>
        
<Grid container wrap="nowrap" >
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <img style={{ width: 175, height: 130 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box pr={2}>
              <Typography gutterBottom variant="body2">
                {item.price}<ArrowDownwardIcon/>
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
              <HotelIcon/>  {item.size1}<BathtubIcon/>{item.size2}<SquareFootIcon/>{item.size3}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.speciality2}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.place}
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
         
<Box align="center">
<Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Search Home In Downtown</Button>
</Box>
</Box>
</div>
        </Container>
        
      
    
  );
}