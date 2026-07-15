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



function UPcb(props) {
    const classes = useStyles();


    const [getId, setId] = React.useState("")     
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






  const readAllRecords =  () => {

    let body={
      id:props.getSubCategoryid2,
      class:props.getSubCategoryid,
      medium:props.getSubCategoryid1,
      examtype:props.getSubCategoryid3,
      stream:props.stream
    }  

    axios.post(`${BaseUrl}/lockpostadd/getStudentPcbMarks`, body)
      .then((res) => {
        // callalert(res, "then");
        console.log("From Drop Down",res.data)

        setId(res.data[0].id)
        setPcbPhysicsPractical(res.data[0].physicsp)
        setPcbPhysicsTheory(res.data[0].physicst)
        setPcbChemistryPractical(res.data[0].chemistryp)
        setPcbChemistryTheory(res.data[0].chemistryt)
        setPcbBiologyPractical(res.data[0].biologyp)
        setPcbBiologyTheory(res.data[0].biologyt)
        setPcbHindiTheory(res.data[0].hindit)
        setPcbHindiPractical(res.data[0].hindip)
        setPcbEnglishTheory(res.data[0].englisht)
        setPcbEnglishPractical(res.data[0].englishp)

     

      })
      .catch((err) => {
        //callalert(err, "catch");
        console.log("From Drop Down",err)
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
        getPcbEnglishPractical != ""         
      ) {
          let body={
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3  ,

            "id":getId,
            "physicst":getPcbPhysicsTheory,
            "physicsp": getPcbPhysicsPractical,
            "chemistryt": getPcbChemistryTheory,
            "chemistryp": getPcbChemistryPractical,
            "biologyt": getPcbBiologyTheory,
            "biologyp": getPcbBiologyPractical,
            "hindit": getPcbHindiTheory,
            "hindip": getPcbHindiPractical,
            "englisht": getPcbEnglishTheory,
            "englishp": getPcbEnglishPractical
          }  
                    
        console.log(body)   
          axios.post(`${BaseUrl}/lockpostadd/UpdatePcbMarks`, body)
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
              <h2>Update PCB Marks</h2>
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
                  value={getPcbPhysicsTheory}
                  onChange={(event) => setPcbPhysicsTheory(event.target.value)}
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
                  value={getPcbPhysicsPractical}
                  variant="outlined"
                  onChange={(event) => setPcbPhysicsPractical(event.target.value)}
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
                  value={getPcbChemistryTheory}
                  variant="outlined"
                  onChange={(event) => setPcbChemistryTheory(event.target.value)}
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
                  value={getPcbChemistryPractical}
                  variant="outlined"
                  onChange={(event) => setPcbChemistryPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Biology-Theory"
                  label="Biology-Theory"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcbBiologyTheory}
                  variant="outlined"
                  onChange={(event) => setPcbBiologyTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Biology-Practical"
                  label="Biology-Practical"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getPcbBiologyPractical}
                  variant="outlined"
                  onChange={(event) => setPcbBiologyPractical(event.target.value)}
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
                  value={getPcbHindiTheory}
                  variant="outlined"
                  onChange={(event) => setPcbHindiTheory(event.target.value)}
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
                  value={getPcbHindiPractical}
                  variant="outlined"
                  onChange={(event) => setPcbHindiPractical(event.target.value)}
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
                  value={getPcbEnglishTheory}
                  variant="outlined"
                  onChange={(event) => setPcbEnglishTheory(event.target.value)}
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
                  value={getPcbEnglishPractical}
                  variant="outlined"
                  onChange={(event) => setPcbEnglishPractical(event.target.value)}
                  
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
                onClick={(event) => HandleSubmitPcb(event)}
              >
                Submit PCB
              </Button>
            </Grid>

            </div>
  )
  }
export default UPcb;