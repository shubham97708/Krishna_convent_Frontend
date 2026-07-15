import React, { useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import PeopleIcon from "@material-ui/icons/People";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import MessageIcon from "@material-ui/icons/Message";
import Divider from "@material-ui/core/Divider";
import { getData } from "../../../services/FetchServices";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ApproveReqList1 from "./ApproveReqList1";
import ConfirmReqList from "./ConfirmReqList";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import TelegramIcon from "@material-ui/icons/Telegram";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightIcon from "@material-ui/icons/Highlight";
// Components
import ClientPortfolio from "./ClientPortfolio";
import UserProfile from "../UserProfile";
import FirstScreen from "./FirstScreen";
import EditProfile from "../profile/EditProfile";
import Diary from "./Diary";
import DisplayPostAdd from "./DisplayPostAdd";
import Activities from "./Activities";
import SoldList from "./SoldList";
import PostAdd from "./PostAdd";
import AddMarks from "./AddMarks";
import ShowStudents from "./showStudent/ShowStudents";

import GenrateTc from "./GenrateTc";

import DeactivateList from "./DeactivateList";

import PrivacyPolicy from "./PrivacyPolicy";

import Active from "../../student-records/Active";
import Cancel from "../../student-records/Cancel";
import Completed from "../../student-records/Completed";
import Refunded from "../../student-records/Refunded";

import HotelIcon from "@material-ui/icons/Hotel";
import BusinessIcon from "@material-ui/icons/Business";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import CancelIcon from "@material-ui/icons/Cancel";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import SecurityIcon from "@material-ui/icons/Security";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import { IdleSessionTimeout } from "idle-session-timeout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // backgroundColor:'green'
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

export default function MainListItems(props) {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClick = (view) => {
    props.changeView(view);
    props.handleDrawerClose();
  };

  //user profile for first load only
  // useEffect(async() => {
  //   props.changeView(<UserProfile   history={props.history}  changeView={props.changeView}      />)
  // }, [])

  //time out in 5 min on inactivity
  let session = new IdleSessionTimeout(10 * 60 * 1000);

  session.onTimeOut = () => {
    // here you can call your server to log out the user
    console.log("timeOut");
    handleClick6("Logout");
  };

  session.start();

  const handleClick1 = (view) => {
    props.changeView(view);
    setOpen1(!open1);
  };
  const handleClick2 = (view) => {
    props.changeView(view);
    setOpen2(!open2);
  };

  const handleClick4 = (view) => {
    props.changeView(view);
    setOpen4(!open4);
  };

  const handleClick5 = (view) => {
    props.changeView(view);
    setOpen5(!open5);
  };

  const handleClick6 = (view) => {
    props.changeView(view);
  };

  const mainListItems = (
    <div>
      <List component="div" disablePadding>
        <ListItem
          button
          onClick={() =>
            handleClick(
              <ShowStudents
                history={props.history}
                changeView={props.changeView}
              />,
            )
          }
          className={classes.nested}
        >
          <ListItemIcon>
            <HotelIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Show Students" style={{ color: "white" }} />
        </ListItem>

        <Divider
          style={{ backgroundColor: "white", width: "80%", marginLeft: "10%" }}
        />

        <ListItem
          button
          onClick={() =>
            handleClick(
              <PostAdd history={props.history} changeView={props.changeView} />,
            )
          }
          className={classes.nested}
        >
          <ListItemIcon>
            <BusinessIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Add Student" style={{ color: "white" }} />
        </ListItem>

        <Divider
          style={{ backgroundColor: "white", width: "80%", marginLeft: "10%" }}
        />

        <ListItem
          button
          onClick={() =>
            handleClick(
              <AddMarks
                history={props.history}
                changeView={props.changeView}
              />,
            )
          }
          className={classes.nested}
        >
          <ListItemIcon>
            <BusinessIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Add Marks" style={{ color: "white" }} />
        </ListItem>

        <Divider
          style={{ backgroundColor: "white", width: "80%", marginLeft: "10%" }}
        />

        <ListItem
          button
          onClick={() =>
            handleClick(<GenrateTc changeView={props.changeView} />)
          }
          className={classes.nested}
        >
          <ListItemIcon>
            <EditIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Genrate Tc" style={{ color: "white" }} />
        </ListItem>

        <Divider
          style={{ backgroundColor: "white", width: "80%", marginLeft: "10%" }}
        />

        <ListItem
          button
          onClick={() =>
            handleClick(<EditProfile changeView={props.changeView} />)
          }
          className={classes.nested}
        >
          <ListItemIcon>
            <EditIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Edit Profile" style={{ color: "white" }} />
        </ListItem>

        <Divider
          style={{ backgroundColor: "white", width: "80%", marginLeft: "10%" }}
        />

        <ListItem button onClick={() => handleClick6("Logout")}>
          <ListItemIcon>
            <VpnKeyIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="LogOut" style={{ color: "white" }} />
        </ListItem>
      </List>
    </div>
  );

  return <div>{mainListItems}</div>;
}
