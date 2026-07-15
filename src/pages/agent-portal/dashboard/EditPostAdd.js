import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getData, postData } from "../../../services/FetchServices";
import { Carousel } from "react-responsive-carousel";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { postDataAndImage } from "../../../services/FetchServices";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { DropzoneArea } from "material-ui-dropzone";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Select from 'react-select';
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";
import Activities from "./Activities";
import PostAddd from "./PostAdd";
import Checkbox from "@material-ui/core/Checkbox";
import Gmap from "./Map/index";
import FileUpload from "./FileUpload";
import Dialog from "@material-ui/core/Dialog";
// import MultipalImages from "../MultipalImages";
import { ProgressBarContainer } from "./Progressbar/progressbar";
import swal from "sweetalert";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import FormGroup from "@material-ui/core/FormGroup";

import NumberFormat from "react-number-format";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { Card } from "@material-ui/core";
import BaseUrl from "../../../services/BaseUrl";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
const axios = require("axios");

//import Map from './Map/index';

const useStyles = makeStyles((theme) => ({
  root: {
    // background:'#fff5cc',
    padding: "30px",
    align: "center",
    //marginLeft:'200px',
    //marginRight:'200px',
    marginTop: "10px",
    width: "100%",
    // border:"0.5px solid green",

    "& > *": {
      margin: theme.spacing(1),
    },
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
    // margin: theme.spacing(1),
    marginTop: "2%",
    width: "100%",
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    fontSize: "2vh",
    "&:hover": {
      color: "black",
      fontStyle: "bold",
    },
  },

  input: {
    display: "none",
  },
  input1: {
    display: "none",
  },
  bigAvatar: {
    margin: "center",
    width: 60,
    height: 60,
    marginBottom: "-20px",
    background: "#ffffff",
  },
  container: {
    marginLeft: "-30px",
    padding: "0px",
  },
  group: {
    margin: theme.spacing(1, 1),
  },
  resize: {
    height: "10%",
  },
  ///////////////////////////////

  input: {
    display: "none",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  img: { width: 145, height: 130, padding: 5 },
  divcard: {
    display: "flex",
    flexWrap: "wrap",
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  rootcard: {
    width: 200,
    margin: 10,
  },
}));

function PostAdd(props) {
  const classes = useStyles();

  const [getCategoryid, setCategoryid] = React.useState("");
  const [getSubCategoryid, setSubCategoryid] = React.useState("");
  const [getCategory, setCategory] = React.useState("");
  const [getSubCategory, setSubCategory] = React.useState("");
  const [getPicture, setPicture] = React.useState([]);
  const [getoldimages, setoldimages] = React.useState([]);
  const [getoldSingleimages, setoldSingleimages] = React.useState("");
  const [getstateNewLatLng, setstateNewLatLng] = React.useState(true);

  const [getTitle, setTitle] = React.useState("");
  const [getDescription, setDescription] = React.useState("");
  const inputLabel = React.useRef(null);

  const [getprice, setprice] = React.useState("");
  const [getroom, setroom] = React.useState("");
  const [getbathroom, setbathroom] = React.useState("");
  const [getsize, setsize] = React.useState("");
  const [getparking, setparking] = React.useState("");
  const [getextrabed, setextrabed] = React.useState("");
  const [getView, setView] = React.useState({
    price: true,
    room: "none",
    bathroom: "none",
    size: "none",
    parking: "none",
  });

  const detailstag = {};

  const [getList, setList] = React.useState([]);
  const [getSCList, setSCList] = React.useState([
    {
      value: "1",
      label: "1 STAR",
    },
    {
      value: "2",
      label: "2 STAR",
    },
    {
      value: "3",
      label: "3 STAR",
    },
    {
      value: "4",
      label: "4 STAR",
    },
    {
      value: "5",
      label: "5 STAR",
    },
    {
      value: "6",
      label: "6 STAR",
    },
    {
      value: "7",
      label: "7 STAR",
    },
  ]);

  const [getMapAddress, setMapAddress] = React.useState("");
  const [getlatt, setlatt] = React.useState("");
  const [getlngg, setlngg] = React.useState("");

  const [getMessageThen, setMessageThen] = React.useState([]);
  const [getMessageError, setMessageError] = React.useState([]);

  const [getMessage, setMessage] = React.useState("");
  const [getagentid, setagentid] = React.useState("");
  const [gif, setgif] = useState(false);
  const [checkbox, setcheckbox] = React.useState("");

  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  ///////////////////////////////////////////////////////

  const [getWiFi, setWiFi] = React.useState({ value: "", state: false });
  const [getRoomService, setRoomService] = React.useState({
    value: "",
    state: false,
  });
  const [getTV, setTV] = React.useState({ value: "", state: false });
  const [getLandline, setLandline] = React.useState({
    value: "",
    state: false,
  });
  const [getAC, setAC] = React.useState({ value: "", state: false });
  const [getLocker, setLocker] = React.useState({ value: "", state: false });
  const [getAmenities, setAmenities] = React.useState({
    value: "",
    state: false,
  });
  const [getLaundry, setLaundry] = React.useState({ value: "", state: false });
  const [getPickDrop, setPickDrop] = React.useState({
    value: "",
    state: false,
  });
  const [getFridge, setFridge] = React.useState({ value: "", state: false });
  const [getDining, setDining] = React.useState({ value: "", state: false });
  const [getRestaurant, setRestaurant] = React.useState({
    value: "",
    state: false,
  });
  const [getCoffeeShop, setCoffeeShop] = React.useState({
    value: "",
    state: false,
  });
  const [getBar, setBar] = React.useState({ value: "", state: false });
  const [getCCTV, setCCTV] = React.useState({ value: "", state: false });
  const [facility, setfacility] = React.useState();
  const [getsingleimage, setsingleimage] = React.useState({
    icon: "",
    file: "",
  });
  const [getaddressm, setaddressm] = React.useState("");
  const [getperson, setperson] = React.useState("");
  const [getHotelQuantity, setHotelQuantity] = React.useState("");

  const handleSubmitForCheckBox = () => {
    var arr = [];
    if (getWiFi.state) {
      arr.push(getWiFi.value);
    }
    if (getCCTV.state) {
      arr.push(getCCTV.value);
    }
    if (getRoomService.state) {
      arr.push(getRoomService.value);
    }
    if (getTV.state) {
      arr.push(getTV.value);
    }
    if (getLandline.state) {
      arr.push(getLandline.value);
    }
    if (getAC.state) {
      arr.push(getAC.value);
    }
    if (getLocker.state) {
      arr.push(getLocker.value);
    }
    if (getAmenities.state) {
      arr.push(getAmenities.value);
    }
    if (getLaundry.state) {
      arr.push(getLaundry.value);
    }
    if (getPickDrop.state) {
      arr.push(getPickDrop.value);
    }
    if (getFridge.state) {
      arr.push(getFridge.value);
    }
    if (getDining.state) {
      arr.push(getDining.value);
    }
    if (getRestaurant.state) {
      arr.push(getRestaurant.value);
    }
    if (getCoffeeShop.state) {
      arr.push(getCoffeeShop.value);
    }
    if (getBar.state) {
      arr.push(getBar.value);
    }
    console.log(arr);
    const arrr = arr.join();
    setfacility(arrr);

    console.log("array from data base invention -----  ", arrr);
  };

  const handleChangeCCTV = (event) => {
    if (event.target.checked)
      setCCTV({ value: "CCTV Camera", state: event.target.checked });
    else setCCTV({ value: "", state: event.target.checked });
    console.log("W....", event.target.checked);
  };

  const handleChangeWiFi = (event) => {
    if (event.target.checked)
      setWiFi({ value: "Free WiFi", state: event.target.checked });
    else setWiFi({ value: "", state: event.target.checked });
    console.log("W....", event.target.checked);
  };

  const handleChangeRoomService = (event) => {
    if (event.target.checked)
      setRoomService({
        value: "24*7 Room Service",
        state: event.target.checked,
      });
    else setRoomService({ value: "", state: event.target.checked });
    console.log("R....", event.target.checked);
  };

  const handleChangeTV = (event) => {
    if (event.target.checked)
      setTV({ value: "TV", state: event.target.checked });
    else setTV({ value: "", state: event.target.checked });
    console.log("T....", event.target.checked);
  };

  const handleChangeLandline = (event) => {
    if (event.target.checked)
      setLandline({
        value: "Landline(* Paid Service)",
        state: event.target.checked,
      });
    else setLandline({ value: "", state: event.target.checked });
  };

  const handleChangeAC = (event) => {
    if (event.target.checked)
      setAC({ value: "Air Conditioned", state: event.target.checked });
    else setAC({ value: "", state: event.target.checked });
  };

  const handleChangeLocker = (event) => {
    if (event.target.checked)
      setLocker({ value: "Safety Lockers", state: event.target.checked });
    else setLocker({ value: "", state: event.target.checked });
  };

  const handleChangeAmenities = (event) => {
    if (event.target.checked)
      setAmenities({ value: "Amenities", state: event.target.checked });
    else setAmenities({ value: "", state: event.target.checked });
  };

  const handleChangeLaundry = (event) => {
    if (event.target.checked)
      setLaundry({
        value: "Laundry(*Paid Service)",
        state: event.target.checked,
      });
    else setLaundry({ value: "", state: event.target.checked });
  };

  const handleChangePickDrop = (event) => {
    if (event.target.checked)
      setPickDrop({
        value: "Free Pick Up and Drop",
        state: event.target.checked,
      });
    else setPickDrop({ value: "", state: event.target.checked });
  };

  const handleChangeFridge = (event) => {
    if (event.target.checked)
      setFridge({ value: "Fridge", state: event.target.checked });
    else setFridge({ value: "", state: event.target.checked });
  };

  const handleChangeDining = (event) => {
    if (event.target.checked)
      setDining({
        value: "Dining at place of kitchen",
        state: event.target.checked,
      });
    else setDining({ value: "", state: event.target.checked });
  };

  const handleChangeRestaurant = (event) => {
    if (event.target.checked)
      setRestaurant({
        value: "Multi-Cuisine Restaurant",
        state: event.target.checked,
      });
    else setRestaurant({ value: "", state: event.target.checked });
  };

  const handleChangeCoffeeShop = (event) => {
    if (event.target.checked)
      setCoffeeShop({
        value: "Lavish buffet spread at coffeeshop",
        state: event.target.checked,
      });
    else setCoffeeShop({ value: "", state: event.target.checked });
  };

  const handleChangeBar = (event) => {
    if (event.target.checked)
      setBar({
        value: "Wide variety of spiritism bar",
        state: event.target.checked,
      });
    else setBar({ value: "", state: event.target.checked });
  };
  //////////////////////////////////////////////////////

  const handleClickClose = async () => {
    setOpen(false);
  };

  const ProgresDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        //  maxWidth="lg"
        //  fullWidth={true}
        paperWidthFalse={false}
      >
        <div >
          {/* <ProgressBarContainer     percent={progress} /> */}

          <Progress type="circle" percent={progress} />
        </div>
      </Dialog>
    );
  };

  const callalert = (data, status) => {
    console.log("Data From Axios then......", data);
    console.log("Data From status ......", status);
    // console.log("Data From data.status ......",data.status)

    //   alert("hello")
    if (data == "res" && status == "then") {
      swal("Post", "Post Succefully Updated", "success");
      props.changeView(
        <Activities history={props.history} changeView={props.changeView} />
      );
    }
    if (status == "then") {
      if (data.status == 200) {
        setOpen(false);
        swal("Post", "Post Succefully Updated", "success");
        props.changeView(
          <Activities history={props.history} changeView={props.changeView} />
        );
      }
    } else if (status == "catch") {
      setOpen(false);
      swal("Post", "There Is An Error To Post Published", "error");
      //props.changeView(<PostAddd/>)
    }
  };

  const handleSubmit = async (event) => {

    if (getstateNewLatLng) {

      var arr = [];
      if (getWiFi.state) {
        arr.push(getWiFi.value);
      }
      if (getCCTV.state) {
        arr.push(getCCTV.value);
      }
      if (getRoomService.state) {
        arr.push(getRoomService.value);
      }
      if (getTV.state) {
        arr.push(getTV.value);
      }
      if (getLandline.state) {
        arr.push(getLandline.value);
      }
      if (getAC.state) {
        arr.push(getAC.value);
      }
      if (getLocker.state) {
        arr.push(getLocker.value);
      }
      if (getAmenities.state) {
        arr.push(getAmenities.value);
      }
      if (getLaundry.state) {
        arr.push(getLaundry.value);
      }
      if (getPickDrop.state) {
        arr.push(getPickDrop.value);
      }
      if (getFridge.state) {
        arr.push(getFridge.value);
      }
      if (getDining.state) {
        arr.push(getDining.value);
      }
      if (getRestaurant.state) {
        arr.push(getRestaurant.value);
      }
      if (getCoffeeShop.state) {
        arr.push(getCoffeeShop.value);
      }
      if (getBar.state) {
        arr.push(getBar.value);
      }
      console.log(arr);
      const arrr = arr.join();
      setfacility(arrr);




      //var today_date = new Date();

      var str = "";
      getoldimages.map((item) => (str += item + " "));

      // Validation Start 

      let hotelData = getTitle.replace(/ /g, "");
      let descriptionData = getDescription.replace(/ /g, "");
      let addressmData = getaddressm.replace(/ /g, "");
      let contactnoData = getbathroom.replace(/ /g, "");
      let contactnoLength = contactnoData.length;


      if (
        hotelData != "" &&
        descriptionData != "" &&
        addressmData != "" &&
        contactnoLength == 10
      ) {
        if (
          getMapAddress != ""
          && getlatt != ""
          && getlngg != ""
          && getSubCategoryid != ""
          && getTitle != ""
          && getprice != ""
          && getroom != ""
          && getbathroom != ""
          && getDescription != ""
          && arrr != ""
          && getextrabed != ""
          && getaddressm != ""
          && getperson != ""
          && getHotelQuantity != ""
          //&& getsingleimage.file != "" 
          //&& fileU.length > 0
        ) {
          //   alert("fileU.length "+fileU.length+" "+" getoldimages.length "+" "+getoldimages.length+" "+" getsingleimage.file"+getsingleimage.file+"="+" "+"getoldSingleimages"+getoldSingleimages+"+")
          if (fileU.length > 1 || getoldimages.length > 0 && getoldSingleimages != "" || getsingleimage.file != "") {
            // Validation Close 

            setOpen(true);
            const body = {
              id: props.postid,
              rating: getSubCategoryid, //START RATING       'subcategoryid'
              name: getTitle, //HOTEL_NAME          'title'
              price: getprice, //PRICE
              discount: getroom, //DISCOUNT          'room'
              contactno: getbathroom, // CONTACT-NO.      'bathroom'
              description: getDescription, //DECCRIPTION
              facility: arrr, //facility
              mapaddress: getMapAddress, //MAP ADDRESS
              lat: getlatt, // LAT
              lng: getlngg, // LNG
              extrabed: getextrabed, // LNG
              addressm: getaddressm, //address
              oldimages: str, //oldimages
            };
            //  console.log(body);

            let result = await postData(`postadd/updatePostAdd`, body);
            //  console.log("HAVE DATA ", result.insertId);
            if (result) {
              if (fileU != "" && getsingleimage.file == "") {
                var formData = new FormData();
                formData.append("oldimages", body.oldimages);
                formData.append("id", props.postid);
                for (var x = 0; x < fileU.length; x++) {
                  formData.append("picture", fileU[x]);
                }
                const config = {
                  headers: { "content-type": "multipart/form-data" },
                  onUploadProgress: function (progressEvent) {
                    var percentCompleted = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log("PERCENTEAGE COMPLETED  = ", percentCompleted);
                    setProgress(parseInt(percentCompleted));
                  },
                };
                console.log(formData);
                axios
                  .post(`${BaseUrl}/lockpostadd/edituploadimage`, formData, config)
                  .then((res) => {
                    callalert(res, "then");
                  })
                  .catch((err) => {
                    callalert(err, "catch");
                  });
              } else if (fileU == "" && getsingleimage.file != "") {
                var formData = new FormData();

                formData.append("id", props.postid);
                formData.append("photo", getsingleimage.file);
                const config = {
                  headers: { "content-type": "multipart/form-data" },
                  onUploadProgress: function (progressEvent) {
                    var percentCompleted = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log("PERCENTEAGE COMPLETED  = ", percentCompleted);
                    setProgress(parseInt(percentCompleted));
                  },
                };
                console.log(formData);
                axios
                  .post(
                    `${BaseUrl}/lockpostadd/edituploadsingleimage`,
                    formData,
                    config
                  )
                  .then((res) => {
                    callalert(res, "then");
                  })
                  .catch((err) => {
                    callalert(err, "catch");
                  });
              } else if (fileU != "" && getsingleimage.file != "") {
                var formData = new FormData();
                formData.append("oldimages", body.oldimages);
                formData.append("id", props.postid);
                formData.append("photo", getsingleimage.file);
                for (var x = 0; x < fileU.length; x++) {
                  formData.append("picture", fileU[x]);
                }
                const config = {
                  headers: { "content-type": "multipart/form-data" },
                  onUploadProgress: function (progressEvent) {
                    var percentCompleted = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log("PERCENTEAGE COMPLETED  = ", percentCompleted);
                    setProgress(parseInt(percentCompleted));
                  },
                };
                console.log(formData);
                axios
                  .post(
                    `${BaseUrl}/lockpostadd/edituploadimageboth`,
                    formData,
                    config
                  )
                  .then((res) => {
                    callalert(res, "then");
                  })
                  .catch((err) => {
                    callalert(err, "catch");
                  });




              } else {
                callalert("res", "then");
              }

            } else {
              // setMessage("Error al enviar el registro...");
              swal("Post", "Unknown Error", "error"); //Post Add Result
            }

          } else {
            swal("Error", "Image Not Found", "error");
          }

        } else {
          swal("Error", "Please Click In Marker And Fill All Fields One", "error");
        }
      } else {
        swal("Error", "Please Click In Marker And Fill All Fields Two", "error");
      }





    }
    else {
      swal("Post", "click on map marker", "error");
    }




  };
  const handlePicture = (files) => {
    // setPicturePath(URL.createObjectURL(event.target.files[0]))
    console.log(files);
    setPicture(files);
  };

  const setaddresstostate = async (data, latt, lngg) => {
    //  alert(data,latt,lngg)
    setMapAddress(data);
    setstateNewLatLng({ lat: latt, lng: lngg });
    setlatt(latt);
    setlngg(lngg);
  };

  useEffect(function () {
    setAllFieldData();
    readAllRecords();
    readAllSCRecords();
    setuserdata();
  }, []);

  // React.useEffect(function () {
  //   setAllFieldData();
  //   // readAllRecords()
  //   // readAllSCRecords()
  //   // setuserdata();

  // },[])

  const setuserdata = () => {
    let rec = JSON.parse(localStorage.getItem("AGENT"));
    console.log(rec);
    setagentid(rec[0].id);
  };

  const onSubCategoryChange = (event) => {
    setSubCategory(event);
    try {
      setSubCategoryid(event.value);

      console.log(event);
    } catch (e) {
      setSubCategoryid("");
    }
  };

  const onCategoryChange = async (event) => {
    const statebody = {
      price: true,
      room: "none",
      bathroom: "none",
      size: "none",
      parking: "none",
    };

    setCategory(event);

    try {
      await setCategoryid(event.label);

      if (event.price == 0) {
        statebody.price = "none";
      } else {
        statebody.price = true;
      }

      if (event.room == 0) {
        statebody.room = "none";
      } else {
        statebody.room = true;
      }

      if (event.bathroom == 0) {
        statebody.bathroom = "none";
      } else {
        statebody.bathroom = true;
      }

      if (event.size == 0) {
        statebody.size = "none";
      } else {
        statebody.size = true;
      }

      if (event.parking == 0) {
        statebody.parking = "none";
      } else {
        statebody.parking = true;
      }
    } catch (e) {
      setCategoryid("");
    }
    setView(statebody);
  };

  const readAllRecords = async () => {
    var list = await getData("category/displayall");
    const a = [];
    for (var i = 0; i < list.length; i++) {
      var myObj = {
        value: list[i].categoryid,
        label: list[i].categoryname,

        price: list[i].price,
        room: list[i].room,
        bathroom: list[i].bathroom,
        size: list[i].size,
        parking: list[i].parking,
      };
      a.push(myObj);
    }
    setList(a);
  };

  const readAllSCRecords = async () => {
    var list = await getData("subcategory/displayall");
    const a = [];
    for (var i = 0; i < list.length; i++) {
      var myObj = {
        value: list[i].subcategoryid,
        label: list[i].subcategoryname,
      };
      a.push(myObj);
    }
    // setSCList(a)
  };

  // /////////////////////////////////////////////////////////////////////////////////

  const [file, setFile] = useState([]);
  const [fileU, setFileU] = useState([null]);

  function uploadMultipleFiles(e) {
    let fileArray = [];
    let fileObj = [];
    fileObj.push(e.target.files);
    let arr = [];
    for (let i = 0; i < fileObj[0].length; i++) {
      console.log(URL.createObjectURL(fileObj[0][i]));
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
      arr.push(e.target.files[i]);
    }
    console.log({ fileArray });
    setFile([...file, ...fileArray]);
    console.log("Arr", { arr });
    setFileU([...fileU, ...arr]);
  }
  function removeitem(url) {
    let rslt = [];
    let up = [];

    file.map((result, key) => {
      if (url != result) {
        rslt.push(result);
        up.push(fileU[key]);
      }
    }, {});

    setFile(rslt);
    setFileU(up);
  }

  const percentage = 66;

  /////////////////////////////////////

  const setAllFieldData = async () => {
    var body = { Id: props.postid };
    console.log(body);
    let result = await postData("postadd/agentPostEditbyId", body);
    if (result) {
      console.log(result[0]);
      setSubCategory(result[0].rating);
      setSubCategoryid(result[0].rating);


      const imagefile = `${BaseUrl}/images/${result[0].singleimage}`;
      setsingleimage({ icon: imagefile, file: "" });
      setoldSingleimages(result[0].singleimage)

      const imgurl = result[0].picture.split(" ");
      var arrold = [];
      for (let index = 0; index < imgurl.length - 1; index++) {
        arrold.push(`${imgurl[index]}`);
      }
      console.log(arrold);
      setoldimages(arrold);
      // var p = [];
      // var Pic = result[0].picture.split(" ");
      // for (var i = 0; Pic[i]; i++) {
      //   p[i] = Pic[i];
      // }
      // setPicture(p);
      // console.log(p);
      setTitle(result[0].name);
      setprice(result[0].price);
      setroom(result[0].discount);
      setextrabed(result[0].extrabed);
      setbathroom(result[0].contactno);
      setDescription(result[0].description);
      setaddressm(result[0].addressm);
      setperson(result[0].person);
      setHotelQuantity(result[0].roomqty);
      setfacility(result[0].facility);
      var arr = result[0].facility.split(",");
      console.log(arr, arr.length);
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "Free WiFi") {
          setWiFi({ state: true, value: "Free WiFi" });
        } else if (arr[i] == "24*7 Room Service") {
          setRoomService({ state: true, value: "24*7 Room Service" });
        } else if (arr[i] == "TV") {
          setTV({ state: true, value: "TV" });
        } else if (arr[i] == "Landline(* Paid Service)") {
          setLandline({ state: true, value: "Landline(* Paid Service)" });
        } else if (arr[i] == "CCTV Camera") {
          setCCTV({ state: true, value: "CCTV Camera" });
        } else if (arr[i] == "Air Conditioned") {
          setAC({ state: true, value: "Air Conditioned" });
        } else if (arr[i] == "Safety Lockers") {
          setLocker({ state: true, value: "Safety Lockers" });
        } else if (arr[i] == "Amenities") {
          setAmenities({ state: true, value: "Amenities" });
        } else if (arr[i] == "Laundry(*Paid Service)") {
          setLaundry({ state: true, value: "Laundry(*Paid Service)" });
        } else if (arr[i] == "Free Pick Up and Drop") {
          setPickDrop({ state: true, value: "Free Pick Up and Drop" });
        } else if (arr[i] == "Fridge") {
          setFridge({ state: true, value: "Fridge" });
        } else if (arr[i] == "Dining at place of kitchen") {
          setDining({ state: true, value: "Dining at place of kitchen" });
        } else if (arr[i] == "Multi-Cuisine Restaurant") {
          setRestaurant({ state: true, value: "Multi-Cuisine Restaurant" });
        } else if (arr[i] == "Lavish buffet spread at coffeeshop") {
          setCoffeeShop({
            state: true,
            value: "Lavish buffet spread at coffeeshop",
          });
        } else if (arr[i] == "Wide variety of spiritism bar") {
          setBar({ state: true, value: "Wide variety of spiritism bar" });
        }
      }
      setMapAddress(result[0].mapaddress);
      setlatt(result[0].lat);
      setlngg(result[0].lng);
    }
  };

  const setnewlatlng = (status) => {
    // alert(JSON.stringify({ latitude, longitude }));
    setstateNewLatLng(status);
  };

  const menuList = () => {
    return getSCList.map((item, index) => {
      return <MenuItem value={item.value}>{item.label}</MenuItem>;
    });
  };

  function ShowImage(Picture) {
    return Picture.map((item) => (
      <div>
        <img src={`${BaseUrl}/images/${item}`} height={300} />
      </div>
    ));
  }

  function removeitemOld(url) {
    const tempArr = getoldimages.filter((item, index) => {
      if (item != url) {
        return item;
      }
    });
    setoldimages(tempArr);
  }

  // /////////////////////////////////////////////////////////

  return (
    <Paper className={classes.root} style={{ border: "0.5px solid green" }}>
      <Container>
        <Paper className={classes.root}>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "green" }}
          >
            <h2>Hotel Star Rating</h2>
          </Typography>
          <React.Fragment>
            <Grid container xs={24} spacing={1} style={{ marginLeft: -10 }}>
              <Grid item xs={12}>
                {/* <Select
                  value={getSubCategory}
                  name="Category"
                  options={getSCList}
                  onChange={(e) => onSubCategoryChange(e)}
                  className="basic-multi-select"
                  classNamePrefix="Sub-Category"
                  isClearable={true}
                /> */}
                <FormControl className={classes.formControlState} fullWidth>
                  <InputLabel htmlFor="houses-simple">Rating</InputLabel>

                  <Select
                    value={getSubCategory}
                    onChange={(event) => {
                      setSubCategory(event.target.value);
                      setSubCategoryid(event.target.value);
                    }}
                  >
                    {/* <MenuItem value={getSubCategory}>{getSubCategory} Star</MenuItem> */}
                    {menuList()}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>

        <Paper className={classes.root}>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "green" }}
          >
            <h2>Edit Hotel Logo</h2>
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} style={{ marginLeft: -10 }}>
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input1}
                  id="contained-button-file1"
                  type="file"
                  onChange={(event) =>
                    setsingleimage({
                      icon: URL.createObjectURL(event.target.files[0]),
                      file: event.target.files[0],
                    })
                  }
                />
                <label htmlFor="contained-button-file1">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: "green" }}
                    component="span"
                  >
                    Edit
                  </Button>
                </label>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                <GridListTile key={1} cols={1}>
                  <img src={getsingleimage.icon} alt={""} />
                </GridListTile>
              </GridList>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root}>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "green" }}
          >
            <h2>Edit Hotel Photo's</h2>
          </Typography>

          <Grid container spacing={3}>
            <Typography variant="body2" style={{ color: "green" }}>
              <h4> Photo Size Should Maximum 18 MB, jpg or png Only</h4>
            </Typography>

            <Grid item xs={12}>
              <div className={classes.divcard}>
                {getoldimages.map((url) => {
                  const imgu = `${BaseUrl}/images/${url}`;
                  console.log(imgu);
                  return (
                    <Card className={classes.rootcard}>
                      <CardHeader
                        avatar={
                          <IconButton onClick={() => removeitemOld(url)}>
                            <CancelIcon color="error" />
                          </IconButton>
                        }
                      />
                      <CardMedia
                        className={classes.media}
                        image={`${imgu}`}
                        title="Product Image"
                      />
                    </Card>
                  );
                })}
              </div>
            </Grid>

            <Grid item xs={12} style={{ marginLeft: -10 }}>
              {/* <Carousel showThumbs={false}>{ShowImage(getPicture)}</Carousel> */}
              <React.Fragment>
                {/* <div className={classes.divcard}>
                  <Card>
                    {file.map((url) => (
                      <React.Fragment>
                        <img
                          className={classes.rootcard}
                          style={{
                            width: 30,
                            height: 30,
                            marginRight: -20,
                            position: "relative",
                          }}
                          src="./images/delete.png"
                          onClick={() => removeitem(url)}
                        ></img>
                        <img src={url} className={[classes.img]} alt="" />
                      </React.Fragment>
                    ))}
                  </Card>
                </div> */}
                <div className={classes.divcard}>
                  {file.map((url) => (
                    <React.Fragment>
                      <Card className={classes.rootcard}>
                        <CardHeader
                          avatar={
                            <IconButton onClick={() => removeitem(url)}>
                              <CancelIcon color="error" />
                            </IconButton>
                          }
                        />
                        <CardMedia
                          className={classes.media}
                          image={url}
                          title="Product Image"
                        />
                      </Card>
                    </React.Fragment>
                  ))}
                </div>

                <div className="form-group">
                  {/* <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple /> */}

                  <div
                    className={classes.root}
                    style={{
                      border: "0.2px solid green",
                      borderStyle: "dashed",
                    }}
                  >
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      onChange={uploadMultipleFiles}
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Edit Photo
                      </Button>
                    </label>
                  </div>
                </div>
              </React.Fragment>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.root}>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "green" }}
          >
            <h2>Detail's</h2>
          </Typography>

          <Grid container xs={12} spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-dense"
                placeholder="Hotel-Name"
                label="Hotel-Name"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                value={getTitle}
                onChange={(event) => setTitle(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-dense"
                placeholder="Hotel-Room-Quantity"
                label="Hotel-Room-Quantity"
                maxLength={3}
                type="number"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                value={getHotelQuantity}
                onChange={(e) => {
                  if (e.target.value != "") {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 3);
                    setHotelQuantity(e.target.value);
                  }
                  if (e.target.value.length == 0) {
                    setHotelQuantity("");
                  }
                }}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Price"
                label="Price"
                type="number"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                value={getprice}
                variant="outlined"
                onChange={(e) => {
                  if (e.target.value != "") {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                    setprice(e.target.value);
                  }
                  if (e.target.value.length == 0) {
                    setprice("");
                  }
                }}
                // onChange={(event) => setprice(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="DIscount"
                label="Discount"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                value={getroom}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  if (e.target.value != "") {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 2);
                    setroom(e.target.value);
                  }
                  if (e.target.value.length == 0) {
                    setroom("");
                  }
                }}
                // onChange={(event) => setroom(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Extra-Bed-Charges"
                label="Extra-Bed-Charges"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                type="number"
                value={getextrabed}
                variant="outlined"
                onChange={(e) => {
                  if (e.target.value != "") {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                    setextrabed(e.target.value);
                  }
                  if (e.target.value.length == 0) {
                    setextrabed("");
                  }
                }}
                // onChange={(event) => setextrabed(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Set How many person will stay"
                type="number"
                label="Person"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                value={getperson}
                onChange={(e) => {
                  if (e.target.value != "") {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 2);
                    setperson(e.target.value);
                  }
                  if (e.target.value.length == 0) {
                    setperson("");
                  }
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Contact-No."
                label="Contact-No."
                type="number"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getbathroom}
                variant="outlined"

                onChange={(e) => {
                  if (e.target.value != "") {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                    setbathroom(e.target.value);
                  }
                  if (e.target.value.length == 0) {
                    setbathroom("");
                  }
                }}
                // onChange={(event) => setbathroom(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="address"
                label="Address"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getaddressm}
                variant="outlined"
                onChange={(event) => setaddressm(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-dense"
                placeholder="Description"
                label="Description"
                multiline
                margin="dense"
                rows="4"
                style={{ marginLeft: -10 }}
                className={clsx(classes.textField, classes.dense)}
                
                variant="outlined"
                value={getDescription}
                onChange={(event) => setDescription(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>

        {/* ///////////////////////////////////////////////////// */}

        <Paper className={classes.root}>
          <Typography
            variant="button"
            display="block"
            align="center"
            gutterBottom
            style={{ color: "green" }}
          >
            <h2>Facilities</h2>
          </Typography>
          <React.Fragment>
            <Grid container xs={12}>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="button"
                  display="block"
                  align="center"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  <h4>Communication and Entertainment</h4>
                </Typography>
                <FormGroup>
                  {/* <FormLabel component="legend" className={classes.formLabel}>Status</FormLabel> */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getWiFi.state}
                        onChange={(event) => handleChangeWiFi(event)}
                        value="Free WiFi"
                      />
                    }
                    label="Free WiFi"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getRoomService.state}
                        onChange={(event) => handleChangeRoomService(event)}
                        value="24*7 Room Service"
                      />
                    }
                    label="24*7 Room Service"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getTV.state}
                        onChange={(event) => handleChangeTV(event)}
                        value="TV"
                      />
                    }
                    label="TV"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getLandline.state}
                        onChange={(event) => handleChangeLandline(event)}
                        value="Landline(* Paid Service)"
                      />
                    }
                    label="Landline(* Paid Service)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getCCTV.state}
                        onChange={(event) => handleChangeCCTV(event)}
                        value="CCTV Camera"
                      />
                    }
                    label="CCTV Camera"
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography
                  variant="button"
                  display="block"
                  align="center"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  <h4>Comfort and Security</h4>
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getAC.state}
                        onChange={(event) => handleChangeAC(event)}
                        value="Air Conditioned"
                      />
                    }
                    label="Air Conditioned"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getLocker.state}
                        onChange={(event) => handleChangeLocker(event)}
                        value="Safety Lockers"
                      />
                    }
                    label="Safety Lockers"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getAmenities.state}
                        onChange={(event) => handleChangeAmenities(event)}
                        value="Amenities"
                      />
                    }
                    label="Amenities"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getLaundry.state}
                        onChange={(event) => handleChangeLaundry(event)}
                        value="Laundry(*Paid Service)"
                      />
                    }
                    label="Laundry(*Paid Service)"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getPickDrop.state}
                        onChange={(event) => handleChangePickDrop(event)}
                        value="Free Pick Up and Drop"
                      />
                    }
                    label="Free Pick Up and Drop"
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography
                  variant="button"
                  display="block"
                  align="center"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  <h4>Kitchen</h4>
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getFridge.state}
                        onChange={(event) => handleChangeFridge(event)}
                        value="Fridge"
                      />
                    }
                    label="Fridge"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getDining.state}
                        onChange={(event) => handleChangeDining(event)}
                        value="Dining at place of kitchen"
                      />
                    }
                    label="Dining at place of kitchen"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getRestaurant.state}
                        onChange={(event) => handleChangeRestaurant(event)}
                        value="Multi-Cuisine Restaurant"
                      />
                    }
                    label="Multi-Cuisine Restaurant"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getCoffeeShop.state}
                        onChange={(event) => handleChangeCoffeeShop(event)}
                        value="Lavish buffet spread at coffeeshop"
                      />
                    }
                    label="Lavish buffet spread at coffeeshop"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={getBar.state}
                        onChange={(event) => handleChangeBar(event)}
                        value="Wide variety of spiritism bar"
                      />
                    }
                    label="Wide variety of spiritism bar"
                  />
                </FormGroup>

                {/* <button onClick={handleSubmitForCheckBox} >Submit</button> */}
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
        {/* ////////////////////////////////////////////////////// */}
        <Paper className={classes.root}>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "green" }}
          >
            <h2>Location.</h2>
          </Typography>

          <Gmap
            newlatlng={setnewlatlng}
            addresstatechangefun={setaddresstostate}
            incomingprops={{
              status: true,
              address: getMapAddress != "" ? getMapAddress : false,
              lat: getlatt != "" ? getlatt : false,
              lng: getlngg != "" ? getlngg : false,
            }}
          />
          {/*  <Map/> */}
        </Paper>

        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            component="span"
            className={classes.button}
            onClick={(event) => handleSubmit(event)}
          >
            Update Hotel
          </Button>
        </Grid>
        {/* <ProgressBar animated  striped variant={progresscolor} now={progress} label={`${progress}%`} /> */}

        {gif ? (
          <Grid item xs={12} align="center">
            <img
              src="./images/upload.gif"
              style={{ width: "10%", height: "10%" }}
            />
          </Grid>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <Grid item xs={12}>
          {ProgresDialog()}
          <Typography>{/* {getMessage} */}</Typography>
        </Grid>
      </Container>
    </Paper>
  );
}
export default PostAdd;
