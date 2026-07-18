import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import Dialog from "@material-ui/core/Dialog";
import swal from "sweetalert";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import ShowStudents from "./showStudent/ShowStudents";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
import BaseUrl from "../../../services/BaseUrl";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: "6px",
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
    marginBottom: 24,
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

const sessionOptions = [
  { value: 2018, label: "2018 - 2019" },
  { value: 2019, label: "2019 - 2020" },
  { value: 2020, label: "2020 - 2021" },
  { value: 2021, label: "2021 - 2022" },
  { value: 2022, label: "2022 - 2023" },
  { value: 2023, label: "2023 - 2024" },
  { value: 2024, label: "2024 - 2025" },
  { value: 2025, label: "2025 - 2026" },
  { value: 2026, label: "2026 - 2027" },
  { value: 2027, label: "2027 - 2028" },
  { value: 2028, label: "2028 - 2029" },
  { value: 2029, label: "2029 - 2030" },
  { value: 2030, label: "2030 - 2031" },
  { value: 2031, label: "2031 - 2032" },
];

const classOptions = [
  { value: "nur", label: "Nur" },
  { value: "lkg", label: "LKG" },
  { value: "ukg", label: "UKG" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];

const mediumOptions = [
  { value: "eng", label: "English" },
  { value: "hin", label: "Hindi" },
];

function GenrateCharacterCertificate(props) {
  const classes = useStyles();

  const [getStudentID, setStudentID] = React.useState(0);
  const [getAdmissionNo, setAdmissionNo] = React.useState("");

  const [getName, setName] = React.useState("");
  const [getMothername, setMothername] = React.useState("");
  const [getFathername, setFathername] = React.useState("");
  const [getGender, setGender] = React.useState("");
  const [getDob, setDob] = React.useState("");
  const [getClass, setClass] = React.useState("");
  const [getStream, setStream] = React.useState("");
  const [getAddress, setAddress] = React.useState("");
  const [getSssmidno, setSssmidno] = React.useState("");
  const [getsingleimage, setsingleimage] = React.useState({
    icon: "",
    file: "",
  });

  const [getSubCategorySession, setSubCategorySession] = React.useState("");
  const [getSubCategoryidSession, setSubCategoryidSession] = React.useState("");
  const [getSubCategory, setSubCategory] = React.useState("");
  const [getSubCategoryid, setSubCategoryid] = React.useState("");
  const [getSubCategory1, setSubCategory1] = React.useState("");
  const [getSubCategoryid1, setSubCategoryid1] = React.useState("");
  const [getSubCategory2, setSubCategory2] = React.useState("");
  const [getSubCategoryid2, setSubCategoryid2] = React.useState("");
  const [getSCList2, setSCList2] = React.useState([{ value: "", label: "" }]);

  const [getFromSession, setFromSession] = React.useState("");
  const [getToSession, setToSession] = React.useState("");
  const [getConduct, setConduct] = React.useState("");
  const [getPurpose, setPurpose] = React.useState("");
  const [getDateOfIssue, setDateOfIssue] = React.useState("");
  const [getOtherRemark, setOtherRemark] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleClickClose = async () => {
    setOpen(false);
  };

  const ProgresDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        paperWidthFalse={false}
      >
        <div>
          <Progress type="circle" percent={progress} />
        </div>
      </Dialog>
    );
  };

  const callalert = (data, status) => {
    if (status == "then") {
      if (data.status == 200) {
        setOpen(false);
        swal("School", "Character Certificate Genrated", "success");
        props.changeView(
          <ShowStudents
            history={props.history}
            changeView={props.changeView}
          />,
        );
      }
    } else if (status == "catch") {
      setOpen(false);
      swal("School", "There Is Error In Server", "error");
    }
  };

  const HandleSubmit = async (event) => {
    if (
      getFromSession != "" &&
      getToSession != "" &&
      getConduct != "" &&
      getPurpose != "" &&
      getDateOfIssue != "" &&
      getOtherRemark != ""
    ) {
      let body = {
        studentid: getStudentID,
        fromsession: getFromSession,
        tosession: getToSession,
        conduct: getConduct,
        purpose: getPurpose,
        dateofissue: getDateOfIssue,
        otherremark: getOtherRemark,
      };

      axios
        .post(`${BaseUrl}/lockpostadd/AddCharacterCertificate`, body)
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

  const onSubCategorySessionChange = (event) => {
    setSubCategorySession(event);
    try {
      setSubCategoryidSession(event.value);
    } catch (e) {
      setSubCategoryidSession("");
    }
  };

  const onSubCategoryChange = (event) => {
    setSubCategory(event);
    try {
      setSubCategoryid(event.value);
    } catch (e) {
      setSubCategoryid("");
    }
  };

  const onSubCategoryChange1 = (event) => {
    setSubCategory1(event);
    try {
      setSubCategoryid1(event.value);

      let body = {
        session: getSubCategoryidSession,
        class: getSubCategoryid,
        medium: event.value,
      };
      axios
        .post(`${BaseUrl}/lockpostadd/getstudentbyclass`, body)
        .then((res) => {
          setSCList2(res.data);
        })
        .catch((err) => {
          console.log("From Drop Down", err);
        });
    } catch (e) {
      setSubCategoryid1("");
    }
  };

  const onSubCategoryChange2 = (event) => {
    setSubCategory2(event);
    try {
      setSubCategoryid2(event.value);

      let body = {
        id: event.value,
      };

      axios
        .post(`${BaseUrl}/lockpostadd/getstudentbyCharacterCertificate`, body)
        .then((res) => {
          if (res.data.length == 0) {
            alert("Character Certificate Already Genrated");
          }
          setName(res.data[0].name);
          setFathername(res.data[0].fathername);
          setMothername(res.data[0].mothername);
          setGender(res.data[0].gender);
          setDob(res.data[0].dob);
          setClass(res.data[0].class);
          setStream(res.data[0].subject);
          setsingleimage({ icon: res.data[0].photo, file: "" });
          setAddress(res.data[0].address);
          setSssmidno(res.data[0].sssmidno);
          setStudentID(res.data[0].studentid);
          setAdmissionNo(res.data[0].admissionno);
        })
        .catch((err) => {
          console.log("From Drop Down", err);
        });
    } catch (e) {
      setSubCategoryid2("");
    }
  };

  return (
    <div className={classes.page}>
      <Paper className={classes.sectionCard}>
        <SectionHeader
          classes={classes}
          icon={<SchoolIcon className={classes.sectionIcon} />}
          title="Select Student"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputLabel shrink>Session</InputLabel>
            <Select
              value={getSubCategorySession}
              name="Category"
              options={sessionOptions}
              onChange={(e) => onSubCategorySessionChange(e)}
              className="basic-multi-select"
              classNamePrefix="Sub-Category"
              isClearable={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <InputLabel shrink>Class</InputLabel>
            <Select
              value={getSubCategory}
              name="Category"
              options={classOptions}
              onChange={(e) => onSubCategoryChange(e)}
              className="basic-multi-select"
              classNamePrefix="Sub-Category"
              isClearable={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <InputLabel shrink>Medium</InputLabel>
            <Select
              value={getSubCategory1}
              name="Category"
              options={mediumOptions}
              onChange={(e) => onSubCategoryChange1(e)}
              className="basic-multi-select"
              classNamePrefix="Sub-Category"
              isClearable={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <InputLabel shrink>Student</InputLabel>
            <Select
              value={getSubCategory2}
              name="Category"
              options={getSCList2}
              onChange={(e) => onSubCategoryChange2(e)}
              className="basic-multi-select"
              classNamePrefix="Sub-Category"
              isClearable={true}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.sectionCard}>
        <SectionHeader
          classes={classes}
          icon={<AssignmentIndIcon className={classes.sectionIcon} />}
          title="Student Information (Read-only)"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              <GridListTile key={1} cols={1}>
                <img src={`${BaseUrl}/images/${getsingleimage.icon}`} alt={""} />
              </GridListTile>
            </GridList>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Name"
              label="Name"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getName}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Father-Name"
              label="Father-Name"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getFathername}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Mother-Name"
              label="Mother-Name"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getMothername}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Gender"
              label="Gender"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getGender}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="DOB"
              label="DOB"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getDob}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Class"
              label="Class"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getClass}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Stream"
              label="Stream"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getStream}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Address"
              label="Address"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getAddress}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="SSSM-ID No."
              label="SSSM-ID No."
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getSssmidno}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Admission-No"
              label="Admission-No"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getAdmissionNo}
              variant="outlined"
              isDisabled={true}
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.sectionCard}>
        <SectionHeader
          classes={classes}
          icon={<DescriptionIcon className={classes.sectionIcon} />}
          title="Character Certificate Details"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="From Session"
              label="From Session"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getFromSession}
              variant="outlined"
              onChange={(event) => setFromSession(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="To Session"
              label="To Session"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getToSession}
              variant="outlined"
              onChange={(event) => setToSession(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Conduct"
              label="Conduct"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getConduct}
              variant="outlined"
              onChange={(event) => setConduct(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Purpose"
              label="Purpose"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getPurpose}
              variant="outlined"
              onChange={(event) => setPurpose(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Date Of Issue"
              label="Date Of Issue"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getDateOfIssue}
              variant="outlined"
              onChange={(event) => setDateOfIssue(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              placeholder="Other Remarks"
              label="Other Remarks"
              className={classes.textField}
              margin="dense"
              style={{ marginLeft: -10 }}
              value={getOtherRemark}
              variant="outlined"
              onChange={(event) => setOtherRemark(event.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            component="span"
            className={classes.button}
            onClick={(event) => HandleSubmit(event)}
          >
            Submit Character Certificate
          </Button>
        </Grid>
      </Paper>

      <Grid item xs={12}>
        {ProgresDialog()}
      </Grid>
    </div>
  );
}

export default GenrateCharacterCertificate;
