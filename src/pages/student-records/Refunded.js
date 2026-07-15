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

import BookingDetails from "./BookingDetails";
import { ListItem } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  root: {
    maxWidth: "95%",
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

export default function Refunded(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [getList, setList] = React.useState([]);
  const [value, setValue] = React.useState(2);

  const [getActiveBooking, setListActiveBooking] = React.useState(0);
  const [getCompletedBooking, setCompletedBooking] = React.useState(0);
  const [getCanceldBooking, setCanceldBooking] = React.useState(0);
  const [getRefundedBooking, setRefundedBooking] = React.useState(0);
  const [getCurrentDate, setCurrentDate] = React.useState("");

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
    let date = new Date();
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

    console.log(dateJoin);
    setCurrentDate(dateJoin);

    let results = await getData("postadd/getallbookingadminRefunded");

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function openFullDetails(id) {
    props.changeView(
      <BookingDetails
        history={props.history}
        changeView={props.changeView}
        bookingid={id}
      />,
    );
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div>
      {/* Card For Booking  */}

      <div style={{ marginTop: "2%" }}>
        <Grid container spacing={1} style={{ marginTop: "0%" }}>
          <Grid item xs={12}>
            <Card style={{ width: "100%" }}>
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
                  Refunded Student Records
                </Typography>
              </div>

              <CardContent>
                <table class="table" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th align="left">Booking-ID</th>
                      <th align="left">Hotel Name</th>
                      <th align="left">Customer Name</th>
                      <th align="left">Check-In-Date-</th>
                      <th align="left">Check-Out-Date</th>
                      <th align="left">Booking-Date</th>
                      <th align="left">Days-Stay</th>
                      <th align="left">Person</th>
                      <th align="left">Price</th>
                      <th align="left">Transaction-Type</th>
                      <th align="left">Status</th>
                      <th align="left">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getList.map((row) => (
                      <tr key={row.name}>
                        <td align="left">{row.id}</td>
                        <td align="left">{row.hotelname}</td>
                        <td align="left">{row.customername}</td>
                        <td align="left">{dateconversion(row.checkin_date)}</td>
                        <td align="left">
                          {dateconversion(row.checkout_date)}
                        </td>
                        <td align="left">{dateconversion(row.booking_date)}</td>
                        <td align="left">{row.days}</td>
                        <td align="left">{row.adults}</td>
                        <td align="left">{row.price}</td>
                        <td align="left">{row.paymenttype}</td>
                        <td align="left">{row.status}</td>
                        <td align="left">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => openFullDetails(row.id)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>

              {/* 
<Hidden smUp implementation="js">
<CardContent >
     
<table class="table" style={{width:'100%'}}>

<thead>         
  <tr>

    <th align="left">Booking-ID</th>
    <th align="left">Hotel Name</th>
    <th align="left">Customer Name</th>
    <th align="left">Check-In-Date-</th>
    <th align="left">Check-Out-Date</th>
    <th align="left">Booking-Date</th>
    <th align="left">Days-Stay</th>
    <th align="left">Person</th>
    <th align="left">Price</th>
    <th align="left">Transaction-Type</th>
    <th align="left">Status</th>
    <th align="left">View</th>
  </tr>
</thead>
<tbody>
  {getList.map((row) => (
    <tr key={row.name} >
     
      <td align="left">{row.id}</td>
             <td align="left">{row.hotelname}</td>
             <td align="left">{row.customername}</td>
             <td align="left">{dateconversion(row.checkin_date)}</td>
             <td align="left">{dateconversion(row.checkout_date)}</td>
             <td align="left">{dateconversion(row.booking_date)}</td>
             <td align="left">{row.days}</td>
             <td align="left">{row.adults}</td>
             <td align="left">{row.price}</td>
             <td align="left">{row.paymenttype}</td>
             <td align="left">{row.status}</td>
             <td align="left"> 
               <Button variant="contained" color="primary" onClick={(e)=>openFullDetails(row.id)}>
                                 View
               </Button> 

               
        </td>
    </tr>
  ))}
</tbody>


</table>

</CardContent>
</Hidden> */}
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>  */}
    </div>
  );
}
