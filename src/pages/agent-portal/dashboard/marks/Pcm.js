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
import Activities from "../Activities";
import swal from "sweetalert";
import ShowStudents from "../showStudent/ShowStudents";


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



function Pcm(props) {
    const classes = useStyles();


    
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

  const hasBio = (props.optionalsubject || "").toLowerCase().includes("bio");

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
            "examtype": props.getSubCategoryid3  ,
            "session": props.session  ,

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
          axios.post(`${BaseUrl}/lockpostadd/AddPcmMarks`, body)
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
    <div>
    <Typography
              variant="button"
              display="block"
              gutterBottom
              style={{ color: "blue" }}
            >
              <h2>Enter PCM Of {props.getSubCategoryid3 } Marks</h2>
            </Typography>
            <Grid container xs={12} spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-dense"
                  placeholder="Physics-Theory"
                  label="Physics-Theory"
                  style={{ marginLeft: -10 }}
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                  value={getPcmPhysicsTheory}
                  onChange={(event) => setPcmPhysicsTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Physics-Practical"
                  label="Physics-Practical"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmPhysicsPractical}
                  variant="outlined"
                  onChange={(event) => setPcmPhysicsPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Chemistry-Theory"
                  label="Chemistry-Theory"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmChemistryTheory}
                  variant="outlined"
                  onChange={(event) => setPcmChemistryTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
      
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Chemistry-Practical"
                  label="Chemistry-Practical"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmChemistryPractical}
                  variant="outlined"
                  onChange={(event) => setPcmChemistryPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Maths-Theory"
                  label="Maths-Theory"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmMathsTheory}
                  variant="outlined"
                  onChange={(event) => setPcmMathsTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Maths-Practical"
                  label="Maths-Practical"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmMathsPractical}
                  variant="outlined"
                  onChange={(event) => setPcmMathsPractical(event.target.value)}
                  fullWidth
                />
              </Grid>    
  
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Hindi-Theory"
                  label="Hindi-Theory"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmHindiTheory}
                  variant="outlined"
                  onChange={(event) => setPcmHindiTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Hindi-Practical"
                  label="Hindi-Practical"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmHindiPractical}
                  variant="outlined"
                  onChange={(event) => setPcmHindiPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="English-Theory"
                  label="English-Theory"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmEnglishTheory}
                  variant="outlined"
                  onChange={(event) => setPcmEnglishTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="English-Practical"
                  label="English-Practical"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcmEnglishPractical}
                  variant="outlined"
                  onChange={(event) => setPcmEnglishPractical(event.target.value)}

                  fullWidth
                />
              </Grid>

              {hasBio && (
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Bio-Theory (max 80)"
                    label="Bio-Theory (max 80)"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    style={{ marginLeft: -10 }}
                    value={getPcmBioTheory}
                    variant="outlined"
                    onChange={onTheoryChange(setPcmBioTheory)}
                    fullWidth
                  />
                </Grid>
              )}

              {hasBio && (
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Bio-Practical (max 20)"
                    label="Bio-Practical (max 20)"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    style={{ marginLeft: -10 }}
                    value={getPcmBioPractical}
                    variant="outlined"
                    onChange={onPracticalChange(setPcmBioPractical)}
                    fullWidth
                  />
                </Grid>
              )}

            </Grid>
            <div style={{ marginTop: 10 }} />
    
            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                onClick={(event) => HandleSubmitPcm(event)}
              >
                Submit PCM
              </Button>
            </Grid>
            </div>
  )
  }
export default Pcm;