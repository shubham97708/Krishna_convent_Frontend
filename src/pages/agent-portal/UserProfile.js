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

import BookingDetails from "../student-records/BookingDetails";

import BookingRefund from "../student-records/BookingRefund";

import Button from "@material-ui/core/Button";

import CircularProgress from "@material-ui/core/CircularProgress";
import { ListItem } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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

export default function UserProfile(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [getList, setList] = React.useState([]);
  const [value, setValue] = React.useState(2);

  const [getActiveBooking, setListActiveBooking] = React.useState(0);
  const [getCompletedBooking, setCompletedBooking] = React.useState(0);
  const [getCanceldBooking, setCanceldBooking] = React.useState(0);
  const [getRefundedBooking, setRefundedBooking] = React.useState(0);

  const [getCurrentDate, setCurrentDate] = React.useState("");
  const [getSpinner, setSpinner] = React.useState(false);

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
    setSpinner(true);

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

    let results = await getData("postadd/getallbookingadmin");

    console.log("RESULTS FROM DATA....", results);

    if (results.length) {
      console.log(results);
      setSpinner(false);

      setList(results);

      var active = 0;
      var complete = 0;
      var refund = 0;
      var cancel = 0;

      for (var i = 0; i < results.length; i++) {
        if (results[i].status == "Active") {
          active = active + 1;
        } else if (results[i].status == "Completed") {
          complete = complete + 1;
        } else if (results[i].status == "Refunded") {
          refund = refund + 1;
        } else if (results[i].status == "Cancel") {
          cancel = cancel + 1;
        }

        //   console.log("cards data ",results[i].status ,i)
      }

      setRefundedBooking(refund);
      setCanceldBooking(cancel);
      setCompletedBooking(complete);
      setListActiveBooking(active);
    } else {
      setSpinner(false);

      setList([]);
      setRefundedBooking(0);
      setCanceldBooking(0);
      setCompletedBooking(0);
      setListActiveBooking(0);
    }
  };

  useEffect(() => {
    setuserdata();
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function openFullDetails(id, status) {
    if (status == "Cancel") {
      props.changeView(
        <BookingRefund
          history={props.history}
          changeView={props.changeView}
          bookingid={id}
        />,
      );
    } else {
      props.changeView(
        <BookingDetails
          history={props.history}
          changeView={props.changeView}
          bookingid={id}
        />,
      );
    }
  }

  return (
    <div>
      <div class="container-fluid" style={{ marginTop: 10 }}>
        <div class="">
          <div class="col-md-12">
            <div
              id="testimonial-slider"
              style={{ display: "inline-flex" }}
              class="owl-carousel"
            >
              <div class="testimonial" id="example2" style={{ width: "30%" }}>
                <div class="content">
                  <div class="testimonial-pic">
                    <img src="assets/active.png" alt="" />
                  </div>
                  <div class="testimonial-prof">
                    <h3 class="testimonial-title" style={{ color: "#ff8c00" }}>
                      Active
                    </h3>
                    <span class="testimonial-post">{getCurrentDate}</span>
                    <p class="description">
                      Total Active Records = {getActiveBooking}
                    </p>
                  </div>
                </div>
              </div>

              <div class="testimonial" id="example2" style={{ width: "30%" }}>
                <div class="content">
                  <div class="testimonial-pic">
                    <img src="assets/complite.png" alt="" />
                  </div>
                  <div class="testimonial-prof">
                    <h3 class="testimonial-title" style={{ color: "#4cbb17" }}>
                      Completed
                    </h3>
                    <span class="testimonial-post">{getCurrentDate}</span>
                    <p class="description">
                      Total Completed Records = {getCompletedBooking}
                    </p>
                  </div>
                </div>
              </div>

              <div class="testimonial" id="example2" style={{ width: "30%" }}>
                <div class="content">
                  <div class="testimonial-pic">
                    <img src="assets/refund.png" alt="" />
                  </div>
                  <div class="testimonial-prof">
                    <h3 class="testimonial-title" style={{ color: "#39458b" }}>
                      Refunded
                    </h3>
                    <span class="testimonial-post">{getCurrentDate}</span>
                    <p class="description">
                      Total Refunded Records = {getRefundedBooking}
                    </p>
                  </div>
                </div>
              </div>

              <div class="testimonial" id="example2" style={{ width: "30%" }}>
                <div class="content">
                  <div class="testimonial-pic">
                    <img src="assets/cancel.png" alt="" />
                  </div>
                  <div class="testimonial-prof">
                    <h3 class="testimonial-title" style={{ color: "#ff4500" }}>
                      Canceled
                    </h3>
                    <span class="testimonial-post">{getCurrentDate}</span>
                    <p class="description">
                      Total Canceled Records ={getCanceldBooking}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card For Booking  */}

      <div style={{ marginTop: "30px" }}>
        {/* 
<Grid container spacing={1}>

<Grid item xs={3}>
<Card className={classes.root}>
  <div style={{height:"90px",width:"90px", backgroundColor:"#FF8C00",position:"absolute",marginTop:"-2.5%",marginLeft:"2%",borderRadius:2}}>          
      <IconButton aria-label="add to favorites" style={{padding:"34px"}} >
        <AssignmentTurnedInIcon style={{color:"#fff"}} />
      </IconButton>    
  </div>


  <Hidden xsDown implementation="css">
  <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",fontSize:'4vw'}}
      title="Active"
      subheader={getCurrentDate} 
   />
  </Hidden>

  <Hidden smUp implementation="js">
    <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",}}
      title=""
      subheader=""
   />
  </Hidden>
 
  <Hidden xsDown implementation="css">
  <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total Active Booking  = {getActiveBooking}
        </Typography>
    </CardContent>
</Hidden>

<Hidden smUp implementation="js">
<CardContent style={{height:"100px",marginTop:"50px"}} > 
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total = {getActiveBooking}
        </Typography>
</CardContent>
</Hidden>
</Card> 
</Grid>

<Grid item xs={3}>
<Card className={classes.root}>
  <div style={{height:"90px",width:"90px", backgroundColor:"#4CBB17",position:"absolute",marginTop:"-2.5%",marginLeft:"2%",borderRadius:2}}>          
      <IconButton aria-label="add to favorites" style={{padding:"34px"}} >
        <AssignmentTurnedInIcon style={{color:"#fff"}} />
      </IconButton>    
  </div>
  <Hidden xsDown implementation="css">
  <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",fontSize:'4vw'}}
      title="Completed"
      subheader={getCurrentDate} 
   />
  </Hidden>

  <Hidden smUp implementation="js">
    <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",}}
      title=""
      subheader=""
   />
  </Hidden>
  <Hidden xsDown implementation="css">
  <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total Completed Booking  = {getCompletedBooking}
        </Typography>
    </CardContent>
</Hidden>

<Hidden smUp implementation="js">
<CardContent style={{height:"100px",marginTop:"50px"}} >
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total = {getCompletedBooking}
        </Typography>
</CardContent>
</Hidden>
</Card> 
</Grid>

<Grid item xs={3}>
<Card className={classes.root}>
  <div style={{height:"90px",width:"90px", backgroundColor:"#39458B",position:"absolute",marginTop:"-2.5%",marginLeft:"2%",borderRadius:2}}>          
      <IconButton aria-label="add to favorites" style={{padding:"34px"}} >
        <AssignmentTurnedInIcon style={{color:"#fff"}} />
      </IconButton>    
  </div>
  <Hidden xsDown implementation="css">
  <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",fontSize:'4vw'}}
      title="Refunded"
      subheader={getCurrentDate} 
   />
  </Hidden>

  <Hidden smUp implementation="js">
    <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",}}
      title=""
      subheader=""
   />
  </Hidden>
  <Hidden xsDown implementation="css">
  <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total Refunded Booking  = {getRefundedBooking}
        </Typography>
    </CardContent>
</Hidden>

<Hidden smUp implementation="js">
<CardContent style={{height:"100px",marginTop:"50px"}} >
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total = {getRefundedBooking}
        </Typography>
</CardContent>
</Hidden>
</Card> 
</Grid>

<Grid item xs={3}>
<Card className={classes.root}>
  <div style={{height:"90px",width:"90px", backgroundColor:"#FF4500",position:"absolute",marginTop:"-2.5%",marginLeft:"2%",borderRadius:2}}>          
      <IconButton aria-label="add to favorites" style={{padding:"34px"}} >
        <AssignmentTurnedInIcon style={{color:"#fff"}} />
      </IconButton>    
  </div>
  <Hidden xsDown implementation="css">
  <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",fontSize:'4vw'}}
      title="Canceled"
      subheader={getCurrentDate} 
   />
  </Hidden>

  <Hidden smUp implementation="js">
    <CardHeader
      style={{marginTop:"0px",marginLeft:"45%",}}
      title=""
      subheader=""
   />
  </Hidden>


<Hidden xsDown implementation="css">
  <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        Total Canceled Booking  = {getCanceldBooking}
        </Typography>
    </CardContent>
</Hidden>

<Hidden smUp implementation="js">
<CardContent style={{height:"100px",marginTop:"50px"}} >
        <Typography variant="body2" color="textSecondary" component="p" align="center">
          Total = {getCanceldBooking}
        </Typography>
</CardContent>
</Hidden>

</Card> 
</Grid>
</Grid>

 */}

        <Grid container spacing={1}>
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
                  All Student Records
                </Typography>
              </div>

              <Hidden xsDown implementation="css">
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
                      {getSpinner == false ? (
                        getList.map((row) => (
                          <tr key={row.name}>
                            <td align="left">{row.id}</td>
                            <td align="left">{row.hotelname}</td>
                            <td align="left">{row.customername}</td>
                            <td align="left">
                              {dateconversion(row.checkin_date)}
                            </td>
                            <td align="left">
                              {dateconversion(row.checkout_date)}
                            </td>
                            <td align="left">
                              {dateconversion(row.booking_date)}
                            </td>
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
                        ))
                      ) : (
                        <div style={{ marginLeft: "50%" }}>
                          <CircularProgress color="secondary" />
                        </div>
                      )}
                    </tbody>
                  </table>
                </CardContent>
              </Hidden>

              <Hidden smUp implementation="js">
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
                      {getSpinner == false ? (
                        getList.map((row) => (
                          <tr key={row.name}>
                            <td align="left">{row.id}</td>
                            <td align="left">{row.hotelname}</td>
                            <td align="left">{row.customername}</td>
                            <td align="left">
                              {dateconversion(row.checkin_date)}
                            </td>
                            <td align="left">
                              {dateconversion(row.checkout_date)}
                            </td>
                            <td align="left">
                              {dateconversion(row.booking_date)}
                            </td>
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
                        ))
                      ) : (
                        <div style={{ marginLeft: "45%", marginRight: "45%" }}>
                          <CircularProgress color="secondary" />
                        </div>
                      )}
                    </tbody>
                  </table>
                </CardContent>
              </Hidden>
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
