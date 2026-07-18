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
import PostAddd from "./PostAdd";
import Checkbox from "@material-ui/core/Checkbox";
import Gmap from "./Map/index";
import FileUpload from "./FileUpload";
import Dialog from "@material-ui/core/Dialog";
// import MultipalImages from "../MultipalImages";
import { ProgressBarContainer } from "./Progressbar/progressbar";
import swal from "sweetalert";
import FormGroup from "@material-ui/core/FormGroup";

import Pcm from "./marks/Pcm";
import Pcb from "./marks/Pcb";
import Commerce from "./marks/Commerce";
import Primary from "./marks/Primary";
import Secondary from "./marks/Secondary";
import SrSecondary from "./marks/SrSecondary";

import NumberFormat from "react-number-format";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import ShowStudents from "./showStudent/ShowStudents";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { Card } from "@material-ui/core";
import BaseUrl from "../../../services/BaseUrl";
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
    marginTop: "6px",
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
    marginTop: "2%",
    minWidth: 220,
    height: 48,
    borderRadius: 10,
    fontWeight: 700,
    letterSpacing: 0.4,
    textTransform: "none",
    fontSize: "1rem",
    background: "linear-gradient(90deg, #1565c0 0%, #1e88e5 100%)",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(21, 101, 192, 0.35)",
    "&:hover": {
      background: "linear-gradient(90deg, #0d47a1 0%, #1565c0 100%)",
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
  page: {
    backgroundColor: "#f4f6fa",
    minHeight: "100%",
    padding: 24,
  },
  sectionCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    boxShadow: "0 4px 20px rgba(20, 40, 90, 0.08)",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "2px solid #e3ecfb",
  },
  sectionIcon: {
    color: "#1565c0",
    marginRight: 10,
  },
  sectionTitle: {
    fontWeight: 700,
    color: "#0d1b4c",
    fontSize: "1.05rem",
  },
}));

function SectionHeader({ classes, icon, title }) {
  return (
    <div className={classes.sectionHeader}>
      {icon}
      <Typography className={classes.sectionTitle}>{title}</Typography>
    </div>
  );
}

function GenrateTc(props) {
  const classes = useStyles();

  const [getResultpcm, setResultpcm] = React.useState(false);
  const [getResultpcb, setResultpcb] = React.useState(false);
  const [getResultcommerce, setResultcommerce] = React.useState(false);
  const [getResultprimary, setResultprimary] = React.useState(false);
  const [getResultsecondary, setResultsecondary] = React.useState(false);
  const [getResultsrsecondary, setResultsrsecondary] = React.useState(false);
  const [getStudentSubject, setStudentSubject] = React.useState("");
  const [getAdmissionNo, setAdmissionNo] = React.useState("");

  //PCM State

  const [getNationality, setNationality] = React.useState("");
  const [getReligion, setReligion] = React.useState("");
  const [getCasteCategory, setCasteCategory] = React.useState("");
  const [getCaste, setCaste] = React.useState("");

  const [getAdmittedClass, setAdmittedClass] = React.useState("");
  const [getClassOption, setClassOption] = React.useState("");
  const [getPromotion, setPromotion] = React.useState("");
  const [getSchoolBoardResult, setSchoolBoardResult] = React.useState("");
  const [getTotalWorkingDays, setTotalWorkingDays] = React.useState("");
  const [getTotalDaysAttended, setTotalDaysAttended] = React.useState("");
  const [getDateOfApplication, setDateOfApplication] = React.useState("");
  const [getDateOfIssueCertificate, setDateOfIssueCertificate] =
    React.useState("");
  const [getReasonLeaving, setReasonLeaving] = React.useState("");
  const [getOtherRemark, setOtherRemark] = React.useState("");
  const [getDomicile, setDomicile] = React.useState("");
  const [getAdmissionDate, setAdmissionDate] = React.useState("");

  const [getName, setName] = React.useState("");
  const [getMothername, setMothername] = React.useState("");
  const [getFathername, setFathername] = React.useState("");
  const [getGender, setGender] = React.useState("");
  const [getDob, setDob] = React.useState("");
  const [getClass, setClass] = React.useState("");
  const [getStream, setStream] = React.useState("");
  const [getsingleimage, setsingleimage] = React.useState({
    icon: "",
    file: "",
  });
  const [getStudentID, setStudentID] = React.useState(0);

  const [getSubCategoryidSession, setSubCategoryidSession] = React.useState("");
  const [getSubCategoryid, setSubCategoryid] = React.useState("");
  const [getSubCategory2, setSubCategory2] = React.useState("");
  const [getSubCategory1, setSubCategory1] = React.useState("");
  const [getSubCategory3, setSubCategory3] = React.useState("");

  const [getTitle, setTitle] = React.useState("");
  const [getaddressm, setaddressm] = React.useState("");

  const [getRollno, setRollno] = React.useState("");
  const [geAdmissionno, seAdmissionno] = React.useState("");

  const [getAdharno, setAdharno] = React.useState("");
  const [getSssmidno, setSssmidno] = React.useState("");
  const [getEnrollment, setEnrollment] = React.useState("");
  const [getMobileno, setMobileno] = React.useState("");
  const [getAddress, setAddress] = React.useState("");

  const [getSubCategorySession, setSubCategorySession] = React.useState("");
  const [getperson, setperson] = React.useState("");
  const [getCategoryid, setCategoryid] = React.useState("");
  const [getSubCategoryid1, setSubCategoryid1] = React.useState("");
  const [getSubCategoryid3, setSubCategoryid3] = React.useState("");
  const [getCategory, setCategory] = React.useState("");
  const [getSubCategory, setSubCategory] = React.useState("");
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
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
    {
      value: "6",
      label: "6",
    },
    {
      value: "7",
      label: "7",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "9",
      label: "9",
    },
    {
      value: "10",
      label: "10",
    },
    {
      value: "11",
      label: "11",
    },
    {
      value: "12",
      label: "12",
    },
  ]);

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

  const [getSCList1, setSCList1] = React.useState([
    {
      value: "eng",
      label: "English",
    },
    {
      value: "hin",
      label: "Hindi",
    },
  ]);

  const [getSCList3, setSCList3] = React.useState([
    {
      value: "a",
      label: "b",
    },
  ]);

  const [getSCList2, setSCList2] = React.useState([
    {
      value: "",
      label: "",
    },
  ]);

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
        swal("School", "TC Genrated", "success");
        props.changeView(
          <ShowStudents
            history={props.history}
            changeView={props.changeView}
          />,
        );
      }
    } else if (status == "catch") {
      setOpen(false);
      swal("School", "There Is Error In Server", "error");
      //props.changeView(<PostAddd/>)
    }
  };

  const HandleSubmitPcm = async (event) => {
    if (
      getNationality != "" &&
      getReligion != "" &&
      getCasteCategory != "" &&
      getCaste != "" &&
      getAdmittedClass != "" &&
      getClassOption != "" &&
      getPromotion != "" &&
      getSchoolBoardResult != "" &&
      getTotalWorkingDays != "" &&
      getTotalDaysAttended != "" &&
      getDateOfApplication != "" &&
      getDateOfIssueCertificate != "" &&
      getReasonLeaving != "" &&
      getOtherRemark != "" &&
      getDomicile != "" &&
      getAdmissionDate != ""
    ) {
      let body = {
        studentid: getStudentID,
        nationality: getNationality,
        religion: getReligion,
        castecategory: getCasteCategory,
        caste: getCaste,
        admittedclass: getAdmittedClass,
        classoption: getClassOption,
        promotion: getPromotion,
        schoolboardresult: getSchoolBoardResult,
        totalworkingdays: getTotalWorkingDays,
        totaldaysattended: getTotalDaysAttended,
        dateofapplication: getDateOfApplication,
        dateofIssuecertificate: getDateOfIssueCertificate,
        reasonleaving: getReasonLeaving,
        otherremark: getOtherRemark,
        domicile: getDomicile,
        admissiondate: getAdmissionDate,
      };

      console.log(body);
      axios
        .post(`${BaseUrl}/lockpostadd/AddTc`, body)
        .then((res) => {
          callalert(res, "then");
        })
        .catch((err) => {
          callalert(err, "catch");
        });
    } else {
      swal("Error", "Please Fill All Fields", "error");
    }
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

      if (event.value == 11 || event.value == 12) {
        setSubject(false);
      } else {
        setSubject(true);
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
    try {
      setSubCategoryid2(event.value);

      let body = {
        id: event.value,
      };

      console.log("body : ", body);
      axios
        .post(`${BaseUrl}/lockpostadd/getstudentbyTC`, body)
        .then((res) => {
          // callalert(res, "then");
          console.log("For TC : ", res.data);
          if (res.data.length == 0) {
            alert("TC Already Genrated");
          }
          setName(res.data[0].name);
          setFathername(res.data[0].fathername);
          setMothername(res.data[0].mothername);
          setGender(res.data[0].gender);
          setDob(res.data[0].dob);
          setClass(res.data[0].class);
          setStream(res.data[0].subject);
          setsingleimage({ icon: res.data[0].photo, file: "" });
          setAddress(res.data[0].address);
          setSssmidno(res.data[0].sssmidno);
          setStudentID(res.data[0].studentid);
          setAdmissionNo(res.data[0].admissionno);

          // let arr = []
          // let obj1 = {}
          // let obj2 = {}
          // let obj3 = {}

          // if (res.data[0].quarterly == 0) {
          //     obj1 =
          //     {
          //         value: "quarterly",
          //         label: "Quarterly",
          //     }
          // } if (res.data[0].halfyearly == 0) {
          //     obj2 =
          //     {
          //         value: "halfyearly",
          //         label: "Halfyearly",
          //     }
          // } if (res.data[0].annually == 0) {
          //     obj3 =
          //     {
          //         value: "annually",
          //         label: "Annually",
          //     }
          // }
          // arr.push(obj1, obj2, obj3);

          // const results = arr.filter(element => {
          //     if (Object.keys(element).length !== 0) {
          //         return true;
          //     }
          //     return false;
          // });
          // console.log("Array Exam Data", res.data[0].subject)
          // setSCList3(results)
          // setStudentSubject(res.data[0].subject)
        })
        .catch((err) => {
          //callalert(err, "catch");
          console.log("From Drop Down", err);
        });

      console.log(event);
    } catch (e) {
      setSubCategoryid2("");
    }
  };

  const onSubCategoryChange3 = (event) => {
    setSubCategory3(event);
    try {
      setSubCategoryid3(event.value);

      //  alert(getStudentSubject)

      if (
        getSubCategoryid == "nur" ||
        getSubCategoryid == "lkg" ||
        getSubCategoryid == "ukg" ||
        getSubCategoryid == "1" ||
        getSubCategoryid == "2" ||
        getSubCategoryid == "3" ||
        getSubCategoryid == "4" ||
        getSubCategoryid == "5"
      ) {
        setResultprimary(true);
        setResultpcm(false);
        setResultpcb(false);
        setResultcommerce(false);
        setResultsecondary(false);
        setResultsrsecondary(false);
      } else if (
        getSubCategoryid == "6" ||
        getSubCategoryid == "7" ||
        getSubCategoryid == "8"
      ) {
        setResultprimary(false);
        setResultpcm(false);
        setResultpcb(false);
        setResultcommerce(false);
        setResultsecondary(true);
        setResultsrsecondary(false);
      } else if (getSubCategoryid == "9" || getSubCategoryid == "10") {
        setResultprimary(false);
        setResultpcm(false);
        setResultpcb(false);
        setResultcommerce(false);
        setResultsecondary(false);
        setResultsrsecondary(true);
      } else if (getStudentSubject == "pcb") {
        setResultprimary(false);
        setResultpcm(false);
        setResultpcb(true);
        setResultcommerce(false);
        setResultsecondary(false);
        setResultsrsecondary(false);
      } else if (getStudentSubject == "commerce") {
        setResultprimary(false);
        setResultpcm(false);
        setResultpcb(false);
        setResultcommerce(true);
        setResultsecondary(false);
        setResultsrsecondary(false);
      } else if (getStudentSubject == "pcm") {
        setResultprimary(false);
        setResultpcm(true);
        setResultpcb(false);
        setResultcommerce(false);
        setResultsecondary(false);
        setResultsrsecondary(false);
      }
      console.log(event);
    } catch (e) {
      setSubCategoryid3("");
    }
  };

  const onSubCategoryChange1 = (event) => {
    setSubCategory1(event);
    try {
      setSubCategoryid1(event.value);

      let body = {
        session: getSubCategoryidSession,
        class: getSubCategoryid,
        medium: event.value,
      };
      axios
        .post(`${BaseUrl}/lockpostadd/getstudentbyclass`, body)
        .then((res) => {
          // callalert(res, "then");
          console.log("From Drop Down", res.data);
          setSCList2(res.data);
        })
        .catch((err) => {
          //callalert(err, "catch");
          console.log("From Drop Down", err);
        });
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
      <div className={classes.page}>

        <Paper className={classes.sectionCard}>
          <SectionHeader classes={classes} icon={<SchoolIcon className={classes.sectionIcon} />} title="Select Student" />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Session</InputLabel>
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

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Class</InputLabel>
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

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Medium</InputLabel>
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

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Student</InputLabel>
              <Select
                value={getSubCategory2}
                name="Category"
                options={getSCList2}
                onChange={(e) => onSubCategoryChange2(e)}
                className="basic-multi-select"
                classNamePrefix="Sub-Category"
                isClearable={true}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.sectionCard}>
          <SectionHeader classes={classes} icon={<AssignmentIndIcon className={classes.sectionIcon} />} title="Student Information (Read-only)" />

        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            <GridListTile key={1} cols={1}>
              <img src={`${BaseUrl}/images/${getsingleimage.icon}`} alt={""} />
            </GridListTile>
          </GridList>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Name"
            label="Name"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getName}
            variant="outlined"
            // onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Father-Name"
            label="Father-Name"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getFathername}
            variant="outlined"
            // onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Mother-Name"
            label="Mother-Name"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getMothername}
            variant="outlined"
            //  onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Gender"
            label="Gender"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getGender}
            variant="outlined"
            //onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="DOB"
            label="DOB"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getDob}
            variant="outlined"
            // onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Class"
            label="Class"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getClass}
            variant="outlined"
            //   onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Stream"
            label="Stream"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getStream}
            variant="outlined"
            //   onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Address"
            label="Address"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getAddress}
            variant="outlined"
            //   onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="SSDM-ID No."
            label="SSSM-ID No."
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getSssmidno}
            variant="outlined"
            //   onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Admission-No"
            label="Admission-No"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getAdmissionNo}
            variant="outlined"
            //   onChange={(event) => setAdharno(event.target.value)}
            isDisabled={true}
            fullWidth
          />
        </Grid>

        {/* ///////////////////////////////////////// */}
        </Grid>
        </Paper>

        <Paper className={classes.sectionCard}>
          <SectionHeader classes={classes} icon={<DescriptionIcon className={classes.sectionIcon} />} title="Transfer Certificate Details" />

          <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Nationality"
            label="Nationality"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getNationality}
            variant="outlined"
            onChange={(event) => setNationality(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Religion"
            label="Religion"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getReligion}
            variant="outlined"
            onChange={(event) => setReligion(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Category"
            label="Category"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getCasteCategory}
            variant="outlined"
            onChange={(event) => setCasteCategory(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Caste"
            label="Caste"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getCaste}
            variant="outlined"
            onChange={(event) => setCaste(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="In Which Standard The Pupil Admitted To The School"
            label="In Which Standard The Pupil Admitted To The School"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getAdmittedClass}
            variant="outlined"
            onChange={(event) => setAdmittedClass(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Standard In Which The Pupil Was Studying At The Time Of Leaving The School"
            label="Standard In Which The Pupil Was Studying At The Time Of Leaving The School"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getClassOption}
            variant="outlined"
            onChange={(event) => setClassOption(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Promotion To The Higher  Class"
            label="Promotion To The Higher  Class"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getPromotion}
            variant="outlined"
            onChange={(event) => setPromotion(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="School Board Annual Examination LastTaken With Result"
            label="School Board Annual Examination LastTaken With Result"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getSchoolBoardResult}
            variant="outlined"
            onChange={(event) => setSchoolBoardResult(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Total Number Of Working Days"
            label="Total Number Of Working Days"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getTotalWorkingDays}
            variant="outlined"
            onChange={(event) => setTotalWorkingDays(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Total Number Of School Days Attended"
            label="Total Number Of School Days Attended"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getTotalDaysAttended}
            variant="outlined"
            onChange={(event) => setTotalDaysAttended(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Date Of Application For Certificate"
            label="Date Of Application For Certificate"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getDateOfApplication}
            variant="outlined"
            onChange={(event) => setDateOfApplication(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Date Of Issue Of Certificate"
            label="Date Of Issue Of Certificate"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getDateOfIssueCertificate}
            variant="outlined"
            onChange={(event) => setDateOfIssueCertificate(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Reason For Leaving School"
            label="Reason For Leaving School"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getReasonLeaving}
            variant="outlined"
            onChange={(event) => setReasonLeaving(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Other Remakrks"
            label="Other Remakrks"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getOtherRemark}
            variant="outlined"
            onChange={(event) => setOtherRemark(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Domicile of MP"
            label="Domicile of MP"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getDomicile}
            variant="outlined"
            onChange={(event) => setDomicile(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            placeholder="Admission Date"
            label="Admission Date"
            className={classes.textField}
            margin="dense"
            style={{ marginLeft: -10 }}
            value={getAdmissionDate}
            variant="outlined"
            onChange={(event) => setAdmissionDate(event.target.value)}
            fullWidth
          />
        </Grid>

        <div style={{ marginTop: 30 }} />

          </Grid>

          <Grid item xs={12} align="center">
          <Button
            variant="contained"
            component="span"
            className={classes.button}
            onClick={(event) => HandleSubmitPcm(event)}
          >
            Submit TC
          </Button>
        </Grid>
        </Paper>
        {getResultpcm ? (
          <Pcm
            history={props.history}
            changeView={props.changeView}
            getSubCategoryid2={getSubCategoryid2}
            getSubCategoryid={getSubCategoryid}
            getSubCategoryid1={getSubCategoryid1}
            getSubCategoryid3={getSubCategoryid3}
            session={getSubCategoryidSession}
          />
        ) : null}
        {getResultpcb ? (
          <Pcb
            history={props.history}
            changeView={props.changeView}
            getSubCategoryid2={getSubCategoryid2}
            getSubCategoryid={getSubCategoryid}
            getSubCategoryid1={getSubCategoryid1}
            getSubCategoryid3={getSubCategoryid3}
            session={getSubCategoryidSession}
          />
        ) : null}
        {getResultcommerce ? (
          <Commerce
            history={props.history}
            changeView={props.changeView}
            getSubCategoryid2={getSubCategoryid2}
            getSubCategoryid={getSubCategoryid}
            getSubCategoryid1={getSubCategoryid1}
            getSubCategoryid3={getSubCategoryid3}
            session={getSubCategoryidSession}
          />
        ) : null}
        {getResultprimary ? (
          <Primary
            history={props.history}
            changeView={props.changeView}
            getSubCategoryid2={getSubCategoryid2}
            getSubCategoryid={getSubCategoryid}
            getSubCategoryid1={getSubCategoryid1}
            getSubCategoryid3={getSubCategoryid3}
            session={getSubCategoryidSession}
          />
        ) : null}
        {getResultsecondary ? (
          <Secondary
            history={props.history}
            changeView={props.changeView}
            getSubCategoryid2={getSubCategoryid2}
            getSubCategoryid={getSubCategoryid}
            getSubCategoryid1={getSubCategoryid1}
            getSubCategoryid3={getSubCategoryid3}
            session={getSubCategoryidSession}
          />
        ) : null}
        {getResultsrsecondary ? (
          <SrSecondary
            history={props.history}
            changeView={props.changeView}
            getSubCategoryid2={getSubCategoryid2}
            getSubCategoryid={getSubCategoryid}
            getSubCategoryid1={getSubCategoryid1}
            getSubCategoryid3={getSubCategoryid3}
            session={getSubCategoryidSession}
          />
        ) : null}

        <div style={{ marginBottom: 100 }} />

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
      </div>
  );
}

export default GenrateTc;
