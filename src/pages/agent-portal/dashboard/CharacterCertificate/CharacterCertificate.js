import React, { useEffect } from "react";
import { isUndefined } from "@syncfusion/ej2-base";
import { setPrintDocumentTitle } from "../Marksheet/printDocumentTitle";
import { addCertificatePrintStyles, removeCertificatePrintStyles } from "./printCertificateStyles";
import PrintBackButton from "../Marksheet/PrintBackButton";
import logo from "../Tc/img/logo.png";
import "./characterCertificate.css";

function CharacterCertificate(props) {
  const [getName, setName] = React.useState("");
  const [getFathername, setFathername] = React.useState("");
  const [getMothername, setMothername] = React.useState("");
  const [getGender, setGender] = React.useState("");
  const [getClass, setClass] = React.useState("");
  const [getAdmissionno, setAdmissionno] = React.useState("");
  const [getFromSession, setFromSession] = React.useState("");
  const [getToSession, setToSession] = React.useState("");
  const [getConduct, setConduct] = React.useState("");
  const [getPurpose, setPurpose] = React.useState("");
  const [getDateOfIssue, setDateOfIssue] = React.useState("");
  const [getOtherRemark, setOtherRemark] = React.useState("");
  const [getCertId, setCertId] = React.useState("");
  const [getStudentId, setStudentId] = React.useState("");

  const readAllRecords = () => {
    if (!isUndefined(props.location.res)) {
		setPrintDocumentTitle(props.location.res.name, props.location.res.class);
      setName(props.location.res.name);
      setFathername(props.location.res.fathername);
      setMothername(props.location.res.mothername);
      setGender(props.location.res.gender);
      setClass(props.location.res.class);
      setAdmissionno(props.location.res.admissionno);
      setFromSession(props.location.res.fromsession);
      setToSession(props.location.res.tosession);
      setConduct(props.location.res.conduct);
      setPurpose(props.location.res.purpose);
      setDateOfIssue(props.location.res.dateofissue);
      setOtherRemark(props.location.res.otherremark);
      setCertId(props.location.res.id);
      setStudentId(props.location.res.studentid);
    }
  };

  useEffect(function () {
    readAllRecords();
    addCertificatePrintStyles();
    return removeCertificatePrintStyles;
  }, []);

  const isFemale = getGender && getGender.toLowerCase() === "female";
  const relation = isFemale ? "D/O" : "S/O";
  const pronounSub = isFemale ? "She" : "He";
  const pronounPoss = isFemale ? "her" : "his";

  return (
    <>
      <PrintBackButton history={props.history} />
      <div className="cc-outer">
        <div className="cc-corner cc-corner-tl" />
        <div className="cc-corner cc-corner-tr" />
        <div className="cc-corner cc-corner-bl" />
        <div className="cc-corner cc-corner-br" />
        <div className="cc-accent-bl" />
        <div className="cc-accent-br" />

        <div className="cc-card">
          <img src={logo} alt="" className="cc-watermark" />

          <div className="cc-meta-row">
            <span>Certificate No.: {getStudentId}/{getCertId}</span>
            <span>Admission No.: {getAdmissionno}</span>
          </div>

          <img src={logo} alt="School Logo" className="cc-emblem" />

          <div className="cc-header-text">
            <p className="cc-school-name">KRISHNA CONVENT HR. SEC. SCHOOL</p>
            <p className="cc-school-sub">A Sr. Sec. School Affiliated To MP Board Madhya Pradesh</p>
            <p className="cc-school-address">Banmore, Morena, Madhya Pradesh</p>
          </div>

          <div className="cc-ribbon-wrap">
            <div className="cc-ribbon-tail cc-ribbon-tail-left" />
            <div className="cc-ribbon-main">Character Certificate</div>
            <div className="cc-ribbon-tail cc-ribbon-tail-right" />
          </div>

          <div className="cc-body">
            It is certified that <span className="cc-fill">{getName}</span>{" "}
            {relation} <span className="cc-fill">{getFathername}</span> (mother{" "}
            <span className="cc-fill">{getMothername}</span>) is a bonafide
            student of this School, studying in Class{" "}
            <span className="cc-fill">{getClass}</span> during the session{" "}
            <span className="cc-fill">{getFromSession}</span> to{" "}
            <span className="cc-fill">{getToSession}</span>, and bears a good
            moral character. {pronounSub} behaviour was found to be{" "}
            <span className="cc-fill">{getConduct}</span> with teachers and
            students. {pronounSub} has neither displayed persistent violent or
            aggressive behaviour nor any desire to harm others.
            <br />
            <br />
            This certificate is issued for the purpose of{" "}
            <span className="cc-fill">{getPurpose}</span>. Other Remarks:{" "}
            <span className="cc-fill">{getOtherRemark}</span>.
            <br />
            <br />
            We wish {pronounPoss} success in all future endeavours.
          </div>

          <div className="cc-footer">
            <div className="cc-footer-block">
              <div className="cc-footer-date">{getDateOfIssue}</div>
              <div className="cc-footer-line" />
              <div className="cc-footer-caption">
                Issuance Date
                <br />
                Krishna Convent Hr. Sec. School
                <br />
                Banmore, Morena
              </div>
            </div>

            <div className="cc-footer-block cc-footer-right">
              <div className="cc-footer-line" />
              <div className="cc-footer-caption">
                Principal
                <br />
                Krishna Convent Hr. Sec. School
                <br />
                Banmore, Morena
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCertificate;
