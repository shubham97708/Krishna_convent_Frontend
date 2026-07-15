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



function USrSecondary(props) {
    const classes = useStyles();

  
    const [getId, setId] = React.useState("")     
  const [getHindi, setHindi] = React.useState("")
  const [getEnglish, setEnglish] = React.useState("")
  const [getMaths, setMaths] = React.useState("")
  const [getScience, setScience] = React.useState("")
  const [getSoscience, setSoscience] = React.useState("")
  const [getSanskrit, setSanskrit] = React.useState("")



  const readAllRecords =  () => {

    let body={
      id:props.getSubCategoryid2,
      class:props.getSubCategoryid,
      medium:props.getSubCategoryid1,
      examtype:props.getSubCategoryid3,
      stream:props.stream
    }  

    axios.post(`${BaseUrl}/lockpostadd/getStudentSrSecondaryMarks`, body)
      .then((res) => {
        // callalert(res, "then");
        console.log("From Drop Down",res.data)
        setId(res.data[0].id)
        setHindi(res.data[0].hindi)
        setEnglish(res.data[0].english)
        setScience(res.data[0].science)
        setSoscience(res.data[0].soscience)
        setMaths(res.data[0].maths)
        setSanskrit(res.data[0].sanskrit) 

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

  const handleSubmit = async (event) => {
  
      if (
        getHindi != "" &&
        getEnglish != "" &&
        getMaths != "" &&
        getScience != ""  &&
        getSoscience != "" &&
        getSanskrit != "" 
             
      ) {
          let body={
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3  ,

            "id":getId,
            "hindi":getHindi,
            "english": getEnglish,
            "maths": getMaths,
            "science": getScience,
            "soscience": getSoscience,
            "sanskrit": getSanskrit,
     
          }  
                    
        console.log(body)   
          axios.post(`${BaseUrl}/lockpostadd/UpdateSrSecondaryMarks`, body)
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
              <h2>Update {props.getSubCategoryid3} SR Secondary Class Marks</h2>
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
                  placeholder="Sanskrit"
                  label="Sanskrit"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getSanskrit}
                  variant="outlined"
                  onChange={(event) => setSanskrit(event.target.value)}
                  fullWidth
                />
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Science"
                  label="Science"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getScience}
                  variant="outlined"
                  onChange={(event) => setScience(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Social Science"
                  label="Social Science"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  style={{ marginLeft: -10 }}
                  value={getSoscience}
                  variant="outlined"
                  onChange={(event) => setSoscience(event.target.value)}
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
            </div>
  )
  }
export default USrSecondary;