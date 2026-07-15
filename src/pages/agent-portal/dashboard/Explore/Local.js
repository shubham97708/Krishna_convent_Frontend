import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import StreetviewIcon from '@material-ui/icons/Streetview';
import MoodIcon from '@material-ui/icons/Mood';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';   
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';


const drawerWidth = '100%';

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  foot: {
    flexGrow: 1,
    marginTop:20,

        justifyContent: 'center',
        alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },

  input: {
    display: 'none',
  },
    rootMenu: {
        display: 'flex',
      },
      paperMenu: {
        marginRight: theme.spacing.unit * 2,
      },

      rooot: {
    display: 'flex',
    minHeight: '100vh',
  },

      mainroot: {
        overflow: 'hidden',
        flexGrow: 1,
      },
      root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  badge: {
    top: '30%',
    right:-2,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  usericon: {
    marginLeft: 0,
    marginRight:0,
  },
  avatar: {
    margin:0,
    width: '70%',
    height: '70%',
  },
  layout: {
    backgroundColor:'#263475',

    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width:'100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    marginBottom: theme.spacing.unit * 2,

    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 3}px 0`,
  },
});


const StyledMenu = withStyles({
  paper: {
    // background:'#fff5cc',
     padding:'30px',
     align:'center',
     //marginLeft:'200px',
     //marginRight:'200px',
     marginTop:'10px',
     width:'100%',
   },
   
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(theme => ({
    root: { 
      '&:focus': {
        backgroundColor: '#888c8c',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const useStyles = makeStyles(theme => ({

  root: {
    background:'#CCD1D1',
    padding:'30px',
    marginLeft:'75px',
    marginRight:'75px',
    marginTop:'10px'
  },
  card: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  title1: {
    fontWeight:'bold',
    flexGrow: 1,
    color:'black',
    '&:hover': {
     color: 'black',
     textUnderline:'none',
    
  fontStyle:"bold"
},
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
  dense: {
    marginTop: theme.spacing(2),
  },

  icon:{
    color:'#ffcc00',
  },
  icon1:{
    color:'#C6EA12',
   
  },
  icon2:{
    color:'#DA15E1',
  },
  icon3:{
    color:'#5419AE',
  },
  icon4:{
    color:'#28DB2D',
  },
  icon5:{
    color:'#0E1AC6',
  },
  icon6:{
    color:'#C66A0E',
  },
  link:
 {
   color:'#01a3a4',
 },
 card1:
 {
backgroundColor:'#01a3a4',
 },
 button: {
        
  margin:10, 
  color:'black',
  fontWeight:'bold',
  
  '&:hover': {
      backgroundColor: '#01a3a4',
    color:'white',
  fontStyle:"bold"},
},
}));

//const cards = [1, 2, 3, 4];
const data = [
  {
    name: 'Wendy D.',
    address: 'Resident',
    pastview: '3w ago',
    message: '"Monthly neighborhood socials, annual tour of homes, scavenger hunt,,lots of neighbors doing things together, neighborhood association "',
  },
  {
    name: 'Wendy D.',
    address: 'Resident',
    pastview: '3w ago',
    message: '"Monthly neighborhood socials, annual tour of homes, scavenger hunt,,lots of neighbors doing things together, neighborhood association "',
  },
  {
    name: 'Wendy D.',
    address: 'Resident',
    pastview: '3w ago',
    message: '"Monthly neighborhood socials, annual tour of homes, scavenger hunt,,lots of neighbors doing things together, neighborhood association "',
  },
  {
    name: 'Wendy D.',
    address: 'Resident',
    pastview: '3w ago',
    message: '"Monthly neighborhood socials, annual tour of homes, scavenger hunt,,lots of neighbors doing things together, neighborhood association "',
  },
  {
    name: 'Wendy D.',
    address: 'Resident',
    pastview: '3w ago',
    message: '"Monthly neighborhood socials, annual tour of homes, scavenger hunt,,lots of neighbors doing things together, neighborhood association "',
  },
  {
    name: 'Wendy D.',
    address: 'Resident',
    pastview: '3w ago',
    message: '"Monthly neighborhood socials, annual tour of homes, scavenger hunt,,lots of neighbors doing things together, neighborhood association "',
  },
  
];

export default function Trulia1(props) {
  const classes = useStyles();
  const { loading = false } = props;
  



  return (
      <Container>
<div>
  <Box>

    
    <Typography  display="block" gutterBottom>
<h2>What Locals Say</h2>
</Typography>
      
<Typography  display="block" color="textSecondary" gutterBottom>
At least 126 Trulia users voted on each feature.
</Typography>
    
<Box display="flex" flexDirection="row" p={1} m={1}>
     <Box p={1}>   
        <ListItem>
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon />
          </ListItemIcon>   
          <ListItemText primary="78%" />  
          </Button>
          <ListItemIcon className={classes.icon1}>
            <PetsIcon />
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
          <ListItemIcon className={classes.icon2}>
            <DriveEtaIcon />
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
          <ListItemIcon className={classes.icon3}>
            <DirectionsWalkIcon />
          </ListItemIcon>  
          <ListItemText primary="There are sidewalks" /> 
        </ListItem>
        </Box>  

        </Box>

        <Box display="flex" flexDirection="row" p={1} m={1}>
        <Box p={1}> 
        <ListItem >
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="89%" />
          </Button>    
          <ListItemIcon className={classes.icon4}>
            <RestaurantIcon />
          </ListItemIcon>  
          <ListItemText primary="walkable to restaurants" /> 
        </ListItem>
        </Box> 

        <Box p={1}>        
        <ListItem>       
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="67%" />
          </Button>    
          <ListItemIcon className={classes.icon5}>
            <StreetviewIcon />
          </ListItemIcon>  
          <ListItemText primary="Streets are well-lit" /> 
        </ListItem>
        </Box> 

        <Box p={1}> 
        <ListItem >
        <Button variant="contained" disabled className={classes.disablebutton}>
          <ListItemIcon>
            <ThumbUpAltTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="78%"  />
          </Button>     
          <ListItemIcon className={classes.icon6}>
            <MoodIcon />
          </ListItemIcon>  
          <ListItemText primary="holiday spirit" /> 
        </ListItem>
        </Box> 
</Box>

<Box>
<Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>
    See All
</Button>
</Box>

<Typography color="textSecondary">
       <p><h5> <Link className={classes.link} href="https://truliamethodology.com">Learn more </Link> about our methodology.</h5></p>
</Typography>
    
      
     
    
        
    <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>All</Button>
    <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Community</Button>
    <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Dog Owners</Button>
    <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Parents</Button>
    <Button className={classes.button} variant="outlined" color="inherit" style={{fontStyle:'bold'}}>Commute</Button>
  

    
   
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} width={200} marginRight={0.5} my={1}>
         

          {item ? (
            <Box pr={2}>
              <Card className={classes.card1}>
              <CardHeader
        avatar={
          <Avatar src="/broken-image.jpg">
          </Avatar>
        }
      />
      <CardContent>
      <Typography gutterBottom variant="body2">
        {item.name}
      </Typography>
     <Typography variant="caption" color="textSecondary">
        {`${item.address} • ${item.pastview}`}
      </Typography>
      </CardContent>
              <CardContent>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.message}
              </Typography>
              </CardContent>

              <CardActions disableSpacing>
        <IconButton>
          <SentimentSatisfiedSharpIcon />
        </IconButton>
        <CardContent>
        <Typography>0</Typography>
        </CardContent>
        <Button>Flag</Button>
      </CardActions>
            
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

    </Box>
    </div>
  </Container>
  );
}