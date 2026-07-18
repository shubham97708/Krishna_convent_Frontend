import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getData, postData } from "../../../../services/FetchServices";
import TextField from "@material-ui/core/TextField";
import BaseUrl from "../../../../services/BaseUrl";
import swal from "sweetalert";
import ShowStudents from "../showStudent/ShowStudents";
import AssignmentIcon from "@material-ui/icons/Assignment";


const axios = require("axios");



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


function UPcm(props) {
    const classes = useStyles();


    const [getId, setId] = React.useState("")     
  const [getPcmPhysicsTheory, setPcmPhysicsTheory] = React.useState("")
  const [getPcmPhysicsPractical, setPcmPhysicsPractical] = React.useState("")
  const [getPcmChemistryTheory, setPcmChemistryTheory] = React.useState("")
  const [getPcmChemistryPractical, setPcmChemistryPractical] = React.useState("")
  const [getPcmMathsTheory, setPcmMathsTheory] = React.useState("")
  const [getPcmMathsPractical, setPcmMathsPractical] = React.useState("")
  const [getPcmHindiTheory, setPcmHindiTheory] = React.useState("")
  const [getPcmHindiPractical, setPcmHindiPractical] = React.useState("")
  const [getPcmEnglishTheory, setPcmEnglishTheory] = React.useState("")
  const [getPcmEnglishPractical, setPcmEnglishPractical] = React.useState("")
  const [getPcmBioTheory, setPcmBioTheory] = React.useState("")
  const [getPcmBioPractical, setPcmBioPractical] = React.useState("")
  const [getOptionalSubject, setOptionalSubject] = React.useState("")

  const hasBio = (getOptionalSubject || "").toLowerCase().includes("bio");

  const onTheoryChange = (setter) => (event) => {
    const val = event.target.value;
    if (val === "" || (Number(val) >= 0 && Number(val) <= 70)) {
      setter(val);
    }
  };

  const onPracticalChange = (setter) => (event) => {
    const val = event.target.value;
    if (val === "" || (Number(val) >= 0 && Number(val) <= 30)) {
      setter(val);
    }
  };



  const readAllRecords =  () => {

    let body={
      id:props.getSubCategoryid2,
      class:props.getSubCategoryid,
      medium:props.getSubCategoryid1,
      examtype:props.getSubCategoryid3,
      stream:props.stream
    }  

    axios.post(`${BaseUrl}/lockpostadd/getStudentPcmMarks`, body)
      .then((res) => {
        // callalert(res, "then");
        console.log("From Drop Down",res.data)

        setId(res.data[0].id)
        setPcmPhysicsPractical(res.data[0].physicsp)
        setPcmPhysicsTheory(res.data[0].physicst)
        setPcmChemistryPractical(res.data[0].chemistryp)
        setPcmChemistryTheory(res.data[0].chemistryt)
        setPcmMathsPractical(res.data[0].mathsp)
        setPcmMathsTheory(res.data[0].mathst)
        setPcmHindiPractical(res.data[0].hindip)
        setPcmHindiTheory(res.data[0].hindit)
        setPcmEnglishPractical(res.data[0].englishp)
        setPcmEnglishTheory(res.data[0].englisht)
        setPcmBioTheory(res.data[0].biot)
        setPcmBioPractical(res.data[0].biop)

      })
      .catch((err) => {
        //callalert(err, "catch");
        console.log("From Drop Down",err)
      });

    axios.post(`${BaseUrl}/lockpostadd/getstudentbyOnlyid`, { id: props.getSubCategoryid2 })
      .then((res) => {
        setOptionalSubject(res.data[0].optionalsubject);
      })
      .catch((err) => {
        console.log("From Drop Down (student optionalsubject)",err)
      });

  };


  useEffect(function () {
     readAllRecords();
   }, []);
 






  const callalert = (data, status) => {
    if (status == "then") {
      if (data.status == 200) {
       
        swal("School", "Student Marks Added Successfully", "success");
        props.changeView(
          <ShowStudents history={props.history} changeView={props.changeView} />
        );
      }
    } else if (status == "catch") {
    
      swal("School", "There Is Error In Server", "error");
      //props.changeView(<PostAddd/>)
    }
  };

  const HandleSubmitPcm = async (event) => {
  
      if (
        getPcmPhysicsTheory != "" &&
        getPcmPhysicsPractical != "" &&
        getPcmChemistryTheory != "" &&
        getPcmChemistryPractical != ""  &&
        getPcmMathsTheory != "" &&
        getPcmMathsPractical != "" &&
        getPcmHindiTheory != "" &&
        getPcmHindiPractical != "" &&
        getPcmEnglishTheory != "" &&
        getPcmEnglishPractical != "" &&
        (!hasBio || (getPcmBioTheory != "" && getPcmBioPractical != ""))
      ) {
          let body={

            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3,

            "id":getId,
            "physicst":getPcmPhysicsTheory,
            "physicsp": getPcmPhysicsPractical,
            "chemistryt": getPcmChemistryTheory,
            "chemistryp": getPcmChemistryPractical,
            "mathst": getPcmMathsTheory,
            "mathsp": getPcmMathsPractical,
            "hindit": getPcmHindiTheory,
            "hindip": getPcmHindiPractical,
            "englisht": getPcmEnglishTheory,
            "englishp": getPcmEnglishPractical,
            "biot": hasBio ? getPcmBioTheory : 0,
            "biop": hasBio ? getPcmBioPractical : 0
          }
                    
        console.log(body)   
          axios.post(`${BaseUrl}/lockpostadd/UpdatePcmMarks`, body)
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


  return (
    <div className={classes.page}>
    <Paper className={classes.sectionCard}>
    <SectionHeader classes={classes} icon={<AssignmentIcon className={classes.sectionIcon} />} title={<>Update PCM Of {props.getSubCategoryid3 } Marks</>} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-dense"
                  placeholder="Physics-Theory"
                  label="Physics-Theory"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  value={getPcmPhysicsTheory}
                  onChange={(event) => setPcmPhysicsTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Physics-Practical"
                  label="Physics-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmPhysicsPractical}
                  variant="outlined"
                  onChange={(event) => setPcmPhysicsPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Chemistry-Theory"
                  label="Chemistry-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmChemistryTheory}
                  variant="outlined"
                  onChange={(event) => setPcmChemistryTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
      
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Chemistry-Practical"
                  label="Chemistry-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmChemistryPractical}
                  variant="outlined"
                  onChange={(event) => setPcmChemistryPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Maths-Theory"
                  label="Maths-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmMathsTheory}
                  variant="outlined"
                  onChange={(event) => setPcmMathsTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Maths-Practical"
                  label="Maths-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmMathsPractical}
                  variant="outlined"
                  onChange={(event) => setPcmMathsPractical(event.target.value)}
                  fullWidth
                />
              </Grid>    
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Hindi-Theory"
                  label="Hindi-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmHindiTheory}
                  variant="outlined"
                  onChange={(event) => setPcmHindiTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Hindi-Practical"
                  label="Hindi-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmHindiPractical}
                  variant="outlined"
                  onChange={(event) => setPcmHindiPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="English-Theory"
                  label="English-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmEnglishTheory}
                  variant="outlined"
                  onChange={(event) => setPcmEnglishTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="English-Practical"
                  label="English-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getPcmEnglishPractical}
                  variant="outlined"
                  onChange={(event) => setPcmEnglishPractical(event.target.value)}

                  fullWidth
                />
              </Grid>

              {hasBio && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Bio-Theory (max 70)"
                    label="Bio-Theory (max 70)"
                    className={classes.textField}
                    margin="dense"
                    value={getPcmBioTheory}
                    variant="outlined"
                    onChange={onTheoryChange(setPcmBioTheory)}
                    fullWidth
                  />
                </Grid>
              )}

              {hasBio && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Bio-Practical (max 30)"
                    label="Bio-Practical (max 30)"
                    className={classes.textField}
                    margin="dense"
                    value={getPcmBioPractical}
                    variant="outlined"
                    onChange={onPracticalChange(setPcmBioPractical)}
                    fullWidth
                  />
                </Grid>
              )}

            </Grid>
            <div style={{ marginTop: 10 }} />
    
            <Grid item xs={12} align="center" style={{ marginTop: 24 }}>
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                onClick={(event) => HandleSubmitPcm(event)}
              >
                Submit PCM
              </Button>
            </Grid>
            </Paper>
    </div>
  )
  }
export default UPcm;