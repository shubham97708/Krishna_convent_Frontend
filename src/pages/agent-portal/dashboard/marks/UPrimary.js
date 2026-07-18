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



function UPrimary(props) {

  const classes = useStyles();


  const [getId, setId] = React.useState("")
  const [getHindi, setHindi] = React.useState("")
  const [getEnglish, setEnglish] = React.useState("")
  const [getGk, setGk] = React.useState("")
  const [getEvs, setEvs] = React.useState("")
  const [getComputer, setComputer] = React.useState("")
  const [getMaths, setMaths] = React.useState("")



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


  const readAllRecords =  () => {

    let body={
      id:props.getSubCategoryid2,
      class:props.getSubCategoryid,
      medium:props.getSubCategoryid1,
      examtype:props.getSubCategoryid3,
      stream:props.stream
    }  

    axios.post(`${BaseUrl}/lockpostadd/getStudentPrimaryMarks`, body)
      .then((res) => {
        // callalert(res, "then");
        console.log("From Drop Down",res.data)

        setId(res.data[0].id)
        setHindi(res.data[0].hindi)
        setEnglish(res.data[0].english)
        setGk(res.data[0].gk)
        setEvs(res.data[0].evs)
        setMaths(res.data[0].maths)
        setComputer(res.data[0].computer) 

      })
      .catch((err) => {
        //callalert(err, "catch");
        console.log("From Drop Down",err)
      });
 
  };





  useEffect(function () {
     readAllRecords();
  
   }, []);
 





  const HandleSubmitPrimary = async (event) => {
  
      if (
        getHindi != "" &&
        getEnglish != "" &&
        getGk != "" &&
        getEvs != ""  &&
        getMaths != "" &&
        getComputer != "" 
      ){
          let body={
            "id":getId,
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3,

            "hindi":getHindi,
            "english": getEnglish,
            "gk": getGk,
            "evs": getEvs,
            "maths": getMaths,
            "computer": getComputer
          
          }  
                    
        console.log(body)   
          axios.post(`${BaseUrl}/lockpostadd/UpdatePrimaryMarks`, body)
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
              <h2>Update {props.getSubCategoryid3} Primary class Marks</h2>
            </Typography>
  
            <Grid container xs={12} spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-dense"
                  placeholder="Hindi"
                  label="Hindi"
                  style={{ marginLeft: -10 }}
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                  value={getHindi}
                  onChange={(event) => setHindi(event.target.value)}
                  fullWidth
                />
              </Grid>
  
         
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="English"
                  label="English"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getEnglish}
                  variant="outlined"
                  onChange={(event) => setEnglish(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Mathematics"
                  label="Mathematics"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getMaths}
                  variant="outlined"
                  onChange={(event) => setMaths(event.target.value)}
                  fullWidth
                />
              </Grid>
      
            
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="GK"
                  label="GK"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getGk}
                  variant="outlined"
                  onChange={(event) => setGk(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="EVS"
                  label="EVS"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getEvs}
                  variant="outlined"
                  onChange={(event) => setEvs(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Computer"
                  label="Computer"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getComputer}
                  variant="outlined"
                  onChange={(event) => setComputer(event.target.value)}
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
                onClick={(event) => HandleSubmitPrimary(event)}
              >
                Submit 
              </Button>
            </Grid>
            </div>
  )
  }
export default UPrimary;