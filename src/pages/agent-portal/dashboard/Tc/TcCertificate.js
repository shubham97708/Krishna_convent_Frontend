import React, { useEffect } from "react";
import logo from "./img/logo.png";
import PrintBackButton from "../Marksheet/PrintBackButton";
import { addTcPrintStyles, removeTcPrintStyles } from "./printTcStyles";
import "./tcCertificate.css";

function Field({ label, value, full }) {
  return (
    <div className={`tcb-field${full ? " tcb-field-full" : ""}`}>
      <span className="tcb-field-label">{label}:</span>
      <span className="tcb-field-value">{value}</span>
    </div>
  );
}

function TcCertificate({ history, subjects, data }) {
  useEffect(function () {
    addTcPrintStyles();
    return removeTcPrintStyles;
  }, []);

  const d = data || {};

  return (
    <>
      <PrintBackButton history={history} />
      <div className="tcb-outer">
        <div className="tcb-corner tcb-corner-tl" />
        <div className="tcb-corner tcb-corner-tr" />
        <div className="tcb-corner tcb-corner-bl" />
        <div className="tcb-corner tcb-corner-br" />
        <div className="tcb-accent-bl" />
        <div className="tcb-accent-br" />

        <div className="tcb-card">
          <img src={logo} alt="" className="tcb-watermark" />

          <div className="tcb-meta-row">
            <span>School Code: 112287</span>
            <span>Reg No: 5303</span>
          </div>

          <div className="tcb-header">
            <img src={logo} alt="School Logo" className="tcb-emblem" />
            <div className="tcb-header-text">
              <p className="tcb-school-name">KRISHNA CONVENT HR. SEC. SCHOOL</p>
              <p className="tcb-school-sub">A Sr. Sec. School Affiliated To MP Board Madhya Pradesh</p>
              <p className="tcb-school-address">Banmore, Morena, Madhya Pradesh</p>
            </div>
          </div>

          <div className="tcb-ribbon-wrap">
            <div className="tcb-ribbon-tail tcb-ribbon-tail-left" />
            <div className="tcb-ribbon-main">School Leaving Certificate</div>
            <div className="tcb-ribbon-tail tcb-ribbon-tail-right" />
          </div>

          <div className="tcb-meta-row">
            <span>Admission Date/No.: {d.admissionDate}/{d.admissionNo}</span>
            <span>TC No.: {d.studentId}/{d.tcId}</span>
          </div>

          <div className="tcb-section">
            <div className="tcb-section-title">Student Details</div>
            <div className="tcb-grid">
              <Field label="Full Name Of Pupil" value={d.name} full />
              <Field label="Father's/Guardian's Name" value={d.fatherName} full />
              <Field label="Mother's Name" value={d.motherName} full />
              <Field label="Gender" value={d.gender} />
              <Field label="Date Of Birth" value={d.dob} />
              <Field label="Caste" value={d.caste} />
              <Field label="Category" value={d.casteCategory} />
              <Field label="Religion" value={d.religion} />
              <Field label="Nationality" value={d.nationality} />
              <Field label="SSSM-ID No." value={d.sssmidno} />
              <Field label="Address" value={d.address} full />
            </div>
          </div>

          <div className="tcb-section">
            <div className="tcb-section-title">Academic Details</div>
            <div className="tcb-grid">
              <Field label="Admitted In Class" value={d.admittedClass} />
              <Field label="Class At Time Of Leaving" value={d.classOption} />
            </div>
            <div className="tcb-subjects">
              {(subjects || []).map((subject) => (
                <span key={subject} className="tcb-subject-chip">{subject}</span>
              ))}
            </div>
            <div className="tcb-grid" style={{ marginTop: "1.5mm" }}>
              <Field label="Qualified For Promotion" value={d.promotion} />
              <Field label="Board Exam Result" value={d.schoolBoardResult} />
            </div>
          </div>

          <div className="tcb-section">
            <div className="tcb-section-title">Attendance &amp; Certificate Details</div>
            <div className="tcb-grid">
              <Field label="Total Working Days" value={d.totalWorkingDays} />
              <Field label="Days Attended" value={d.totalDaysAttended} />
              <Field label="Date Of Application" value={d.dateOfApplication} />
              <Field label="Date Of Issue" value={d.dateOfIssueCertificate} />
              <Field label="Reason For Leaving" value={d.reasonLeaving} full />
              <Field label="Domicile Of MP" value={d.domicile} />
              <Field label="Other Remarks" value={d.otherRemark} />
            </div>
          </div>

          <div className="tcb-footer">
            <div className="tcb-footer-block">
              <div className="tcb-footer-line" />
              <div className="tcb-footer-label">Class Teacher</div>
            </div>
            <div className="tcb-footer-block">
              <div className="tcb-footer-line" />
              <div className="tcb-footer-label">Principal Signature</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TcCertificate;
