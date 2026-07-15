import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

import WhatshotIcon from "@material-ui/icons/Whatshot";

import PieChartIcon from "@material-ui/icons/PieChart";

import BookmarkIcon from "@material-ui/icons/Bookmark";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { Carousel } from "react-responsive-carousel";
import Rating from "@material-ui/lab/Rating";

import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";



import PauseIcon from "@material-ui/icons/Pause";
import { deepOrange } from "@material-ui/core/colors";
import BaseUrl from "../../../services/BaseUrl";
import { postData } from "../../../services/FetchServices";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // For Image Slider
import EditPostAdd from "./EditPostAdd";
import GotoEnd from "./GotoEnd";
import Dialog from "@material-ui/core/Dialog";
import ClientViewList from "./ClientViewList";
import Pagination from "pagination-react-hooks";
import swal from "sweetalert";

import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 250,
    minHeight: 120,
    marginBottom: 15,
    // border:'0.5px solid blue'
  },
  root: {
    // background:'#fff5cc',
    // padding:'30px',
    align: "center",
    //marginLeft:'200px',
    //marginRight:'200px',
    // marginTop:'10px',
    width: "100%",
    border: "0.5px solid blue",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // marginBottom:'-10px',
    marginTop: "10px",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formControl: {
    marginTop: "30px",
    marginLeft: "2px",
    marginBottom: "-30px",
  },
  formControlState: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "-10px",
  },
  button: {
    //  margin: theme.spacing(1),
    //background:'#fff0b3',
  },

  button1: {
    // margin: theme.spacing(1),
    //  color:'yellow',
    fontWeight: "bold",
  },

  buttonred: {
    // margin: theme.spacing(1),
    color: "red",
    fontWeight: "bold",
  },

  soldbutton: {
    // margin: theme.spacing(1),
    color: "#2BB573",
    fontWeight: "bold",
  },

  button2: {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#01a3a4",
      color: "white",
      fontStyle: "bold",
    },
  },

  input: {
    display: "none",
  },

  square: {
    color: "#fff",
    backgroundColor: deepOrange[500],
  },
  container: {
    marginLeft: "-30px",
    //  padding:'0px',
  },
  group: {
    margin: theme.spacing(1, 1),
  },
  bigAvatar: {
    padding: "2%",
    width: "auto",
    height: "auto",
  },

  text: {
    marginTop: theme.spacing(1),
    fontSize: 12,
  },
}));

function PostAdd(props) {
  const classes = useStyles();
  const [getMessage, setMessage] = React.useState("");
  const [getTrue, setTrue] = useState(false);
  const [getDataList, setDataList] = React.useState([]);
  const [getdialog, setdialog] = React.useState(false);
  const [value, setValue] = React.useState(2);

  const setuserdata = async () => {
    let rec = JSON.parse(localStorage.getItem("AGENT"));
    console.log("Agent Image", rec);
    let body = {
      id: rec[0].id,
    };
    let result = await postData("postadd/displaydatabyagent", body);
    setDataList(result);
    console.log("Agent data", result);
  };

  const handleDayExtend = async (id) => {
    let body = {
      id: id,
    };
    let result = await postData("postadd/daystoextend", body);
    if (result) {
      // setMessage("Day Extend Successfully")
      swal("Enviar", "30 días de extensión exitosa", "success");
    } else {
      //setMessage("Not Extend Successfully")
      swal("Enviar", "No se extienda exitosamente", "error");
    }
    setuserdata();
  };

  const handleSoldList = async (id) => {
    var body = {
      id: id,
    };
    let result = await postData("postadd/updateSoldList", body);
    if (result) {
      // setMessage("Sold Successfully")
      swal("Enviar", "Vendido exitosamente", "success");
    } else {
      //  setMessage("Not Sold Successfully")
      swal("Enviar", "Error en vendido", "error");
    }
    setuserdata();
  };

  const handleDeactivateList = async (id) => {
    var body = { id: id };
    let result = await postData("postadd/updateDeactivateList", body);
    if (result) {
      // setMessage("Deactivate Successfully")
      swal("Enviar", "Post Desactivar con éxito", "success");
    } else {
      //setMessage("Not Deactivate Successfully")
      swal("Enviar", "No desactivar correctamente", "error");
    }
    setuserdata();
  };

  const deleteDataPost = async (body) => {
    let result = await postData("postadd/deleteActivateList", body);
    if (result) {
      swal("HOTEL", "Hotel Delted Succesfully", "success");
      setuserdata();
    } else {
      //setMessage("Error al eliminar publicación")
      swal("HOTEL", "There Is An Error To Delete Hotel", "error");
      setuserdata();
    }
  };

  const handleSubmitDelete = async (id) => {
    var body = { id: id };
    swal({
      title: "Hotel",
      text: "Are You Sure Want To Delete Hotel!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteDataPost(body);
      } else {
        swal("Hotel Is Safe!");
      }
    });

    setuserdata();
    setTrue(true);
  };

  useEffect(() => {
    setuserdata();
  }, []);

  useEffect(
    function () {
      setuserdata();
      setTrue(false);
    },
    [getTrue]
  );

  const handleClick = (view) => {
    props.changeView(view);
  };

  function ShowImage(picture) {
    var Picture = [];
    var Pic = picture.split(" ");
    console.log(Pic);
    for (var i = 0; Pic[i]; i++) {
      Picture[i] = Pic[i];
    }
    return Picture.map((item) => (
      <div>
        <img src={`${BaseUrl}/images/${item}`} height={250} width="100%" />
      </div>
    ));
  }
  //////////////////////////////
  const handleClickNext = (view) => {
    props.changeView(view);
  };

  ///////////////////////////////

  const show = (item) => (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Carousel showThumbs={false} style={{ borderRadius: "50%" }}>
              {ShowImage(item.picture)}
            </Carousel>
          </Grid>

          <Grid item xs={12} sm={5} style={{ paddingLeft: 5 }}>
            <Typography variant="body1" variant="h6" component="h4">
              <b style={{ color: "#2BB573" }}>{item.name}</b>
            </Typography>

            <Typography
              className={classes.text}
              variant="h7"
              component="h4"
              color="textSecondary"
            >
              No :<b style={{ color: "#2BB573" }}> {item.id}</b>
            </Typography>

            {/* <Typography className={classes.text} variant="h7" component="h4">
                 <b>Date:</b> { 
                  item.register_date
                 }
              </Typography>  */}
            <Grid container style={{ paddingLeft: 0 }}>
              {/* <Text style={{fontSize:17,color:'#000',fontWeight:'bold',marginLeft:wp("5%")}}><Icon name="rupee" size={14}></Icon> { parseInt(item.price) - parseInt( (item.price/100)*item.discount)}</Text>
<Text style={{fontSize:12,color:'#9a9a9a',textDecorationLine:'line-through',marginLeft:wp("3%"),marginTop:hp(".7%")}}><Icon name="rupee" size={10}></Icon> {item.price}</Text>
<Text style={{fontSize:14,color:'#FFA500',fontWeight:'bold',marginLeft:wp("2%"),marginTop:hp(".7%")}}>{parseInt(item.discount)}% OFF</Text> */}

              <Grid item xs={12} sm={3}>
                <Typography
                  className={classes.text}
                  style={{ textDecoration: "line-through" }}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                >
                  Price :<b style={{ color: "#2BB573" }}>{item.price}</b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Typography
                  className={classes.text}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                >
                  Offer Price :
                  <b style={{ color: "#2BB573" }}>
                    {parseInt(item.price) -
                      parseInt((item.price / 100) * item.discount)}
                  </b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography
                  className={classes.text}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                >
                  Off:<b style={{ color: "#2BB573" }}>{item.discount} %</b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography
                  className={classes.text}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                >
                  Contact No. :
                  <b style={{ color: "#2BB573" }}>{item.contactno}</b>
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            <Divider />

            <Grid style={{ paddingLeft: 0 }}>
              <Grid item xs={12} sm={12}>
                <Typography
                  className={classes.text}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                >
                  Address: <b style={{ color: "#2BB573" }}>{item.addressm}</b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography
                  className={classes.text}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                >
                  Description:{" "}
                  <b style={{ color: "#2BB573" }}>{item.description}</b>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography
                  className={classes.text}
                  variant="h7"
                  component="h4"
                  color="textSecondary"
                  style={{ flexWrap: "wrap" }}
                >
                  Facility: <b style={{ color: "#2BB573" }}>{item.facility}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Grid
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "-webkit-fill-available",
              }}
            >
              <Rating
                max={7}
                name="simple-controlled"
                value={item.rating}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </Grid>
            <Grid
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
              }}
            >
              <img
                src={`${BaseUrl}/images/${item.singleimage}`}
                style={{ width: 150, height: 150 }}
              />
            </Grid>

            {/* <Typography className={classes.text}>
          <b> Extender días: </b> <br/>
          {  item.extend_date }
          </Typography>

         <Button 
         color="Default"
         onClick={()=> handleDayExtend(item.id)}
         className={classes.button2} startIcon={<RefreshIcon />} >
            Extender
          </Button> */}
          </Grid>
        </Grid>

        <hr style={{ color: "black" }} />

        <Grid container xs={12} style={{ justifyContent: "center" }}>
          <Button
            color="Default"
            className={classes.button1}
            startIcon={<EditIcon />}
            onClick={() =>
              handleClick(
                <EditPostAdd
                  history={props.history}
                  changeView={props.changeView}
                  postid={item.id}
                />
              )
            }
          >
            Edit
          </Button>

          <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<DeleteIcon />}
            onClick={() => handleSubmitDelete(item.id)}
          >
            Delete
          </Button>

          <Button
            color="Primary"
            className={classes.soldbutton}
            startIcon={<VisibilityIcon />}
            onClick={() =>
              handleClick(<GotoEnd history={props.history} postid={item.id} />)
            }
          >
            View
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <div>
      {getDataList == "" ? (
        <center>
          <img src="/images/nodata.jpg" />
        </center>
      ) : (
        <Pagination
          data={getDataList}
          Show={show}
          displayNumber="10"
          previousText="Prev"
          nextText="Next"
        />
      )}
    </div>
  );
}
export default PostAdd;
