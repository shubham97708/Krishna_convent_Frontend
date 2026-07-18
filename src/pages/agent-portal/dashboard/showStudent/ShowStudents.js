import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getData, postData } from "../../../../services/FetchServices";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { postDataAndImage } from "../../../../services/FetchServices";
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
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { Carousel } from "react-responsive-carousel";
import Rating from "@material-ui/lab/Rating";
//import Activities from "./Activities";
//import PostAddd from "./PostAdd";
import Checkbox from "@material-ui/core/Checkbox";
import Gmap from "../Map/index";
import FileUpload from "../FileUpload";
import Dialog from "@material-ui/core/Dialog";
// import MultipalImages from "../MultipalImages";
//import { ProgressBarContainer } from "./Progressbar/progressbar";
import swal from "sweetalert";
import FormGroup from "@material-ui/core/FormGroup";
import Pagination from "pagination-react-hooks";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PrintIcon from "@material-ui/icons/Print";
import PeopleIcon from "@material-ui/icons/People";
import UpdateTc from '../UpdateTc'
import UpdateCharacterCertificate from '../UpdateCharacterCertificate'

import EditStudent from "./EditStudent"

// import Pcm from "./marks/Pcm"
// import Pcb from "./marks/Pcb"
// import Commerce from "./marks/Commerce"
// import Primary from "./marks/Primary"
// import Secondary from "./marks/Secondary"
// import SrSecondary from "./marks/SrSecondary"

import Primary_Quaterly_Marksheet from "../Marksheet/Primary_Quaterly_Marksheet";

import NumberFormat from "react-number-format";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";


import UPcm from "../marks/UPcm"
import UPcb from "../marks/UPcb"
import UCommerce from "../marks/UCommerce"
import UArts from "../marks/UArts"
import UAgriculture from "../marks/UAgriculture"
import UPrimary from "../marks/UPrimary"
import USecondary from "../marks/USecondary"
import USrSecondary from "../marks/USrSecondary"

import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { Card } from "@material-ui/core";
import BaseUrl from "../../../../services/BaseUrl";
const axios = require("axios");




//import Map from './Map';

const useStyles = makeStyles((theme) => ({
  card:{
    marginTop:"20px",
    borderRadius: 16,
    boxShadow: "0 4px 20px rgba(20, 40, 90, 0.08)",
  },
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


  root: {
    // background:'#fff5cc',
    padding: "20px",
    align: "center",
    //marginLeft:'200px',
    //marginRight:'200px',
    marginTop: "2px",
    width: "100%",
    minHeight: "500px"
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
  photoWrap: {
    width: 140,
    height: 140,
    borderRadius: 14,
    objectFit: "cover",
    border: "3px solid #e3ecfb",
    boxShadow: "0 4px 12px rgba(20, 40, 90, 0.12)",
  },
  studentName: {
    fontWeight: 700,
    color: "#0d1b4c",
    fontSize: "1.25rem",
    marginBottom: 4,
  },
  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 12px",
    borderRadius: 20,
    fontSize: "0.78rem",
    fontWeight: 600,
    backgroundColor: "#e3ecfb",
    color: "#1565c0",
  },
  infoRow: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: 7,
  },
  infoLabel: {
    color: "#90a4ae",
    fontSize: "0.8rem",
    minWidth: 118,
    flexShrink: 0,
  },
  infoValue: {
    color: "#1a2b4c",
    fontSize: "0.92rem",
    fontWeight: 600,
    wordBreak: "break-word",
  },
  examRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
    gap: 10,
  },
  examLabel: {
    minWidth: 90,
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#37474f",
  },
  statusDone: {
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 12px",
    borderRadius: 20,
    fontSize: "0.75rem",
    fontWeight: 700,
    backgroundColor: "#e3f6e8",
    color: "#1e8e3e",
  },
  statusPending: {
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 12px",
    borderRadius: 20,
    fontSize: "0.75rem",
    fontWeight: 700,
    backgroundColor: "#fdeaea",
    color: "#c62828",
  },
  addressBlock: {
    marginTop: 12,
    padding: "10px 14px",
    borderRadius: 10,
    backgroundColor: "#f4f6fa",
    fontSize: "0.88rem",
    color: "#37474f",
  },
  cardDivider: {
    margin: "16px 0 14px",
    border: "none",
    borderTop: "1px solid #e3ecfb",
  },
  editBtn: {
    color: "#1565c0",
    borderColor: "#1565c0",
    borderRadius: 8,
    textTransform: "none",
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 6,
  },
  deleteBtn: {
    color: "#c62828",
    borderColor: "#c62828",
    borderRadius: 8,
    textTransform: "none",
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 6,
  },
  viewBtn: {
    color: "#1e8e3e",
    borderColor: "#1e8e3e",
    borderRadius: 8,
    textTransform: "none",
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 6,
  },
  examActionBtn: {
    color: "#1565c0",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "0.78rem",
    padding: "2px 8px",
    minWidth: "auto",
  },
}));

function InfoRow({ classes, label, value }) {
  return (
    <div className={classes.infoRow}>
      <span className={classes.infoLabel}>{label}</span>
      <span className={classes.infoValue}>{value}</span>
    </div>
  );
}

function SectionHeader({ classes, icon, title }) {
  return (
    <div className={classes.sectionHeader}>
      {icon}
      <Typography className={classes.sectionTitle}>{title}</Typography>
    </div>
  );
}

function ShowStudents(props) {
  const classes = useStyles();


  const [getResultpcm, setResultpcm] = React.useState(false)
  const [getResultpcb, setResultpcb] = React.useState(false)
  const [getResultcommerce, setResultcommerce] = React.useState(false)
  const [getResultprimary, setResultprimary] = React.useState(false)
  const [getResultsecondary, setResultsecondary] = React.useState(false)
  const [getResultsrsecondary, setResultsrsecondary] = React.useState(false)
  const [getStudentSubject, setStudentSubject] = React.useState("")


  //PCM State
  const [getSubCategorySession, setSubCategorySession] = React.useState("");
  const [getSubCategoryid, setSubCategoryid] = React.useState("");
  const [getSubCategory2, setSubCategory2] = React.useState("");
  const [getSubCategory1, setSubCategory1] = React.useState("");
  const [getSubCategory3, setSubCategory3] = React.useState("");
  const [getsingleimage, setsingleimage] = React.useState({ icon: "", file: "" });
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
  const [getDataList, setDataList] = React.useState([]);

  const [getSearchText, setSearchText] = React.useState("");
  const [getGenderFilter, setGenderFilter] = React.useState("");
  const [getTcCcFilter, setTcCcFilter] = React.useState("");
  const [getMarksFilter, setMarksFilter] = React.useState("");

  const genderFilterOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const tcCcFilterOptions = [
    { value: "tc_not_generated", label: "TC Not Generated" },
    { value: "tc_generated", label: "TC Generated" },
    { value: "cc_not_generated", label: "CC Not Generated" },
    { value: "cc_generated", label: "CC Generated" },
  ];

  const marksFilterOptions = [
    { value: "quarterly_pending", label: "Quarterly Pending" },
    { value: "halfyearly_pending", label: "Halfyearly Pending" },
    { value: "annually_pending", label: "Annually Pending" },
    { value: "any_pending", label: "Any Exam Pending" },
  ];

  const getFilteredDataList = () => {
    if (getDataList == "" || !Array.isArray(getDataList)) return [];
    return getDataList.filter((item) => {
      if (getSearchText) {
        const q = getSearchText.toLowerCase();
        const matches =
          (item.name && String(item.name).toLowerCase().includes(q)) ||
          (item.rollno && String(item.rollno).toLowerCase().includes(q)) ||
          (item.admissionno && String(item.admissionno).toLowerCase().includes(q));
        if (!matches) return false;
      }
      if (getGenderFilter && item.gender !== getGenderFilter) return false;
      if (getTcCcFilter === "tc_not_generated" && item.tc) return false;
      if (getTcCcFilter === "tc_generated" && !item.tc) return false;
      if (getTcCcFilter === "cc_not_generated" && item.charactercertificate) return false;
      if (getTcCcFilter === "cc_generated" && !item.charactercertificate) return false;
      if (getMarksFilter === "quarterly_pending" && item.quarterly) return false;
      if (getMarksFilter === "halfyearly_pending" && item.halfyearly) return false;
      if (getMarksFilter === "annually_pending" && item.annually) return false;
      if (getMarksFilter === "any_pending" && item.quarterly && item.halfyearly && item.annually) return false;
      return true;
    });
  };

  const [getTrue, setTrue] = useState(false);
  const [getSubCategoryidSession, setSubCategoryidSession] = React.useState("");
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
    }, {
      value: "3",
      label: "3",
    }, {
      value: "4",
      label: "4",
    }, {
      value: "5",
      label: "5",
    }, {
      value: "6",
      label: "6",
    }, {
      value: "7",
      label: "7",
    }, {
      value: "8",
      label: "8",
    }, {
      value: "9",
      label: "9",
    }, {
      value: "10",
      label: "10",
    }, {
      value: "11",
      label: "11",
    }, {
      value: "12",
      label: "12",
    }
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
    }
  ]);

  const [getSCList3, setSCList3] = React.useState([
    {
      value: "a",
      label: "b",
    }
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
    {
      value: "agriculture",
      label: "Agriculture",
    }

  ]);






  const [getagentid, setagentid] = React.useState("");
  const [gif, setgif] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  //////////////////////////////////////////////////////

  const handleClickClose = async () => {
    setOpen(false);
  };

  const handleClick = (view) => {
    props.changeView(view);
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
          // <Activities history={props.history} changeView={props.changeView} />
        );
      }
    } else if (status == "catch") {
      setOpen(false);
      swal("Hotel", "There Is Error In Server", "error");
      //props.changeView(<PostAddd/>)
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
      //Put Your Code Here


      let body = {
        session: getSubCategoryidSession,
        class: event.value
      }


      axios.post(`${BaseUrl}/lockpostadd/getstudentbyOnlyclass`, body)
        .then((res) => {
          // callalert(res, "then");
          console.log("From Drop Down", res.data)
          setDataList(res.data)
          // setSCList2(res.data)
        })
        .catch((err) => {
          //callalert(err, "catch");
          console.log("From Drop Down", err)
        });




      // End




      if (event.value == 11 || event.value == 12) {
        setSubject(false)

      } else {
        setSubject(true)
      }

      console.log(event);
    } catch (e) {
      setSubCategoryid("");
    }
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

  const deleteDataPost = async (body,name) => {
    let result = await postData("postadd/deleteStudent", body);
    if (result) {
      swal("Student", name+" Deleted Successfully", "success");
      setuserdata();
    } else {
      //setMessage("Error al eliminar publicación")
      swal("Student", "There Is An Error To Delete Student", "error");
      setuserdata();
    }
  };


  const handleSubmitDelete = async (id ,name) => {
    var body = { id: id };
    swal({
      title: "Student",
      text: "Are You Sure Want To Delete "+name+" !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteDataPost(body,name);
      } else {
        swal(name+" Is Safe!");
      }
    });

    setuserdata();
    setTrue(true);
  };

////////////////// TC




const handleEditTc = (id) => {
  let body = {
    Studentid: id,
  };
  console.log("DaTa For Print", body)


    axios.post(`${BaseUrl}/lockpostadd/GetTCForUpdate`, body)
      .then((res) => {

        console.log("From Drop Down", res)
      //  props.history.push({ pathname: '/PriTC', 'res': res.data[0] })

        props.changeView(<UpdateTc 
          history={props.history} 
          changeView={props.changeView} 
          res={res}
          
          />);

      })
      .catch((err) => {

        console.log("From Drop Down", err)
      });

  }


  const handleSubmitTc = (id, Sclass, medium, examtype, stream, examtype_table_id) => {
    let body = {
      Studentid: id,
    };
    console.log("DaTa For Print", body)


    if (Sclass == "nur" || Sclass == "lkg" || Sclass == "ukg" || Sclass == "1" || Sclass == "2" || Sclass == "3" || Sclass == "4" || Sclass == "5") {

      axios.post(`${BaseUrl}/lockpostadd/GetStudentOrTC`, body)
        .then((res) => {

          console.log("From Drop Down", res)
          props.history.push({ pathname: '/PriTC', 'res': res.data[0] })

        })
        .catch((err) => {

          console.log("From Drop Down", err)
        });


    } if (Sclass == "6" || Sclass == "7" || Sclass == "8") {

      axios.post(`${BaseUrl}/lockpostadd/GetStudentOrTC`, body)
        .then((res) => {
          console.log("From Drop Down", res)

          props.history.push({ pathname: '/SecondaryTC', 'res': res.data[0] })

        })
        .catch((err) => {
          console.log("From Drop Down", err)
        });


    } if (Sclass == "9" || Sclass == "10") {

      axios.post(`${BaseUrl}/lockpostadd/GetStudentOrTC`, body)
        .then((res) => {
          console.log("From Drop Down", res)
          props.history.push({ pathname: '/SrSecondaryTC', 'res': res.data[0] })
        })
        .catch((err) => {
          console.log("From Drop Down", err)
        });

    } if (Sclass == "11" || Sclass == "12") {

      if (stream == "pcb") {
        axios.post(`${BaseUrl}/lockpostadd/GetStudentOrTC`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({ pathname: '/PcbTC', 'res': res.data[0] })
          })
          .catch((err) => {
            console.log("From Drop Down", err)
          });
      } if (stream == "pcm") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentOrTC`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({ pathname: '/PcmTC', 'res': res.data[0] })
          })
          .catch((err) => {
            console.log("From Drop Down", err)
          });
      } if (stream == "commerce") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentOrTC`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({ pathname: '/CommerceTC', 'res': res.data[0] })
          })
          .catch((err) => {
            console.log("From Drop Down", err)
          });
      }
    }
  }

const handleEditCharacterCertificate = (id) => {
  let body = {
    Studentid: id,
  };

    axios.post(`${BaseUrl}/lockpostadd/GetCharacterCertificateForUpdate`, body)
      .then((res) => {

        props.changeView(<UpdateCharacterCertificate
          history={props.history}
          changeView={props.changeView}
          res={res}

          />);

      })
      .catch((err) => {

        console.log("From Drop Down", err)
      });

  }


  const handleSubmitCharacterCertificate = (id) => {
    let body = {
      Studentid: id,
    };

    axios.post(`${BaseUrl}/lockpostadd/GetStudentOrCharacterCertificate`, body)
      .then((res) => {
        props.history.push({ pathname: '/CharacterCertificate', 'res': res.data[0] })
      })
      .catch((err) => {
        console.log("From Drop Down", err)
      });
  }

/////////////////////////////////////////////////////////////

  const handleSubmitPrint = (id, Sclass, medium, examtype, stream, examtype_table_id) => {
    let body = {
      Studentid: id,
      StudentClass: Sclass,
      StudentMedium: medium,
      StudentExamtype: examtype,
      StudentStream: stream,
      StudentExamTypeTableId: examtype_table_id
    };
    console.log("DaTa For Print", body)


    if (Sclass == "nur" || Sclass == "lkg" || Sclass == "ukg" || Sclass == "1" || Sclass == "2" || Sclass == "3" || Sclass == "4" || Sclass == "5") {

      axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintPrimary`, body)
        .then((res) => {

          console.log("From Drop Down", res)
          props.history.push({pathname:'/PriMarksheet','res':res.data[0]})

        })
        .catch((err) => {

          console.log("From Drop Down", err)
        });
    } if (Sclass == "6" || Sclass == "7" || Sclass == "8") {

      axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintSeconday`, body)
        .then((res) => {
          console.log("From Drop Down", res)

 props.history.push({pathname:'/SecondaryMarksheet','res':res.data[0]})

        })
        .catch((err) => {

          console.log("From Drop Down", err)
        });
    } if (Sclass == "9" || Sclass == "10") {

      axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintSrSeconday`, body)
        .then((res) => {
          console.log("From Drop Down", res)

 props.history.push({pathname:'/SrSecondaryMarksheet','res':res.data[0]})
        })
        .catch((err) => {

          console.log("From Drop Down", err)
        });
    } if (Sclass == "11" || Sclass == "12") {
      if (stream == "pcb") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintPCB`, body)
          .then((res) => {
            console.log("From Drop Down", res)
           props.history.push({pathname:'/PcbMarksheet','res':res.data[0]})
          })
          .catch((err) => {

            console.log("From Drop Down", err)
          });
      } if (stream == "pcm") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintPCM`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({pathname:'/PcmMarksheet','res':res.data[0]})
          })
          .catch((err) => {

            console.log("From Drop Down", err)
          });
      } if (stream == "commerce") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintCommerce`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({pathname:'/CommerceMarksheet','res':res.data[0]})
          })
          .catch((err) => {

            console.log("From Drop Down", err)
          });

      } if (stream == "arts") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintArts`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({pathname:'/ArtsMarksheet','res':res.data[0]})
          })
          .catch((err) => {

            console.log("From Drop Down", err)
          });

      } if (stream == "agriculture") {

        axios.post(`${BaseUrl}/lockpostadd/GetStudentForPrintArts`, body)
          .then((res) => {
            console.log("From Drop Down", res)
            props.history.push({pathname:'/AgricultureMarksheet','res':res.data[0]})
          })
          .catch((err) => {

            console.log("From Drop Down", err)
          });

      }
    }

  }



  const handleSubmitEdit = async (id ,Sclass , medium , examtype ,stream ) => {
    let body = { 
      Studentid: id,
      StudentClass:Sclass,
      StudentMedium:medium,
      StudentExamtype:examtype,
      StudentStream:stream
    };


if(Sclass == "nur" ||Sclass == "lkg" || Sclass == "ukg" || Sclass == "1" || Sclass == "2" || Sclass == "3" || Sclass == "4" || Sclass == "5" ){

  props.changeView(<UPrimary 
    history={props.history} 
    changeView={props.changeView} 
    getSubCategoryid2={id}  
    getSubCategoryid={Sclass}  
    getSubCategoryid1={medium} 
    getSubCategoryid3={examtype} 
    stream={stream}
    />);
   // alert(Sclass)
}if(Sclass == "6" || Sclass == "7" ||Sclass == "8" ){

  props.changeView(<USecondary 
    history={props.history} 
    changeView={props.changeView} 
    getSubCategoryid2={id}  
    getSubCategoryid={Sclass}  
    getSubCategoryid1={medium} 
    getSubCategoryid3={examtype} 
    stream={stream}
    />);
  //  alert(Sclass)
}if(Sclass == "9" || Sclass == "10"){

  props.changeView(<USrSecondary 
    history={props.history} 
    changeView={props.changeView} 
    getSubCategoryid2={id}  
    getSubCategoryid={Sclass}  
    getSubCategoryid1={medium} 
    getSubCategoryid3={examtype} 
    stream={stream}
    />);
  //  alert(Sclass)
}if(Sclass == "11" || Sclass == "12"){
  if(stream == "pcb" ){

    props.changeView(<UPcb 
      history={props.history} 
      changeView={props.changeView} 
      getSubCategoryid2={id}  
      getSubCategoryid={Sclass}  
      getSubCategoryid1={medium} 
      getSubCategoryid3={examtype} 
      stream={stream}
      />);
    //  alert(Sclass)
  }if(stream == "pcm"){

    props.changeView(<UPcm 
      history={props.history} 
      changeView={props.changeView} 
      getSubCategoryid2={id}  
      getSubCategoryid={Sclass}  
      getSubCategoryid1={medium} 
      getSubCategoryid3={examtype} 
      stream={stream}
      />);
     // alert(Sclass)
  }if(stream == "commerce"){


    props.changeView(<UCommerce
      history={props.history}
      changeView={props.changeView}
      getSubCategoryid2={id}
      getSubCategoryid={Sclass}
      getSubCategoryid1={medium}
      getSubCategoryid3={examtype}
      stream={stream}
      />);
    //  alert(Sclass)
  }if(stream == "arts"){


    props.changeView(<UArts
      history={props.history}
      changeView={props.changeView}
      getSubCategoryid2={id}
      getSubCategoryid={Sclass}
      getSubCategoryid1={medium}
      getSubCategoryid3={examtype}
      stream={stream}
      />);
  }if(stream == "agriculture"){


    props.changeView(<UAgriculture
      history={props.history}
      changeView={props.changeView}
      getSubCategoryid2={id}
      getSubCategoryid={Sclass}
      getSubCategoryid1={medium}
      getSubCategoryid3={examtype}
      stream={stream}
      />);
  }
}


 

  

  };







  const show = (item) => (
    <Card className={classes.card} style={item.tc ? {  "background-color": "#FFB6C1"} :{  "background-color": "#FFFFFF"}}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Grid
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
              }}
            >
              <img
                src={`${BaseUrl}/images/${item.photo}`}
                className={classes.photoWrap}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Typography className={classes.studentName}>{item.name}</Typography>
            <div className={classes.chipRow}>
              <span className={classes.chip}>Roll {item.rollno}</span>
              <span className={classes.chip}>Class {item.class}</span>
              <span className={classes.chip}>{item.subject}</span>
              {item.optionalsubject ? (
                <span className={classes.chip}>{item.optionalsubject}</span>
              ) : null}
            </div>

            <InfoRow classes={classes} label="Father" value={item.fathername} />
            <InfoRow classes={classes} label="Mother" value={item.mothername} />
            <InfoRow classes={classes} label="DOB" value={item.dob} />
            <InfoRow classes={classes} label="Mobile No." value={item.mobileno} />
          </Grid>

          <Grid item xs={12} sm={5}>
            <InfoRow classes={classes} label="Medium" value={item.medium} />
            <InfoRow classes={classes} label="Adhar No." value={item.adharno} />
            <InfoRow classes={classes} label="SSSM-ID No." value={item.sssmidno} />
            <InfoRow classes={classes} label="Enrollment No." value={item.enrollment} />
            <InfoRow classes={classes} label="Admission No." value={item.admissionno} />

            <div style={{ marginTop: 10 }}>
            <div className={classes.examRow}>
              <span className={classes.examLabel}>Quarterly</span>
              {item.quarterly ? (
                <>
                  <span className={classes.statusDone}>✓ Done</span>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<EditIcon fontSize="small" />}
                    onClick={() => handleSubmitEdit(item.id ,item.class,item.medium,"quarterly",item.subject)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<PrintIcon fontSize="small" />}
                    onClick={() => handleSubmitPrint(item.id ,item.class,item.medium,"quarterly",item.subject,item.quarterly_id)}
                  >
                    Print
                  </Button>
                </>
              ) : (
                <span className={classes.statusPending}>Pending</span>
              )}
            </div>

            <div className={classes.examRow}>
              <span className={classes.examLabel}>Halfyearly</span>
              {item.halfyearly ? (
                <>
                  <span className={classes.statusDone}>✓ Done</span>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<EditIcon fontSize="small" />}
                    onClick={() => handleSubmitEdit(item.id ,item.class,item.medium,"halfyearly",item.subject)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<PrintIcon fontSize="small" />}
                    onClick={() => handleSubmitPrint(item.id ,item.class,item.medium,"halfyearly",item.subject,item.halfyearly_id)}
                  >
                    Print
                  </Button>
                </>
              ) : (
                <span className={classes.statusPending}>Pending</span>
              )}
            </div>

            <div className={classes.examRow}>
              <span className={classes.examLabel}>Annually</span>
              {item.annually ? (
                <>
                  <span className={classes.statusDone}>✓ Done</span>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<EditIcon fontSize="small" />}
                    onClick={() => handleSubmitEdit(item.id ,item.class,item.medium,"annually",item.subject)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<PrintIcon fontSize="small" />}
                    onClick={() => handleSubmitPrint(item.id ,item.class,item.medium,"annually",item.subject,item.annually_id)}
                  >
                    Print
                  </Button>
                </>
              ) : (
                <span className={classes.statusPending}>Pending</span>
              )}
            </div>

            <div className={classes.examRow}>
              <span className={classes.examLabel}>TC</span>
              {item.tc ? (
                <>
                  <span className={classes.statusDone}>✓ Done</span>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<EditIcon fontSize="small" />}
                    onClick={() => handleEditTc(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<PrintIcon fontSize="small" />}
                    onClick={() => handleSubmitTc(item.id ,item.class,item.medium,"annually",item.subject,item.annually_id)}
                  >
                    Print
                  </Button>
                </>
              ) : (
                <span className={classes.statusPending}>Not Generated</span>
              )}
            </div>

            <div className={classes.examRow}>
              <span className={classes.examLabel}>Character Certificate</span>
              {item.charactercertificate ? (
                <>
                  <span className={classes.statusDone}>✓ Done</span>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<EditIcon fontSize="small" />}
                    onClick={() => handleEditCharacterCertificate(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.examActionBtn}
                    startIcon={<PrintIcon fontSize="small" />}
                    onClick={() => handleSubmitCharacterCertificate(item.id)}
                  >
                    Print
                  </Button>
                </>
              ) : (
                <span className={classes.statusPending}>Not Generated</span>
              )}
            </div>

            </div>
          </Grid>
        </Grid>

        <div className={classes.addressBlock}>
          Address : <b>{item.address}</b>
        </div>

        <hr className={classes.cardDivider} />

        <Grid container xs={12} style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            className={classes.editBtn}
            startIcon={<EditIcon />}
            onClick={() =>
              handleClick(
                <EditStudent
                  history={props.history}
                  changeView={props.changeView}
                  Studentid={item.id}
                />
              )
            }
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
            onClick={() => handleSubmitDelete(item.id ,item.name)}
          >
            Delete
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );



  const onSubCategoryChange2 = (event) => {
    setSubCategory2(event);
    try {
      setSubCategoryid2(event.value);

      let body = {
        subject: event.value,
        session :getSubCategoryidSession,
        class : getSubCategoryid,
        medium :getSubCategoryid1
      }
      axios.post(`${BaseUrl}/lockpostadd/getstudentbyclassorMediumorstream`, body)
        .then((res) => {
          // callalert(res, "then");
          console.log("For Exam", res.data)

          setDataList(res.data)


          // let arr = []
          // let obj1 = {}
          // let obj2 = {}
          // let obj3 = {}

          // if (res.data[0].quarterly == 0) {
          //   obj1 =
          //   {
          //     value: "quarterly",
          //     label: "Quarterly",
          //   }
          // } if (res.data[0].halfyearly == 0) {
          //   obj2 =
          //   {
          //     value: "halfyearly",
          //     label: "Halfyearly",
          //   }
          // } if (res.data[0].annually == 0) {
          //   obj3 =
          //   {
          //     value: "annually",
          //     label: "Annually",
          //   }
          // }
          // arr.push(obj1, obj2, obj3);

          // const results = arr.filter(element => {
          //   if (Object.keys(element).length !== 0) {
          //     return true;
          //   }
          //   return false;
          // });
          // console.log("Array Exam Data", res.data[0].subject)
        //  setSCList3(results)
         // setStudentSubject(res.data[0].subject)



        })
        .catch((err) => {
          //callalert(err, "catch");  
          console.log("From Drop Down", err)
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

      if (getSubCategoryid == "nur" || getSubCategoryid == "lkg" || getSubCategoryid == "ukg" || getSubCategoryid == "1" || getSubCategoryid == "2" || getSubCategoryid == "3" || getSubCategoryid == "4" || getSubCategoryid == "5") {
        setResultprimary(true)
        setResultpcm(false)
        setResultpcb(false)
        setResultcommerce(false)
        setResultsecondary(false)
        setResultsrsecondary(false)
      }

      else if (getSubCategoryid == "6" || getSubCategoryid == "7" || getSubCategoryid == "8") {
        setResultprimary(false)
        setResultpcm(false)
        setResultpcb(false)
        setResultcommerce(false)
        setResultsecondary(true)
        setResultsrsecondary(false)
      }

      else if (getSubCategoryid == "9" || getSubCategoryid == "10") {
        setResultprimary(false)
        setResultpcm(false)
        setResultpcb(false)
        setResultcommerce(false)
        setResultsecondary(false)
        setResultsrsecondary(true)
      }
      else if (getStudentSubject == "pcb") {
        setResultprimary(false)
        setResultpcm(false)
        setResultpcb(true)
        setResultcommerce(false)
        setResultsecondary(false)
        setResultsrsecondary(false)
      }

      else if (getStudentSubject == "commerce") {
        setResultprimary(false)
        setResultpcm(false)
        setResultpcb(false)
        setResultcommerce(true)
        setResultsecondary(false)
        setResultsrsecondary(false)
      }

      else if (getStudentSubject == "pcm") {
        setResultprimary(false)
        setResultpcm(true)
        setResultpcb(false)
        setResultcommerce(false)
        setResultsecondary(false)
        setResultsrsecondary(false)
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
        medium: event.value
      }
      axios.post(`${BaseUrl}/lockpostadd/getstudentbyclassorMedium`, body)
        .then((res) => {
          // callalert(res, "then");
          console.log("From Drop Down", res.data)

          setDataList(res.data)
         // setSCList2(res.data)
        })
        .catch((err) => {
          //callalert(err, "catch");
          console.log("From Drop Down", err)
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












  return (
      <div className={classes.page}>

        <Paper className={classes.sectionCard}>
          <SectionHeader classes={classes} icon={<PeopleIcon className={classes.sectionIcon} />} title="Filter Students" />

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
              <InputLabel shrink>Stream</InputLabel>
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

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Search (Name / Roll / Admission No.)</InputLabel>
              <TextField
                variant="outlined"
                margin="dense"
                placeholder="Type to search..."
                value={getSearchText}
                onChange={(e) => setSearchText(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Gender</InputLabel>
              <Select
                value={genderFilterOptions.find((o) => o.value === getGenderFilter) || null}
                name="GenderFilter"
                options={genderFilterOptions}
                onChange={(e) => setGenderFilter(e ? e.value : "")}
                className="basic-multi-select"
                classNamePrefix="Sub-Category"
                isClearable={true}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>TC / Character Certificate</InputLabel>
              <Select
                value={tcCcFilterOptions.find((o) => o.value === getTcCcFilter) || null}
                name="TcCcFilter"
                options={tcCcFilterOptions}
                onChange={(e) => setTcCcFilter(e ? e.value : "")}
                className="basic-multi-select"
                classNamePrefix="Sub-Category"
                isClearable={true}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <InputLabel shrink>Exam Marks Status</InputLabel>
              <Select
                value={marksFilterOptions.find((o) => o.value === getMarksFilter) || null}
                name="MarksFilter"
                options={marksFilterOptions}
                onChange={(e) => setMarksFilter(e ? e.value : "")}
                className="basic-multi-select"
                classNamePrefix="Sub-Category"
                isClearable={true}
              />
            </Grid>
          </Grid>
        </Paper>

        {getDataList == "" ? (
          <center>
            <img src="/images/nodata.jpg" />
          </center>
        ) : getFilteredDataList().length === 0 ? (
          <Paper className={classes.sectionCard} style={{ textAlign: "center", color: "#78909c" }}>
            No students match the selected filters.
          </Paper>
        ) : (
          <Pagination
            data={getFilteredDataList()}
            Show={show}
            displayNumber="15"
            previousText="Prev"
            nextText="Next"
          />
        )}

        {/* { getResultpcm ? <Pcm history={props.history} changeView={props.changeView} getSubCategoryid2={getSubCategoryid2}  getSubCategoryid={getSubCategoryid}  getSubCategoryid1={getSubCategoryid1} getSubCategoryid3={getSubCategoryid3} /> : null }
  { getResultpcb ? <Pcb  history={props.history} changeView={props.changeView} getSubCategoryid2={getSubCategoryid2}  getSubCategoryid={getSubCategoryid}  getSubCategoryid1={getSubCategoryid1} getSubCategoryid3={getSubCategoryid3} /> : null }
  { getResultcommerce ? <Commerce history={props.history} changeView={props.changeView} getSubCategoryid2={getSubCategoryid2}  getSubCategoryid={getSubCategoryid}  getSubCategoryid1={getSubCategoryid1} getSubCategoryid3={getSubCategoryid3} /> : null }
  { getResultprimary ? <Primary history={props.history} changeView={props.changeView} getSubCategoryid2={getSubCategoryid2}  getSubCategoryid={getSubCategoryid}  getSubCategoryid1={getSubCategoryid1} getSubCategoryid3={getSubCategoryid3} /> : null }
  { getResultsecondary ? <Secondary history={props.history} changeView={props.changeView} getSubCategoryid2={getSubCategoryid2}  getSubCategoryid={getSubCategoryid}  getSubCategoryid1={getSubCategoryid1} getSubCategoryid3={getSubCategoryid3} /> : null }
  { getResultsrsecondary ? <SrSecondary history={props.history} changeView={props.changeView} getSubCategoryid2={getSubCategoryid2}  getSubCategoryid={getSubCategoryid}  getSubCategoryid1={getSubCategoryid1} getSubCategoryid3={getSubCategoryid3} /> : null } */}











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











export default ShowStudents;
