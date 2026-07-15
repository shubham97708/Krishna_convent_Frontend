import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { postData, getData } from "../../services/FetchServices";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  root: {
    maxWidth: "100%",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BookingDetails(props) {
  const classes = useStyles();
  const [getList, setList] = React.useState([
    {
      id: 0,
      checkin_date: "2020-07-23T18:30:00.000Z",
      checkout_date: "2020-07-27T18:30:00.000Z",
      room: 10,
      adults: 2,
      children: 0,
      days: 4,
      price: 1600,
      hotelid: 98,
      clientid: 10,
      idprooftype: "Driving Licence",
      nameonid: "Ghhfg",
      govtidno: "46788853",
      paymenttype: "online",
      transactionid: "pay_FEH4XCol5xNUaz",
      status: "Active",
      booking_date: "2020-07-14T06:19:47.000Z",
      hotelname: "Land Mark",
      hoteladdress:
        "47 Jhansi Road Near Railway Station, Manik Vilas Colony, Gwalior, Madhya Pradesh 474002",
      hotelmobile:
        "47 Jhansi Road Near Railway Station, Manik Vilas Colony, Gwalior, Madhya Pradesh 474002",
      clientname: "Rwhul",
      clientphone: "8109877689",
      clientemail: "Rahul@gmail.com",
    },
  ]);

  const dateconversion = (data) => {
    let date = new Date(data);
    let datestring = date.toDateString();
    let datesplit = datestring.split(" ");
    let dateJoin =
      datesplit[0] +
      "-" +
      datesplit[2] +
      "-" +
      datesplit[1] +
      "-" +
      datesplit[3];
    return dateJoin;
  };

  const setuserdata = async () => {
    let body = {
      bookingid: props.bookingid,
    };

    let results = await postData("postadd/getFullBookingDetails", body);
    console.log("RESULTS FROM DATA....", results);

    if (results.length) {
      setList(results);
    } else {
      setList([]);
    }
  };

  useEffect(() => {
    setuserdata();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "5%" }}>
        <div class="one">
          <Card className={classes.root}>
            <div
              style={{
                height: "35px",
                width: "100%",
                padding: 4,
                backgroundColor: "#FF4500",
                borderRadius: 2,
              }}
            >
              <Typography
                style={{ color: "white", fontSize: 18 }}
                align="center"
              >
                Student Details
              </Typography>
            </div>

            <CardContent>
              <table class="td" style={{ width: "100%" }}>
                <thead class="td">
                  <tr class="td">
                    <td class="td">Name</td>
                    <td class="td">Mobile</td>
                    <td class="td">Email</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td">{getList[0].clientname}</td>
                    <td class="td">{getList[0].clientphone}</td>
                    <td class="td">{getList[0].clientemail}</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <div class="two">
          <Card className={classes.root}>
            <div
              style={{
                height: "35px",
                width: "100%",
                padding: 4,
                backgroundColor: "#FF4500",
                borderRadius: 2,
              }}
            >
              <Typography
                style={{ color: "white", fontSize: 18 }}
                align="center"
              >
                School Details
              </Typography>
            </div>

            <CardContent>
              <table class="td" style={{ width: "100%" }}>
                <thead class="td">
                  <tr class="td">
                    <td class="td">Name</td>
                    <td class="td">Mobile</td>
                    <td class="td">Address</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td">{getList[0].hotelname}</td>
                    <td class="td">{getList[0].hotelmobile}</td>
                    <td class="td">{getList[0].hoteladdress}</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <div class="full">
          <div
            style={{
              height: "35px",
              width: "100%",
              padding: 4,
              backgroundColor: "#FF4500",
              borderRadius: 2,
            }}
          >
            <Typography style={{ color: "white", fontSize: 18 }} align="center">
              Record Full Details
            </Typography>
          </div>

          <Card className={classes.root} style={{ paddingBottom: 10 }}>
            <div class="v1" id="example2">
              <CardContent>
                <CardHeader
                  style={{ marginTop: "0px", textAlign: "center" }}
                  title="Date"
                  subheader=""
                />
                <hr />
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemText primary="Price" />
                    <ListItemText primary={getList[0].price} />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Record ID" />
                    <ListItemText primary={getList[0].id} />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Record Date" />
                    <ListItemText
                      primary={dateconversion(getList[0].booking_date)}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Check-in Date" />
                    <ListItemText
                      primary={dateconversion(getList[0].checkin_date)}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Check-Out Date" />
                    <ListItemText
                      primary={dateconversion(getList[0].checkout_date)}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </div>
            <div class="v1" id="example2">
              <CardContent>
                <CardHeader
                  style={{ marginTop: "0px", textAlign: "center" }}
                  title="ID"
                  subheader=""
                />
                <hr />

                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemText primary="ID-Proof-Type" />
                    <ListItemText primary={getList[0].idprooftype} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Name-On-ID" />
                    <ListItemText primary={getList[0].nameonid} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="ID - NO." />
                    <ListItemText primary={getList[0].govtidno} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Payment - Type" />
                    <ListItemText primary={getList[0].paymenttype} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Transaction -ID" />
                    <ListItemText primary={getList[0].transactionid} />
                  </ListItem>
                </List>
              </CardContent>
            </div>
            <div class="v1" id="example2">
              <CardContent>
                <CardHeader
                  style={{ marginTop: "0px", textAlign: "center" }}
                  title="Transaction"
                  subheader=""
                />
                <hr />
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemText primary="Status" />
                    <ListItemText primary={getList[0].status} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Room" />
                    <ListItemText primary={getList[0].room} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Day's" />
                    <ListItemText primary={getList[0].days} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Adults" />
                    <ListItemText primary={getList[0].adults} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Children" />
                    <ListItemText primary={getList[0].children} />
                  </ListItem>
                </List>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
