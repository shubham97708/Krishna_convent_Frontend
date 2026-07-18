import React, { useEffect, useState } from "react";

import BaseUrl from "../../../../services/BaseUrl";
import { getData, postData } from "../../../../services/FetchServices";

import { isUndefined } from "@syncfusion/ej2-base";
import { setPrintDocumentTitle } from "../Marksheet/printDocumentTitle";
import TcCertificate from "./TcCertificate";
const axios = require("axios");



function PcmTC(props) {



	const [getAdmissionno, setAdmissionno] = React.useState("");
    const [getAdmissionDate, setAdmissionDate] = React.useState("");
    const [getStudentId, setStudentId] = React.useState("");
    const [getStudentTcId, setStudentTcId] = React.useState("");
    const [getName, setName] = React.useState("");
	const [getFathername, setFathername] = React.useState("");
	const [getMothername, setMothername] = React.useState("");
    const [getGender, setGender] = React.useState("");
    const [getDob, setDob] = React.useState("");
    const [getCaste, setCaste] = React.useState("");
    const [getCasteCategory, setCasteCategory] = React.useState("");
    const [getReligion, setReligion] = React.useState("");
    const [getNationality, setNationality] = React.useState("");


    const [  getAdmittedClass,setAdmittedClass] = React.useState("")
    const [  getClassOption,setClassOption] = React.useState("")
    const [  getPromotion,setPromotion] = React.useState("")
    const [  getSchoolBoardResult,setSchoolBoardResult] = React.useState("")
    const [  getTotalWorkingDays,setTotalWorkingDays] = React.useState("")
    const [  getTotalDaysAttended,setTotalDaysAttended] = React.useState("")
    const [  getDateOfApplication,setDateOfApplication] = React.useState("")
    const [  getDateOfIssueCertificate,setDateOfIssueCertificate] = React.useState("")
    const [  getReasonLeaving,setReasonLeaving] = React.useState("")
    const [  getOtherRemark,setOtherRemark] = React.useState("")
    const [  getDomicile,setDomicile] = React.useState("")
    const [getSssmidno, setSssmidno] = React.useState("");
    const [getAddress, setAddress] = React.useState("");



	const [getClass, setClass] = React.useState("");
	const [getMedium, setMedium] = React.useState("");
	const [getRollno, setRollno] = React.useState("");


	const [getAdharno, setAdharno] = React.useState("");




	const [getSession, setSession] = React.useState("");



	const readAllRecords = () => {
		if( !isUndefined(props.location.res)){
		setPrintDocumentTitle(props.location.res.name, props.location.res.class);


        setAdmissionno(props.location.res.admissionno)
        setAdmissionDate(props.location.res.admissiondate)
        setStudentId(props.location.res.studentid)
        setStudentTcId(props.location.res.id)
		setName(props.location.res.name)
		setFathername(props.location.res.fathername)
		setMothername(props.location.res.mothername)
        setGender(props.location.res.gender)
        setDob(props.location.res.dob)

        setCaste (props.location.res.caste)
        setCasteCategory(props.location.res.castecategory)
        setReligion(props.location.res.religion)
        setNationality(props.location.res.nationality)


setAdmittedClass(props.location.res.admittedclass)
setClassOption(props.location.res.classoption)
setPromotion(props.location.res.promotion)
setSchoolBoardResult(props.location.res.schoolboardresult)
setTotalWorkingDays(props.location.res.totalworkingdays)
setTotalDaysAttended(props.location.res.totaldaysattended)
setDateOfApplication(props.location.res.dateofapplication)
setDateOfIssueCertificate(props.location.res.dateofIssuecertificate)
setReasonLeaving(props.location.res.reasonleaving)
setOtherRemark(props.location.res.otherremark)
setDomicile(props.location.res.domicile)

setSssmidno(props.location.res.sssmidno)



		setRollno(props.location.res.rollno)
		setAdharno(props.location.res.adharno)
		setSssmidno(props.location.res.sssmidno)


		let maxLength = 26;
		let address = (props.location.res.address).substring(0, maxLength) + '...';
		setAddress(address)

        if(props.location.res.class == "6"){
			setClass("6th")
		}else if(props.location.res.class == "7"){
			setClass("7th")
		}else if(props.location.res.class == "8"){
			setClass("8th")
		}



	//	setSession(props.location.res.session+"-"+parseInt(props.location.res.session+1))
		// if(props.location.res.medium == "eng"){
		// 	setMedium("English")
		// }else if(props.location.res.class == "hin"){
		// 	setMedium("Hindi")
		// }


		}
	}


	useEffect(function () {
		readAllRecords();

	}, []);

	const tcData = {
		studentId: getStudentId,
		tcId: getStudentTcId,
		admissionDate: getAdmissionDate,
		admissionNo: getAdmissionno,
		name: getName,
		fatherName: getFathername,
		motherName: getMothername,
		gender: getGender,
		dob: getDob,
		caste: getCaste,
		casteCategory: getCasteCategory,
		religion: getReligion,
		nationality: getNationality,
		sssmidno: getSssmidno,
		address: getAddress,
		admittedClass: getAdmittedClass,
		classOption: getClassOption,
		promotion: getPromotion,
		schoolBoardResult: getSchoolBoardResult,
		totalWorkingDays: getTotalWorkingDays,
		totalDaysAttended: getTotalDaysAttended,
		dateOfApplication: getDateOfApplication,
		dateOfIssueCertificate: getDateOfIssueCertificate,
		reasonLeaving: getReasonLeaving,
		otherRemark: getOtherRemark,
		domicile: getDomicile,
	};

	return (
		<TcCertificate
			history={props.history}
			data={tcData}
			subjects={["Hindi", "English", "Physics", "Chemistry", "Maths"]}
		/>
	);
}



export default PcmTC;
