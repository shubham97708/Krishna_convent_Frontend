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

function Pcb(props) {
    const classes = useStyles();


    
  const [getPcbPhysicsTheory, setPcbPhysicsTheory] = React.useState("")
  const [getPcbPhysicsPractical, setPcbPhysicsPractical] = React.useState("")
  const [getPcbChemistryTheory, setPcbChemistryTheory] = React.useState("")
  const [getPcbChemistryPractical, setPcbChemistryPractical] = React.useState("")
  const [getPcbBiologyTheory, setPcbBiologyTheory] = React.useState("")
  const [getPcbBiologyPractical, setPcbBiologyPractical] = React.useState("")
  const [getPcbHindiTheory, setPcbHindiTheory] = React.useState("")
  const [getPcbHindiPractical, setPcbHindiPractical] = React.useState("")
  const [getPcbEnglishTheory, setPcbEnglishTheory] = React.useState("")
  const [getPcbEnglishPractical, setPcbEnglishPractical] = React.useState("")
  const [getPcbMathsTheory, setPcbMathsTheory] = React.useState("")
  const [getPcbMathsPractical, setPcbMathsPractical] = React.useState("")

  const hasMath = (props.optionalsubject || "").toLowerCase().includes("math");

  const onTheoryChange = (setter) => (event) => {
    const val = event.target.value;
    if (val === "" || (Number(val) >= 0 && Number(val) <= 80)) {
      setter(val);
    }
  };

  const onPracticalChange = (setter) => (event) => {
    const val = event.target.value;
    if (val === "" || (Number(val) >= 0 && Number(val) <= 20)) {
      setter(val);
    }
  };

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

const HandleSubmitPcb = async (event) => {
  
      if (
        getPcbPhysicsTheory != "" &&
        getPcbPhysicsPractical != "" &&
        getPcbChemistryTheory != "" &&
        getPcbChemistryPractical != ""  &&
        getPcbBiologyTheory != "" &&
        getPcbBiologyPractical != "" &&
        getPcbHindiTheory != "" &&
        getPcbHindiPractical != "" &&
        getPcbEnglishTheory != "" &&
        getPcbEnglishPractical != "" &&
        (!hasMath || (getPcbMathsTheory != "" && getPcbMathsPractical != ""))
      ) {
          let body={
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3  ,
            "session": props.session  ,

            "physicst":getPcbPhysicsTheory,
            "physicsp": getPcbPhysicsPractical,
            "chemistryt": getPcbChemistryTheory,
            "chemistryp": getPcbChemistryPractical,
            "biologyt": getPcbBiologyTheory,
            "biologyp": getPcbBiologyPractical,
            "hindit": getPcbHindiTheory,
            "hindip": getPcbHindiPractical,
            "englisht": getPcbEnglishTheory,
            "englishp": getPcbEnglishPractical,
            "mathst": hasMath ? getPcbMathsTheory : 0,
            "mathsp": hasMath ? getPcbMathsPractical : 0
          }
                    
        console.log(body)   
          axios.post(`${BaseUrl}/lockpostadd/AddPcbMarks`, body)
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
    <SectionHeader classes={classes} icon={<AssignmentIcon className={classes.sectionIcon} />} title={<>Enter PCB Marks</>} />
  
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-dense"
                  placeholder="Physics-Theory"
                  label="Physics-Theory"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  value={getPcbPhysicsTheory}
                  onChange={(event) => setPcbPhysicsTheory(event.target.value)}
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
                  value={getPcbPhysicsPractical}
                  variant="outlined"
                  onChange={(event) => setPcbPhysicsPractical(event.target.value)}
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
                  value={getPcbChemistryTheory}
                  variant="outlined"
                  onChange={(event) => setPcbChemistryTheory(event.target.value)}
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
                  value={getPcbChemistryPractical}
                  variant="outlined"
                  onChange={(event) => setPcbChemistryPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Biology-Theory"
                  label="Biology-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getPcbBiologyTheory}
                  variant="outlined"
                  onChange={(event) => setPcbBiologyTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Biology-Practical"
                  label="Biology-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getPcbBiologyPractical}
                  variant="outlined"
                  onChange={(event) => setPcbBiologyPractical(event.target.value)}
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
                  value={getPcbHindiTheory}
                  variant="outlined"
                  onChange={(event) => setPcbHindiTheory(event.target.value)}
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
                  value={getPcbHindiPractical}
                  variant="outlined"
                  onChange={(event) => setPcbHindiPractical(event.target.value)}
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
                  value={getPcbEnglishTheory}
                  variant="outlined"
                  onChange={(event) => setPcbEnglishTheory(event.target.value)}
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
                  value={getPcbEnglishPractical}
                  variant="outlined"
                  onChange={(event) => setPcbEnglishPractical(event.target.value)}

                  fullWidth
                />
              </Grid>

              {hasMath && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Maths-Theory (max 80)"
                    label="Maths-Theory (max 80)"
                    className={classes.textField}
                    margin="dense"
                    value={getPcbMathsTheory}
                    variant="outlined"
                    onChange={onTheoryChange(setPcbMathsTheory)}
                    fullWidth
                  />
                </Grid>
              )}

              {hasMath && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Maths-Practical (max 20)"
                    label="Maths-Practical (max 20)"
                    className={classes.textField}
                    margin="dense"
                    value={getPcbMathsPractical}
                    variant="outlined"
                    onChange={onPracticalChange(setPcbMathsPractical)}
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
                onClick={(event) => HandleSubmitPcb(event)}
              >
                Submit PCB
              </Button>
            </Grid>

            </Paper>
    </div>
  )
  }
export default Pcb;