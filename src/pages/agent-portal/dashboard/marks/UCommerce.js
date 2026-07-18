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


function UCommerce(props) {

    const classes = useStyles();

    const [getId, setId] = React.useState("")    
  const [getBusinessStudiesTheory, setBusinessStudiesTheory] = React.useState("")
  const [getBusinessStudiesPractical, setBusinessStudiesPractical] = React.useState("")
  const [getAccountancyTheory, setAccountancyTheory] = React.useState("")
  const [getAccountancyPractical, setAccountancyPractical] = React.useState("")
  const [getEconomicsTheory, setEconomicsTheory] = React.useState("")
  const [getEconomicsPractical, setEconomicsPractical] = React.useState("")
  const [getHindiTheory, setHindiTheory] = React.useState("")
  const [getHindiPractical, setHindiPractical] = React.useState("")
  const [getEnglishTheory, setEnglishTheory] = React.useState("")
  const [getEnglishPractical, setEnglishPractical] = React.useState("")
  const [getItTheory, setItTheory] = React.useState("")
  const [getItPractical, setItPractical] = React.useState("")
  const [getOptionalSubject, setOptionalSubject] = React.useState("")

  const hasIt = (getOptionalSubject || "")
    .toLowerCase()
    .includes("informatics practices");

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

    axios.post(`${BaseUrl}/lockpostadd/getStudentCommerceMarks`, body)
      .then((res) => {
        // callalert(res, "then");
        console.log("From Drop Down",res.data)


setId(res.data[0].id)
setBusinessStudiesTheory(res.data[0].businesst)
setBusinessStudiesPractical(res.data[0].businessp)
setAccountancyTheory(res.data[0].accountancyt)
setAccountancyPractical(res.data[0].accountancyp)
setEconomicsTheory(res.data[0].economicst)
setEconomicsPractical(res.data[0].economicsp)
setHindiTheory(res.data[0].hindit)
setHindiPractical(res.data[0].hindip)
setEnglishTheory(res.data[0].englisht)
setEnglishPractical(res.data[0].englishp)
setItTheory(res.data[0].itt)
setItPractical(res.data[0].itp)



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

  const HandleSubmitCommerce = async (event) => {
  
      if (
        getBusinessStudiesTheory != "" &&
        getBusinessStudiesPractical != "" &&
        getAccountancyTheory != "" &&
        getAccountancyPractical != ""  &&
        getEconomicsTheory != "" &&
        getEconomicsPractical != "" &&
        getHindiTheory != "" &&
        getHindiPractical != "" &&
        getEnglishTheory != "" &&
        getEnglishPractical != "" &&
        (!hasIt || (getItTheory != "" && getItPractical != ""))
      ) {
          let body={
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3,

            "id":getId,
            "businesst":getBusinessStudiesTheory,
            "businessp": getBusinessStudiesPractical,
            "accountancyt": getAccountancyTheory,
            "accountancyp": getAccountancyPractical,
            "economicst": getEconomicsTheory,
            "economicsp": getEconomicsPractical,
            "hindit": getHindiTheory,
            "hindip": getHindiPractical,
            "englisht": getEnglishTheory,
            "englishp": getEnglishPractical,
            "itt": hasIt ? getItTheory : 0,
            "itp": hasIt ? getItPractical : 0
          }
                    
        console.log(body)   
          axios.post(`${BaseUrl}/lockpostadd/UpdateCommerceMarks`, body)
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
    <SectionHeader classes={classes} icon={<AssignmentIcon className={classes.sectionIcon} />} title={<>Update {props.getSubCategoryid3} Commerce Marks</>} />
  
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-dense"
                  placeholder="Business-Studies-Theory"
                  label="Business-Studies-Theory"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  value={getBusinessStudiesTheory}
                  onChange={(event) => setBusinessStudiesTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Business-Studies-Practical"
                  label="Business-Studies-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getBusinessStudiesPractical}
                  variant="outlined"
                  onChange={(event) => setBusinessStudiesPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Accountancy-Theory"
                  label="Accountancy-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getAccountancyTheory}
                  variant="outlined"
                  onChange={(event) => setAccountancyTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
      
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Accountancy-Practical"
                  label="Accountancy-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getAccountancyPractical}
                  variant="outlined"
                  onChange={(event) => setAccountancyPractical(event.target.value)}
                  fullWidth
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Economics-Theory"
                  label="Economics-Theory"
                  className={classes.textField}
                  margin="dense"
                  value={getEconomicsTheory}
                  variant="outlined"
                  onChange={(event) => setEconomicsTheory(event.target.value)}
                  fullWidth
                />
              </Grid>
  
  
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  placeholder="Economics-Practical"
                  label="Economics-Practical"
                  className={classes.textField}
                  margin="dense"
                  value={getEconomicsPractical}
                  variant="outlined"
                  onChange={(event) => setEconomicsPractical(event.target.value)}
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
                  value={getHindiTheory}
                  variant="outlined"
                  onChange={(event) => setHindiTheory(event.target.value)}
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
                  value={getHindiPractical}
                  variant="outlined"
                  onChange={(event) => setHindiPractical(event.target.value)}
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
                  value={getEnglishTheory}
                  variant="outlined"
                  onChange={(event) => setEnglishTheory(event.target.value)}
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
                  value={getEnglishPractical}
                  variant="outlined"
                  onChange={(event) => setEnglishPractical(event.target.value)}

                  fullWidth
                />
              </Grid>

              {hasIt && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="IT-Theory (max 70)"
                    label="IT-Theory (max 70)"
                    className={classes.textField}
                    margin="dense"
                    value={getItTheory}
                    variant="outlined"
                    onChange={onTheoryChange(setItTheory)}
                    fullWidth
                  />
                </Grid>
              )}

              {hasIt && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    placeholder="IT-Practical (max 30)"
                    label="IT-Practical (max 30)"
                    className={classes.textField}
                    margin="dense"
                    value={getItPractical}
                    variant="outlined"
                    onChange={onPracticalChange(setItPractical)}
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
                onClick={(event) => HandleSubmitCommerce(event)}
              >
                Submit 
              </Button>
            </Grid>
            </Paper>
    </div>
  )
  }
export default UCommerce;