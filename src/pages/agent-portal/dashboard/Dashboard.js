import React,{useEffect} from 'react';
import clsx from 'clsx';
import BaseUrl from '../../../services/BaseUrl'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Link} from '@material-ui/core';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';  

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import MainList from './MainListItems';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import PostAdd from './PostAdd';
import EditProfile from '../profile/EditProfile';
import AutorenewIcon from '@material-ui/icons/Autorenew';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 10, // keep right padding when drawer closed
   
  /*   flexDirection: 'row-reverse', */
  },
  toolbarIcon: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    backgroundColor:"red",
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,

    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  paper: {
  /*   padding: theme.spacing(1), */
    display: 'flex',
    overflow: 100,
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'auto',
    overflow: 'auto',
  },
  avatar: {
    margin: '10',
  },

  card: {
    minWidth: 100,
    height: 50,
  },
/////////////////////////////////////////////////////
appBar: {
  backgroundColor:'black',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),
},
appBarShift: {
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
 // backgroundColor:'green',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
menuButton: {
  marginRight: theme.spacing(2),
},
hide: {
  display: 'none',
},
drawer: {
  width: drawerWidth,
  flexShrink: 0,
  
},
drawerPaper: {
  width: drawerWidth,
},
drawerHeader: {
  display: 'flex',
  alignItems: 'center',
  // padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  
},
content: {
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
},
contentShift: {
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
},
}));

export default function Dashboard(props) {

  console.log("Besyuuuuuuuuu      ",props)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [view,setView]=React.useState('')
  const [viewStack,setViewStack]=React.useState([])
  const [admin,setAdmin]=React.useState([])
  const [openDialog,closeDialog] = React.useState(false)
  const [getmsg,setmsg] = React.useState('')

 
  const checkSession=()=>{

    if(!localStorage.getItem('AGENT'))
    {
      localStorage.clear()
      props.history.replace({pathname:'/AgentSignin'})

    }
    else
    {
      let rec=JSON.parse(localStorage.getItem('AGENT'))

       if(rec[0].status === "Approve"){
        props.history.replace({pathname:'/Dashboard'})
        
      }else if(rec[0].status === "Declined"){
        closeDialog(true) 
        setmsg("Your Profile Is Declined By Admin")
      }
      else {
        closeDialog(true) 
        setmsg("Your Profile Is Waiting For Approval By Admin")

      } 
    }}



  useEffect(()=>{    
    checkSession()
  },[])


    
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };





 const changeView=(newView)=>{

  if(newView==='Logout')
  {
    localStorage.clear();
    props.history.replace({pathname:'/'})
    window.location.reload()
  }
  else{
  setView((currentView)=>{
    if(currentView !== ''){
      setViewStack((prevStack)=>[...prevStack, currentView])
    }
    return newView
  })
}
}

const goBack=()=>{
  setViewStack((prevStack)=>{
    if(prevStack.length === 0) return prevStack
    const stack=[...prevStack]
    const previousView=stack.pop()
    setView(previousView)
    return stack
  })
}


 const handleClick=(view)=>{
  props.changeView(view)
  }


const AppBarOnclick = (view) => {

    changeView(view)
  }
   


const handleClick1=(view)=>{
 props.changeView(view)
 }



 const handleClickCloseDialog = ()=>{
  closeDialog(false)
  localStorage.clear()
  props.history.replace({pathname:'/'})
  window.location.reload()
 }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>

    <Dialog   
          open={openDialog}
          onClose={handleClickCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >      
    {getmsg}
        </Dialog> 
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          {/* AppBar */}

          <MenuItem>
        <IconButton color="inherit" disabled={viewStack.length === 0} onClick={goBack} aria-label="go back">
            <ArrowBackIcon />
        </IconButton>
      </MenuItem>

          <MenuItem >
        <IconButton  color="inherit">
            <PostAddIcon onClick={()=>AppBarOnclick(<PostAdd history={props.history} changeView={changeView} />)} />
        </IconButton>
      </MenuItem>




      <MenuItem >
        <IconButton  color="inherit"> 
        <Link href="/"  color="inherit">
            <AutorenewIcon   />
            </Link>
        </IconButton>      
      </MenuItem>

      <Divider orientation="vertical"/>
         

       <MenuItem>
        <IconButton  color="inherit">      
            <PersonIcon onClick={()=>AppBarOnclick(<EditProfile/>)} />
        </IconButton>
      </MenuItem>

      <Divider orientation="vertical"/>
      
       <MenuItem >
        <IconButton color="inherit"> 
            <ExitToAppIcon button onClick={()=>changeView('Logout')} />
        </IconButton>

      </MenuItem>
          {/* <Avatar alt="Remy Sharp" src={`${BaseUrl}/images/${admin.picture}`} className={classes.avatar} /> */}
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        
      >
        <div 
        style={{
        backgroundImage: "url("+"./images/sidebar1.jpg"+")", 
        height:"100%",
        backgroundColor:'#000000',
        //opacity:0.95,
        
      }}>
        <div className={classes.drawerHeader}>

        <center>
          <Typography variant="h5" className={classes.title}  style={{color:"white"}}>
          <Link href="/"  color="inherit">
            Krishna Convent 
            </Link>
          </Typography>
        </center>

          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon   style={{color:"white"}}/>
          </IconButton>
        </div>

        <Divider  style={{backgroundColor:"white"}}/> 


        <List>
          <MainList handleDrawerClose={handleDrawerClose} changeView={changeView}  history={props.history} />
        </List> 
        </div>
      </Drawer>


      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        {/* <Container maxWidth="lg" className={classes.container}> */}
        {view} 
        {/* </Container> */}



        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
     
            {/* SignUp */}
            <Grid item xs={12} >
              <Paper className={fixedHeightPaper}>
                
               
                
              </Paper>
            </Grid>
          </Grid>
        </Container>


      </main>
    </div>
  );
}
