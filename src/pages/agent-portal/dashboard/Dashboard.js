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
import Tooltip from '@material-ui/core/Tooltip';
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

import schoolLogo from './Marksheet/img/logo.png'


const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 10,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(90deg, #0d1b4c 0%, #1565c0 100%)',
    boxShadow: '0 4px 16px rgba(13, 27, 76, 0.3)',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonHidden: {
    display: 'none',
  },
  appBarTitle: {
    flexGrow: 1,
    fontWeight: 600,
    letterSpacing: 0.3,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1.5),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
  },
  brandAvatar: {
    width: 34,
    height: 34,
    backgroundColor: '#ffffff',
    marginRight: theme.spacing(1.2),
  },
  brandAvatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: 2,
  },
  brandText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.05rem',
    lineHeight: 1.15,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f6fa',
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
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  footerCredit: {
    textAlign: 'center',
    color: '#90a4ae',
    fontSize: '0.8rem',
    padding: theme.spacing(3, 2, 2),
    marginTop: 'auto',
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

          <Tooltip title="Back">
            <span>
              <IconButton color="inherit" disabled={viewStack.length === 0} onClick={goBack} aria-label="go back">
                  <ArrowBackIcon />
              </IconButton>
            </span>
          </Tooltip>

          <Typography variant="h6" className={classes.appBarTitle} noWrap>
            &nbsp;
          </Typography>

          <Tooltip title="Add Student">
            <IconButton color="inherit">
                <PostAddIcon onClick={()=>AppBarOnclick(<PostAdd history={props.history} changeView={changeView} />)} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Reload">
            <IconButton color="inherit">
              <Link href="/"  color="inherit">
                  <AutorenewIcon   />
                  </Link>
            </IconButton>
          </Tooltip>

          <Divider orientation="vertical" flexItem style={{ backgroundColor: 'rgba(255,255,255,0.3)', margin: '8px 4px' }} />

          <Tooltip title="Edit Profile">
            <IconButton  color="inherit">
                <PersonIcon onClick={()=>AppBarOnclick(<EditProfile/>)} />
            </IconButton>
          </Tooltip>

          <Divider orientation="vertical" flexItem style={{ backgroundColor: 'rgba(255,255,255,0.3)', margin: '8px 4px' }} />

          <Tooltip title="Logout">
            <IconButton color="inherit">
                <ExitToAppIcon button onClick={()=>changeView('Logout')} />
            </IconButton>
          </Tooltip>
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
        height:"100%",
        background: 'linear-gradient(180deg, #0d1b4c 0%, #10245e 40%, #14284f 100%)',
      }}>
        <div className={classes.drawerHeader}>

          <div className={classes.brandRow}>
            <Avatar className={classes.brandAvatar}>
              <img src={schoolLogo} alt="" className={classes.brandAvatarImg} />
            </Avatar>
            <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
              <Typography className={classes.brandText}>
                Krishna Convent
              </Typography>
            </Link>
          </div>

          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon   style={{color:"white"}}/>
          </IconButton>
        </div>

        <Divider  style={{backgroundColor:"rgba(255,255,255,0.15)"}}/>


        <List>
          <MainList handleDrawerClose={handleDrawerClose} changeView={changeView}  history={props.history} />
        </List>
        </div>
      </Drawer>


      <main
        className={clsx(classes.content, { [classes.contentShift]: open })}
      >
        <div className={classes.appBarSpacer} />

        {view}

        <Typography className={classes.footerCredit}>
          Developed by Shubham Soni &middot; 9770856257
        </Typography>

      </main>
    </div>
  );
}
