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

import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PrintIcon from "@material-ui/icons/Print";
import UpdateTc from '../UpdateTc'

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
    marginTop:"20px"
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
}));

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
  }
}


 

  

  };







  const show = (item) => (
    <Card className={classes.card} style={item.tc ? {  "background-color": "#FFB6C1"} :{  "background-color": "#FFFFFF"}}>
      <CardContent>
        <Grid container >
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
                style={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>



          <Grid item xs={12} sm={5} >


            <Typography
              variant="h7"
              component="h5"
            >
              Roll No. :
              <b style={{ color: "#2BB573" }}>{item.rollno}</b>
            </Typography>


            <Typography

              variant="h7"
              component="h5"

            >
              Class :
              <b style={{ color: "#2BB573" }}> {item.class}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              Stream :
              <b style={{ color: "#2BB573" }}> {item.subject}</b>
            </Typography>

            {item.optionalsubject ? (
              <Typography
                variant="h7"
                component="h5"
              >
                Optional Subject :
                <b style={{ color: "#2BB573" }}> {item.optionalsubject}</b>
              </Typography>
            ) : null}


            <Typography
              variant="h7"
              component="h5"
            >
              Name :
              <b style={{ color: "#2BB573", flexWrap: "wrap" }}>{item.name}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              Father :
              <b style={{ color: "#2BB573", flexWrap: "wrap" }}>{item.fathername}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              Mother :
              <b style={{ color: "#2BB573", flexWrap: "wrap" }}> {item.mothername}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              DOB :
              <b style={{ color: "#2BB573" }}> {item.dob}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              Mobile No. :
              <b style={{ color: "#2BB573" }}>{item.mobileno}</b>
            </Typography>
          </Grid>




          <Grid item xs={12} sm={5} >


          <Typography
              variant="h7"
              component="h5"
            >
              Medium :
              <b style={{ color: "#2BB573" }}>{item.medium}</b>
            </Typography>


            <Typography
              variant="h7"
              component="h5"
            >
              Adhar No. :
              <b style={{ color: "#2BB573" }}>{item.adharno}</b>
            </Typography>


            <Typography
              variant="h7"
              component="h5"
            >
              SSSM-ID No. :
              <b style={{ color: "#2BB573" }}> {item.sssmidno}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              Enrollment No. :
              <b style={{ color: "#2BB573" }}> {item.enrollment}</b>
            </Typography>

            <Typography

              variant="h7"
              component="h5"

            >
              Admissionno :
              <b style={{ color: "#2BB573" }}> {item.admissionno}</b>
            </Typography>



            

          
             

              <div style={{ whiteSpace: "nowrap" ,display: "flex" }}>
              <div  style={{ display: "inline", whiteSpace: "nowrap" }}>
                <Typography variant="h7" component="h5" > 
                Quarterly : 
                </Typography>
              </div>
              <div id="image" style={{ display: "inline" }}>
                {item.quarterly ? ( 
                
                <div   style={{  whiteSpace: "nowrap" ,display: "flex" }} >
                  <img src="./images/right.png" />                
                <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<EditIcon />}
            onClick={() => handleSubmitEdit(item.id ,item.class,item.medium,"quarterly",item.subject)}
          >
            Edit
          </Button>
          <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<PrintIcon />}
            onClick={() => handleSubmitPrint(item.id ,item.class,item.medium,"quarterly",item.subject,item.quarterly_id)}
          >
            Print
          </Button>
          </div>
                
                
                )  :( <img  src="./images/wrong.png" /> )}
             </div>
             </div>




             <div style={{ whiteSpace: "nowrap" ,display: "flex" }}>
              <div  style={{ display: "inline", whiteSpace: "nowrap" }}>
                <Typography variant="h7" component="h5" > 
                Halfyearly : 
                </Typography>
              </div>
              <div id="image" style={{ display: "inline" }}>
                {item.halfyearly ? (    <div   style={{  whiteSpace: "nowrap" ,display: "flex" }} >
                  <img src="./images/right.png" />                
                <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<EditIcon />}
            onClick={() => handleSubmitEdit(item.id ,item.class,item.medium,"halfyearly",item.subject)}
          >
            Edit
          </Button>
          <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<PrintIcon />}
            onClick={() => handleSubmitPrint(item.id ,item.class,item.medium,"halfyearly",item.subject,item.halfyearly_id)}
          >
            Print
          </Button>
          </div>
             ):( <img  src="./images/wrong.png" /> )}
             </div>
             </div>
              
            


              <div style={{ whiteSpace: "nowrap" ,display: "flex" }}>
              <div  style={{ display: "inline", whiteSpace: "nowrap" }}>
                <Typography variant="h7" component="h5" > 
                Annually : 
                </Typography>
              </div>
              <div id="image" style={{ display: "inline" }}>
                {item.annually ? (    <div   style={{  whiteSpace: "nowrap" ,display: "flex" }} >
                  <img src="./images/right.png" />                
                <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<EditIcon />}
            onClick={() => handleSubmitEdit(item.id ,item.class,item.medium,"annually",item.subject)}
          >
            Edit
          </Button>

          <Button
            color="Default"
            className={classes.buttonred}
            startIcon={<PrintIcon />}
            onClick={() => handleSubmitPrint(item.id ,item.class,item.medium,"annually",item.subject,item.annually_id)}
          >
            Print
          </Button>
          </div>
               ) :( <img  src="./images/wrong.png" /> )}
             </div>
            
             </div>




          </Grid>
        </Grid>




        <Typography
          className={classes.text}
          variant="h7"
          component="h5"
          color="textSecondary"
        >
          Address :
          <b style={{ color: "#000000" }}> {item.address}</b>
        </Typography>



        <hr style={{ color: "black" }} />

        <Grid container xs={12} style={{ justifyContent: "center" }}>
          <Button
            color="Default"
            className={classes.button1}
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
            color="Default"
            className={classes.buttonred}
            startIcon={<DeleteIcon />}
            onClick={() => handleSubmitDelete(item.id ,item.name)}
          >
            Delete
          </Button>
          {item.tc ? (<Button
            color="Primary"
            className={classes.soldbutton}
            startIcon={<VisibilityIcon />}
          onClick={() =>
            handleSubmitTc(item.id ,item.class,item.medium,"annually",item.subject,item.annually_id)
          }
          >View</Button>) :(<Button
            color="Primary"
            className={classes.soldbutton}
            startIcon={<VisibilityIcon />}
          onClick={() =>
            alert("Tc Not Genrated")
          }
          >View</Button>)}





{item.tc ? (<Button
            color="Primary"
            className={classes.soldbutton}
            startIcon={<VisibilityIcon />}
          onClick={() =>
            handleEditTc(item.id)
          }
          >Edit TC</Button>) :(<></>)}
        
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
    <Container style={{ paddingLeft: 5, paddingRight: 5, maxWidth: "100%", }}>
      <Paper className={classes.root}>



        <React.Fragment>
          <Grid container xs={12} spacing={1} style={{ paddingLeft: 0, paddingRight: 0 }}>



          <Grid item xs={3}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={{ color: "blue" }}
              >
            <h2>Select Session</h2>
          </Typography>
          
         
              
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
          






            <Grid item xs={3}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={{ color: "blue" }}
              >
                <h2>Select Class</h2>
              </Typography>
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




            <Grid item xs={3}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={{ color: "blue" }} >
                <h2>Select Medium</h2>
              </Typography>
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


            <Grid item xs={3}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={{ color: "blue" }}
              >
                <h2>Select Stream</h2>
              </Typography>

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





        {getDataList == "" ? (
          <center>
            <img src="/images/nodata.jpg" />
          </center>
        ) : (
          <Pagination
            data={getDataList}
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
      </Paper>
    </Container>
  );
}











export default ShowStudents;
