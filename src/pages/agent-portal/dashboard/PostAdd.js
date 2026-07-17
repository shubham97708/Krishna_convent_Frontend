import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getData, postData } from "../../../services/FetchServices";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { postDataAndImage } from "../../../services/FetchServices";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { DropzoneArea } from "material-ui-dropzone";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "react-select";
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
import FormGroup from "@material-ui/core/FormGroup";

import NumberFormat from "react-number-format";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { Card } from "@material-ui/core";
import BaseUrl from "../../../services/BaseUrl";
import ShowStudents from "./showStudent/ShowStudents";
const axios = require("axios");

//import Map from './Map/index';

const useStyles = makeStyles((theme) => ({
  root: {
    // background:'#fff5cc',
    padding: "20px",
    align: "center",
    //marginLeft:'200px',
    //marginRight:'200px',
    marginTop: "2px",
    width: "100%",
    // border:"0.5px solid green",

    // '& > *': {
    //   margin: theme.spacing(1),
    // },
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
    backgroundColor: "blue",
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
}));

function PostAdd(props) {
  const classes = useStyles();
  const [getSubCategoryid, setSubCategoryid] = React.useState("");
  const [getSubCategoryidSession, setSubCategoryidSession] = React.useState("");
  const [getSubCategory2, setSubCategory2] = React.useState("");

  const [getGenderCategory, setGenderCategory] = React.useState("");
  const [getGenderCategoryid, setGenderCategoryid] = React.useState("");
  const [getSubCategory1, setSubCategory1] = React.useState("");
  const [getsingleimage, setsingleimage] = React.useState({icon: "",file: "" });
  const [getTitle, setTitle] = React.useState("");
  const [getaddressm, setaddressm] = React.useState("");
  const [getMothername, setMothername] = React.useState("");
  const [getRollno, setRollno] = React.useState("");
  const [geAdmissionno, seAdmissionno] = React.useState("");
  const [getDob, setDob] = React.useState("");
  const [getAdharno, setAdharno] = React.useState("");
  const [getSssmidno, setSssmidno] = React.useState("");
  const [getEnrollment, setEnrollment] = React.useState("");
  const [getMobileno, setMobileno] = React.useState("");
  const [getAddress, setAddress] = React.useState("");




  const [getperson, setperson] = React.useState("");
  const [getCategoryid, setCategoryid] = React.useState("");
 

  const [getSubCategoryid1, setSubCategoryid1] = React.useState("");
  const [getCategory, setCategory] = React.useState("");

  
  const [getSubCategory, setSubCategory] = React.useState("");
  const [getSubCategorySession, setSubCategorySession] = React.useState("");
  const [getSubCategoryid2, setSubCategoryid2] = React.useState("");

  
 

  const [getSubject, setSubject] = React.useState(true);


 

  
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


  const [getSession, setSession] = React.useState([
    {
      value: 2018,
      label: "2018 - 2019",
    },
    {
      value: 2019,
      label: "2019 - 2020",
    },
    {
      value: 2020,
      label: "2020 - 2021",
    },
    {
      value: 2021,
      label: "2021 - 2022",
    },



    {
      value: 2022,
      label: "2022 - 2023",
    },
    {
      value: 2023,
      label: "2023 - 2024",
    },
    {
      value: 2024,
      label: "2024 - 2025",
    },
    {
      value: 2025,
      label: "2025 - 2026",
    },
    {
      value: 2026,
      label: "2026 - 2027",
    },
    {
      value: 2027,
      label: "2027 - 2028",
    },
    {
      value: 2028,
      label: "2028 - 2029",
    },
    {
      value: 2029,
      label: "2029 - 2030",
    },
    {
      value: 2030,
      label: "2030 - 2031",
    },
    {
      value: 2031,
      label: "2031 - 2032",
    },
  ]);




  const [getList, setList] = React.useState([]);
  const [getSCList, setSCList] = React.useState([
    {
      value: "nur",
      label: "Nur",
    },
    {
      value: "lkg",
      label: "LKG",
    },
    {
      value: "ukg",
      label: "UKG",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },{
      value: "3",
      label: "3",
    },{
      value: "4",
      label: "4",
    },{
      value: "5",
      label: "5",
    },{
      value: "6",
      label: "6",
    },{
      value: "7",
      label: "7",
    },{
      value: "8",
      label: "8",
    },{
      value: "9",
      label: "9",
    },{
      value: "10",
      label: "10",
    },{
      value: "11",
      label: "11",
    },{
      value: "12",
      label: "12",
    }
  ]);





  const [getSCList1, setSCList1] = React.useState([
    {
      value: "eng",
      label: "English",
    },
    {
      value: "hin",
      label: "Hindi",
    }
   
  ]);


  const [getGenderList, setGenderList] = React.useState([
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "anyother",
      label: "AnyOther",
    },
   
  ]);



  const [getSCList2, setSCList2] = React.useState([
    {
      value: "pcm",
      label: "PCM",
    },
    {
      value: "pcb",
      label: "PCB",
    },
    {
      value: "commerce",
      label: "Commerce",
    },
    {
      value: "arts",
      label: "Arts",
    },
  ]);

  const OPTIONAL_SUBJECTS_BY_STREAM = {
    pcm: ["Bio"],
    pcb: ["Math"],
    commerce: ["Informatics Practices"],
    arts: [
      "History",
      "Political Science",
      "Geography",
      "Economics",
      "Indian Music",
      "Dancing",
      "Drawing and Designing",
      "Psychology",
      "Home Science, Anatomy, Physiology and Hygiene",
      "Sociology",
      "Agriculture",
    ],
  };

  const MAX_OPTIONAL_SUBJECTS = 3;

  const [getOptionalSubjects, setOptionalSubjects] = React.useState([]);

  // Agriculture is actually 3 separate 100-mark papers (Elements of Science and
  // Mathematics, Crop Production and Horticulture, Elements of Animal Husbandry
  // and Poultry Farming), so on MP board it's taken instead of -- not alongside
  // -- the other individual electives; picking it fills the whole 3-elective
  // quota by itself.
  const onOptionalSubjectToggle = (subject) => {
    setOptionalSubjects((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject);
      }
      if (subject === "Agriculture") {
        return ["Agriculture"];
      }
      if (prev.includes("Agriculture")) {
        swal("Not Allowed", "Agriculture already fills all 3 optional subjects. Remove it first to pick individual electives.", "warning");
        return prev;
      }
      if (prev.length >= MAX_OPTIONAL_SUBJECTS) {
        swal("Limit Reached", `You can select maximum ${MAX_OPTIONAL_SUBJECTS} optional subjects`, "warning");
        return prev;
      }
      return [...prev, subject];
    });
  };




  
  const [getagentid, setagentid] = React.useState("");
  const [gif, setgif] = useState(false);


  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
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
        <div>
          {/* <ProgressBarContainer     percent={progress} /> */}

          <Progress type="circle" percent={progress} />
        </div>
      </Dialog>
    );
  };

  const callalert = (data, status) => {
    console.log("Data From Axios then......", data);
    console.log("Data From status ......", status);
    console.log("Data From data.status ......", data.status);

    //   alert("hello")
    if (status == "then") {
      if (data.status == 200) {
        setOpen(false);
        swal("School", "Student Added", "success");
        props.changeView(
          <ShowStudents history={props.history} changeView={props.changeView} />
        );
      }
    } else if (status == "catch") {
      setOpen(false);
      swal("Hotel", "There Is Error In Server", "error");
      //props.changeView(<PostAddd/>)
    }
  };

  const handleSubmit = async (event) => {
    
    
console.log("class data  ==  ",getSubCategoryid)


    // let hotelData = getTitle.replace(/ /g, "");
    // let descriptionData = getDescription.replace(/ /g, "");
    // let addressmData = getaddressm.replace(/ /g, "");
    // let contactnoData = getbathroom.replace(/ /g, "");
    // let contactnoLength = contactnoData.length;

    // if (
    //   hotelData != "" &&
    //   descriptionData != "" &&
    //   addressmData != "" &&
    //   contactnoLength == 10
    // ) {
      if (
        getSubCategoryid != "" &&
    //    getSubCategoryid2 != "" &&
        getSubCategoryid1 != "" &&
        getsingleimage.file != ""  &&
        getTitle != "" &&
        getaddressm != "" &&
        getMothername != "" &&
        getRollno != "" &&
        geAdmissionno != "" &&
        getDob != "" &&
        getGenderCategoryid != "" &&
        getAdharno != "" &&
        getSssmidno != "" &&
        getEnrollment != ""&&
        getMobileno != "" &&
        getAddress != "" &&
        getSubCategoryidSession != ""
       
        
      ) {
        setOpen(true);
        
          var formData = new FormData();
    
          formData.append("class", getSubCategoryid);
          formData.append("subject", getSubCategoryid2);
          formData.append("medium", getSubCategoryid1);
          formData.append("photo", getsingleimage.file);
          formData.append("name", getTitle);
          formData.append("fathername", getaddressm);
          formData.append("mothername", getMothername);
          formData.append("rollno", getRollno);
          formData.append("admissionno", geAdmissionno);
          formData.append("dob", getDob);
          formData.append("gender", getGenderCategoryid);
          formData.append("adharno", getAdharno);
          formData.append("sssmidno", getSssmidno);
          formData.append("enrollment", getEnrollment);
          formData.append("mobileno", getMobileno);
          formData.append("address", getAddress);
          formData.append("session", getSubCategoryidSession);
          formData.append("optionalsubject", getOptionalSubjects.join(", "));
      
                    
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&  ",formData)
         
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
          
         
          axios.post(`${BaseUrl}/lockpostadd/uploadimage`, formData, config)
            .then((res) => {
              callalert(res, "then");
            })
            .catch((err) => {
              callalert(err, "catch");
            });



   
      } else {
        swal("Error", "Inner  Please Fill All Fields", "error");
      }
    // } else {
    //   swal("Error", "Outer Click In Marker And Fill All Fields", "error");
    // }
  };


  useEffect(function () {
   // readAllRecords();
    //readAllSCRecords();
//setuserdata();
  }, []);

  const setuserdata = () => {
    let rec = JSON.parse(localStorage.getItem("AGENT"));
    console.log(rec);
    setagentid(rec[0].id);
  };

  const onSubCategoryChange = (event) => {
    setSubCategory(event);
    try {
      setSubCategoryid(event.value);

      if(event.value == 11 || event.value == 12){
        setSubject(false)

      }else{
        setSubject(true)
      }

      console.log(event);
    } catch (e) {
      setSubCategoryid("");
    }
  };

  const onSubCategorySessionChange = (event) => {
    setSubCategorySession(event);
    try {
      setSubCategoryidSession(event.value);
    

      // if(event.value == 11 || event.value == 12){
      //   setSubject(false)

      // }else{
      //   setSubject(true)
      // }

      console.log(event);
    } catch (e) {
      setSubCategoryidSession("");
    }
  };



  const onSubCategoryChange2 = (event) => {
    setSubCategory2(event);
    setOptionalSubjects([]);
    try {
      setSubCategoryid2(event.value);
      console.log(event);
    } catch (e) {
      setSubCategoryid2("");
    }
  };

  


  const onGenderCategoryChange = (event) => {
    setGenderCategory(event);
    try {
     // alert(event.value)
      setGenderCategoryid(event.value);
      console.log(event);
    } catch (e) {
      setGenderCategoryid("");
    }
  };



  const onSubCategoryChange1 = (event) => {
    setSubCategory1(event);
    try {
      setSubCategoryid1(event.value);

      console.log(event);
    } catch (e) {
      setSubCategoryid1("");
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
    console.log({ ...fileU, ...arr });
  }


  function removeitem(url) {
    console.log(url);
    let rslt = [];
    let up = [];

    file.map((result, key) => {
      if (url != result) {
        rslt.push(result);
        up.push(fileU[key]);
      }
      console.log(result);
    }, {});

    console.log(rslt);
    console.log(up);
    setFile(rslt);
    setFileU(up);
  }



  const percentage = 66;



  return (
      <Container style={{ paddingLeft: 5, paddingRight: 5, maxWidth: "100%" }}>
        <Paper className={classes.root}>
         
          
          

        <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "blue" }}
          >
            <h2>Select Session</h2>
          </Typography>
          <React.Fragment>
            <Grid
              container
              xs={24}
              spacing={1}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <Grid item xs={12}>
                <Select
                  value={getSubCategorySession}
                  name="Category"
                  options={getSession}
                  onChange={(e) => onSubCategorySessionChange(e)}
                  className="basic-multi-select"
                  classNamePrefix="Sub-Category"
                  isClearable={true}
                />
              </Grid>
            </Grid>
          </React.Fragment>







          
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "blue" }}
          >
            <h2>Select Class</h2>
          </Typography>
          <React.Fragment>
            <Grid
              container
              xs={24}
              spacing={1}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <Grid item xs={12}>
                <Select
                  value={getSubCategory}
                  name="Category"
                  options={getSCList}
                  onChange={(e) => onSubCategoryChange(e)}
                  className="basic-multi-select"
                  classNamePrefix="Sub-Category"
                  isClearable={true}
                />
              </Grid>
            </Grid>
          </React.Fragment>


          <div style={{ marginTop: 10 }} />
          <div style={{ marginTop: 10 }} />


          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "blue" }}
          >
            <h2>Select Subject</h2>
          </Typography>
          <React.Fragment>
            <Grid
              container
              xs={24}
              spacing={1}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <Grid item xs={12}>
                <Select
                  value={getSubCategory2}
                  name="Category"
                  options={getSCList2}
                  onChange={(e) => onSubCategoryChange2(e)}
                  className="basic-multi-select"
                  classNamePrefix="Sub-Category"
                  isClearable={true}
                  isDisabled={getSubject ? true : null}
                />
              </Grid>
            </Grid>
          </React.Fragment>

          {OPTIONAL_SUBJECTS_BY_STREAM[getSubCategoryid2] && (
            <React.Fragment>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={{ color: "blue" }}
              >
                <h2>Optional Subject (Select up to {MAX_OPTIONAL_SUBJECTS})</h2>
              </Typography>
              <FormGroup row>
                {OPTIONAL_SUBJECTS_BY_STREAM[getSubCategoryid2].map((subject) => {
                  const isChecked = getOptionalSubjects.includes(subject);
                  return (
                    <FormControlLabel
                      key={subject}
                      control={
                        <Checkbox
                          checked={isChecked}
                          disabled={!isChecked && getOptionalSubjects.length >= MAX_OPTIONAL_SUBJECTS}
                          onChange={() => onOptionalSubjectToggle(subject)}
                        />
                      }
                      label={subject}
                    />
                  );
                })}
              </FormGroup>
            </React.Fragment>
          )}

          <div style={{ marginTop: 10 }} />
          <div style={{ marginTop: 10 }} />


          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "blue" }}
          >
            <h2>Select Medium</h2>
          </Typography>
          <React.Fragment>
            <Grid
              container
              xs={24}
              spacing={1}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <Grid item xs={12}>
                <Select
                  value={getSubCategory1}
                  name="Category"
                  options={getSCList1}
                  onChange={(e) => onSubCategoryChange1(e)}
                  className="basic-multi-select"
                  classNamePrefix="Sub-Category"
                  isClearable={true}
                />
              </Grid>
            </Grid>
          </React.Fragment>




          <div style={{ marginTop: 10 }} />
          
   

          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "blue" }}
          >
            <h2>Add Student Picture  Size(539x360)</h2>
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} style={{ marginLeft: -10 }}>
              <div className={classes.root}>
                <input
                  // accept="image/*"
                  accept="image/x-png,image/jpeg,image/jpg"
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
                    style={{ backgroundColor: "blue" }}
                    component="span"
                  >
                    Upload
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





          <div style={{ marginTop: 10 }} />
      
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ color: "blue" }}
          >
            <h2>Detail's</h2>
          </Typography>

          <Grid container xs={12} spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-dense"
                placeholder="Student-Name"
                label="Student-Name"
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
                id="outlined-basic"
                placeholder="Father Name"
                label="Father Name"
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
                id="outlined-basic"
                placeholder="Mother Name"
                label="Mother Name"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getMothername}
                variant="outlined"
                onChange={(event) => setMothername(event.target.value)}
                fullWidth
              />
            </Grid>
            
   

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Roll No."
                label="Roll No."
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getRollno}
                variant="outlined"
                onChange={(event) => setRollno(event.target.value)}
                fullWidth
              />
            </Grid>

          



            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Admission No."
                label="Admission No."
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={geAdmissionno}
                variant="outlined"
                onChange={(event) => seAdmissionno(event.target.value)}
                fullWidth
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="DOB"
                label="DOB"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getDob}
                variant="outlined"
                onChange={(event) => setDob(event.target.value)}
                fullWidth
              />
            </Grid>    



         
          <React.Fragment>
            <Grid
              container
              xs={24}
              spacing={1}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <Grid item xs={12}>
                <Select
                placeholder="Gender"
                label="Gender"
                variant="outlined"
                  value={getGenderCategory}
                  name="Category"
                  options={getGenderList}
                  onChange={(e) => onGenderCategoryChange(e)}
                  className="basic-multi-select"
                  classNamePrefix="Sub-Category"
                  isClearable={true}
                 // isDisabled={getSubject ? true : null}
                />
              </Grid>
            </Grid>
          </React.Fragment>


            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Adhar No."
                label="Adhar No."
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getAdharno}
                variant="outlined"
                onChange={(event) => setAdharno(event.target.value)}
                fullWidth
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="SSSM-ID No."
                label="SSSM-ID No."
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getSssmidno}
                variant="outlined"
                onChange={(event) => setSssmidno(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Enrollment"
                label="Enrollment"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getEnrollment}
                variant="outlined"
                onChange={(event) => setEnrollment(event.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Mobile No"
                label="Mobile No"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getMobileno}
                variant="outlined"
                onChange={(event) => setMobileno(event.target.value)}
                fullWidth
              />
            </Grid>

          
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                placeholder="Address"
                label="Address"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                style={{ marginLeft: -10 }}
                value={getAddress}
                variant="outlined"
                onChange={(event) => setAddress(event.target.value)}
                fullWidth
              />
            </Grid>






          </Grid>
         



        
          <div style={{ marginTop: 10 }} />
  
        


          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              component="span"
              className={classes.button}
              onClick={(event) => handleSubmit(event)}
            >
              Submit 
            </Button>
          </Grid>
    

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
        </Paper>
      </Container>
  );
}
export default PostAdd;
