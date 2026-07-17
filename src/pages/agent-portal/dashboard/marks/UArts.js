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
    padding: "20px",
    align: "center",
    marginTop: "2px",
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: "10px",
  },
  dense: {
    marginTop: 19,
  },
  button: {
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
}));

// Keep in sync with marks/Arts.js -- same elective subject list / field mapping.
const ELECTIVE_SUBJECTS = [
  { label: "History", theoryField: "historyt", practicalField: "historyp", maxTheory: 80, maxPractical: 20 },
  { label: "Political Science", theoryField: "polscit", practicalField: "polscip", maxTheory: 80, maxPractical: 20 },
  { label: "Geography", theoryField: "geographyt", practicalField: "geographyp", maxTheory: 70, maxPractical: 30 },
  { label: "Economics", theoryField: "economicst", practicalField: "economicsp", maxTheory: 80, maxPractical: 20 },
  { label: "Indian Music", theoryField: "musict", practicalField: "musicp", maxTheory: 70, maxPractical: 30 },
  { label: "Dancing", theoryField: "dancingt", practicalField: "dancingp", maxTheory: 70, maxPractical: 30 },
  { label: "Drawing and Designing", theoryField: "drawingt", practicalField: "drawingp", maxTheory: 70, maxPractical: 30 },
  { label: "Psychology", theoryField: "psychologyt", practicalField: "psychologyp", maxTheory: 70, maxPractical: 30 },
  { label: "Home Science, Anatomy, Physiology and Hygiene", theoryField: "homesciencet", practicalField: "homesciencep", maxTheory: 70, maxPractical: 30 },
  { label: "Sociology", theoryField: "sociologyt", practicalField: "sociologyp", maxTheory: 80, maxPractical: 20 },
];

// Agriculture is not one subject on MP Board -- it's a group of 3 separate
// 100-mark papers, each Theory(70)+Practical(30). Picking "Agriculture" as an
// elective means all 3.
const AGRICULTURE_PAPERS = [
  { label: "Agriculture: Elements of Science and Mathematics", theoryField: "agriscit", practicalField: "agriscip", maxTheory: 70, maxPractical: 30 },
  { label: "Agriculture: Crop Production and Horticulture", theoryField: "agricropt", practicalField: "agricropp", maxTheory: 70, maxPractical: 30 },
  { label: "Agriculture: Elements of Animal Husbandry and Poultry Farming", theoryField: "agrianimalt", practicalField: "agrianimalp", maxTheory: 70, maxPractical: 30 },
];

function getSelectedElectives(optionalSubjectCsv) {
  if (!optionalSubjectCsv) return [];
  const chosen = optionalSubjectCsv.split(",").map((s) => s.trim().toLowerCase());
  const result = ELECTIVE_SUBJECTS.filter((subj) => chosen.includes(subj.label.toLowerCase()));
  if (chosen.includes("agriculture")) {
    result.push(...AGRICULTURE_PAPERS);
  }
  return result;
}


function UArts(props) {

    const classes = useStyles();

    const [getId, setId] = React.useState("")
  const [getHindiTheory, setHindiTheory] = React.useState("")
  const [getHindiPractical, setHindiPractical] = React.useState("")
  const [getEnglishTheory, setEnglishTheory] = React.useState("")
  const [getEnglishPractical, setEnglishPractical] = React.useState("")
  const [selectedElectives, setSelectedElectives] = React.useState([])
  const [electiveMarks, setElectiveMarks] = React.useState({});

  const setElectiveTheory = (theoryField) => (value) => {
    setElectiveMarks((prev) => ({ ...prev, [theoryField]: { ...prev[theoryField], theory: value } }));
  };
  const setElectivePractical = (theoryField) => (value) => {
    setElectiveMarks((prev) => ({ ...prev, [theoryField]: { ...prev[theoryField], practical: value } }));
  };

  const onBoundedChange = (setter, max) => (event) => {
    const val = event.target.value;
    if (val === "" || (Number(val) >= 0 && Number(val) <= max)) {
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

    axios.post(`${BaseUrl}/lockpostadd/getStudentArtsMarks`, body)
      .then((res) => {
        console.log("From Drop Down",res.data)

        const record = res.data[0];
        setId(record.id)
        setHindiTheory(record.hindit)
        setHindiPractical(record.hindip)
        setEnglishTheory(record.englisht)
        setEnglishPractical(record.englishp)

        const marks = {};
        ELECTIVE_SUBJECTS.concat(AGRICULTURE_PAPERS).forEach((subj) => {
          marks[subj.theoryField] = {
            theory: record[subj.theoryField],
            practical: record[subj.practicalField],
          };
        });
        setElectiveMarks(marks);
      })
      .catch((err) => {
        console.log("From Drop Down",err)
      });

    axios.post(`${BaseUrl}/lockpostadd/getstudentbyOnlyid`, { id: props.getSubCategoryid2 })
      .then((res) => {
        setSelectedElectives(getSelectedElectives(res.data[0].optionalsubject));
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
    }
  };

  const HandleSubmitArts = async (event) => {

      const allElectivesFilled = selectedElectives.every((subj) => {
        const marks = electiveMarks[subj.theoryField] || {};
        if (marks.theory === undefined || marks.theory === "") return false;
        if (marks.practical === undefined || marks.practical === "") return false;
        return true;
      });

      if (
        getHindiTheory != "" &&
        getHindiPractical != "" &&
        getEnglishTheory != "" &&
        getEnglishPractical != "" &&
        allElectivesFilled
      ) {
          let body={
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3,

            "id":getId,
            "hindit": getHindiTheory,
            "hindip": getHindiPractical,
            "englisht": getEnglishTheory,
            "englishp": getEnglishPractical,
            "historyt": 0,
            "historyp": 0,
            "polscit": 0,
            "polscip": 0,
            "geographyt": 0,
            "geographyp": 0,
            "economicst": 0,
            "economicsp": 0,
            "musict": 0,
            "musicp": 0,
            "dancingt": 0,
            "dancingp": 0,
            "drawingt": 0,
            "drawingp": 0,
            "psychologyt": 0,
            "psychologyp": 0,
            "homesciencet": 0,
            "homesciencep": 0,
            "sociologyt": 0,
            "sociologyp": 0,
            "agriscit": 0,
            "agriscip": 0,
            "agricropt": 0,
            "agricropp": 0,
            "agrianimalt": 0,
            "agrianimalp": 0,
          }

          ELECTIVE_SUBJECTS.concat(AGRICULTURE_PAPERS).forEach((subj) => {
            const marks = electiveMarks[subj.theoryField] || {};
            if (marks.theory !== undefined) body[subj.theoryField] = marks.theory;
            if (marks.practical !== undefined) body[subj.practicalField] = marks.practical;
          });

        console.log(body)
          axios.post(`${BaseUrl}/lockpostadd/UpdateArtsMarks`, body)
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
              <h2>Update {props.getSubCategoryid3} Arts Marks</h2>
            </Typography>

            <Grid container xs={12} spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-dense"
                  placeholder="Hindi-Theory"
                  label="Hindi-Theory"
                  style={{ marginLeft: -10 }}
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                  value={getHindiTheory}
                  onChange={(event) => setHindiTheory(event.target.value)}
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
                  value={getHindiPractical}
                  variant="outlined"
                  onChange={(event) => setHindiPractical(event.target.value)}
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
                  value={getEnglishTheory}
                  variant="outlined"
                  onChange={(event) => setEnglishTheory(event.target.value)}
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
                  value={getEnglishPractical}
                  variant="outlined"
                  onChange={(event) => setEnglishPractical(event.target.value)}
                  fullWidth
                />
              </Grid>

              {selectedElectives.map((subj) => (
                <React.Fragment key={subj.theoryField}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      placeholder={`${subj.label}-Theory (max ${subj.maxTheory})`}
                      label={`${subj.label}-Theory (max ${subj.maxTheory})`}
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      style={{ marginLeft: -10 }}
                      value={(electiveMarks[subj.theoryField] || {}).theory || ""}
                      variant="outlined"
                      onChange={onBoundedChange(setElectiveTheory(subj.theoryField), subj.maxTheory)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      placeholder={`${subj.label}-Practical (max ${subj.maxPractical})`}
                      label={`${subj.label}-Practical (max ${subj.maxPractical})`}
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      style={{ marginLeft: -10 }}
                      value={(electiveMarks[subj.theoryField] || {}).practical || ""}
                      variant="outlined"
                      onChange={onBoundedChange(setElectivePractical(subj.theoryField), subj.maxPractical)}
                      fullWidth
                    />
                  </Grid>
                </React.Fragment>
              ))}

            </Grid>
            <div style={{ marginTop: 10 }} />

            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                onClick={(event) => HandleSubmitArts(event)}
              >
                Submit
              </Button>
            </Grid>
            </div>
  )
  }
export default UArts;
