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
    padding: "20px",
    align: "center",
    marginTop: "2px",
    width: "100%",
  },
  textField: {
    marginTop: "6px",
  },
  dense: {
    marginTop: 19,
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

// Agriculture is its own MP Board stream (not an Arts elective): English, Hindi,
// plus 3 fixed Theory(70)+Practical(30) papers -- Elements of Science and
// Mathematics, Crop Production and Horticulture, Elements of Animal Husbandry
// and Poultry Farming. All 5 subjects are mandatory, no optional-subject choice.
const AGRICULTURE_PAPERS = [
  { label: "Agriculture: Elements of Science and Mathematics", theoryField: "agriscit", practicalField: "agriscip", maxTheory: 70, maxPractical: 30 },
  { label: "Agriculture: Crop Production and Horticulture", theoryField: "agricropt", practicalField: "agricropp", maxTheory: 70, maxPractical: 30 },
  { label: "Agriculture: Elements of Animal Husbandry and Poultry Farming", theoryField: "agrianimalt", practicalField: "agrianimalp", maxTheory: 70, maxPractical: 30 },
];

function SectionHeader({ classes, icon, title }) {
  return (
    <div className={classes.sectionHeader}>
      {icon}
      <Typography className={classes.sectionTitle}>{title}</Typography>
    </div>
  );
}


function Agriculture(props) {

    const classes = useStyles();

  const [getHindiTheory, setHindiTheory] = React.useState("")
  const [getHindiPractical, setHindiPractical] = React.useState("")
  const [getEnglishTheory, setEnglishTheory] = React.useState("")
  const [getEnglishPractical, setEnglishPractical] = React.useState("")

  // one { theory, practical } value pair per Agriculture paper, keyed by theoryField
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

  const HandleSubmitAgriculture = async (event) => {

      const allPapersFilled = AGRICULTURE_PAPERS.every((subj) => {
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
        allPapersFilled
      ) {
          let body={
            "studentid":props.getSubCategoryid2 ,
            "studentclass": props.getSubCategoryid ,
            "studentmedium": props.getSubCategoryid1 ,
            "examtype": props.getSubCategoryid3,
            "session": props.session  ,

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

          AGRICULTURE_PAPERS.forEach((subj) => {
            const marks = electiveMarks[subj.theoryField] || {};
            body[subj.theoryField] = marks.theory;
            body[subj.practicalField] = marks.practical;
          });

        console.log(body)
          axios.post(`${BaseUrl}/lockpostadd/AddArtsMarks`, body)
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
    <SectionHeader classes={classes} icon={<AssignmentIcon className={classes.sectionIcon} />} title={<>Enter Agriculture Marks</>} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-dense"
                  placeholder="Hindi-Theory"
                  label="Hindi-Theory"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  value={getHindiTheory}
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

              {AGRICULTURE_PAPERS.map((subj) => (
                <React.Fragment key={subj.theoryField}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      placeholder={`${subj.label}-Theory (max ${subj.maxTheory})`}
                      label={`${subj.label}-Theory (max ${subj.maxTheory})`}
                      className={classes.textField}
                      margin="dense"
                      value={(electiveMarks[subj.theoryField] || {}).theory || ""}
                      variant="outlined"
                      onChange={onBoundedChange(setElectiveTheory(subj.theoryField), subj.maxTheory)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      placeholder={`${subj.label}-Practical (max ${subj.maxPractical})`}
                      label={`${subj.label}-Practical (max ${subj.maxPractical})`}
                      className={classes.textField}
                      margin="dense"
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

            <Grid item xs={12} align="center" style={{ marginTop: 24 }}>
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                onClick={(event) => HandleSubmitAgriculture(event)}
              >
                Submit
              </Button>
            </Grid>
            </Paper>
    </div>
  )
  }
export default Agriculture;
