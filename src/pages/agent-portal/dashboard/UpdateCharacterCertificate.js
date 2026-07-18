import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import swal from "sweetalert";
import { isUndefined } from "@syncfusion/ej2-base";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import ShowStudents from "./showStudent/ShowStudents";
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

function UpdateCharacterCertificate(props) {
  const classes = useStyles();

  const [getStudentID, setStudentID] = React.useState(0);
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
        swal("School", "Character Certificate Updated", "success");
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

  const readAllRecordss = () => {
    if (!isUndefined(props.res)) {
      setStudentID(props.res.data[0].studentid);
      setFromSession(props.res.data[0].fromsession);
      setToSession(props.res.data[0].tosession);
      setConduct(props.res.data[0].conduct);
      setPurpose(props.res.data[0].purpose);
      setDateOfIssue(props.res.data[0].dateofissue);
      setOtherRemark(props.res.data[0].otherremark);
    }
  };

  useEffect(function () {
    readAllRecordss();
  }, []);

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
        .post(`${BaseUrl}/lockpostadd/UpdateCharacterCertificate`, body)
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
            Update Character Certificate
          </Button>
        </Grid>
      </Paper>

      <Grid item xs={12}>
        {ProgresDialog()}
      </Grid>
    </div>
  );
}

export default UpdateCharacterCertificate;
