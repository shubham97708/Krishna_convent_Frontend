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
  button: {
    margin: theme.spacing(1),
    marginLeft: '560',
    width:'150px'
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
  /*'&:hover': {              
     height:420,
     width:300,           
     transition: '.5s'
    },*/
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


}));


export default function ClientPortfolio() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)


  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClickClose = async () => {
    setOpen(false);

  };



  return (
<Container>

<div>
<Paper className={classes.paper}>
<Grid container xs={12} spacing={2}>
       
<Grid item xs={6}> 
<Box>

                      <img
                        src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        className={classes.imagecardhover}                           
                      />
                    <div className={classes.overlay}>
                      Atlanta,GA Downtown
                    </div>
                
                </Box>
</Grid>

<Grid item xs={6}> 

<Grid  style={{float:"left",}}> 

<Box>
<Typography> NeitherHood OverView</Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Buy:" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText primary="Rent:" secondary="$1.33k-$14.6k" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary="No Commute Data:" secondary="" />
        </ListItem>
      </List>

      <Box>
      <CardActions>
        <Button size="small">MAP</Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          MAP
        </Typography>
      </CardContent>
    </Box>

    <Grid item xs={12}> 
    <Grid  style={{float:"left",}}> 
  <Box>
      <CardActions>
        <Button size="small">Outdoors</Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
        Outdoors
        </Typography>
      </CardContent>
   </Box>
    </Grid>

    <Grid  style={{float:"right",}}> 
  <Box>
      <CardActions>
        <Button size="small">Main Streets</Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Main Streets
        </Typography>
      </CardContent>
    </Box>
    </Grid>
    </Grid>
    </Box>

    
</Grid>


<Grid  style={{float:"right",}}> 
<Box>
<List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemIcon>
            <TabIcon />
          </ListItemIcon>
          <ListItemText  primary="For Sale On Trulia:"/>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="For Sale On Trulia:" secondary="30 Homes"/>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeWorkIcon />
          </ListItemIcon>
          <ListItemText primary="13 Schools" secondary="Rated 1/10-8/10" />
        </ListItem>
      </List>
      <Box>
      <CardActions>
        <Button size="small">All Photos</Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          All Photos
        </Typography>
      </CardContent>
    </Box>

    <Grid item xs={12}> 
    <Grid  style={{float:"left",}}> 
  <Box>
      <CardActions>
        <Button size="small">Side Streets</Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Side Streets
        </Typography>
      </CardContent>
    </Box>
    </Grid>

<Grid  style={{float:"right",}}> 
  <Box>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          More
        </Typography>
      </CardContent>
    </Box>
    </Grid>
    </Grid>
</Box>



</Grid>


</Grid>
</Grid>
</Paper>
</div>
</Container>
  );
}
