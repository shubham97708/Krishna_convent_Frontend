import React, { useEffect, useState } from "react";

import './tc.css';
import backgroud from './img/backgroud.png';
import logo1 from './img/logo1.png'
import logo from './img/logo.png'

import capture from './img/Capture.PNG'


import BaseUrl from "../../../../services/BaseUrl";
import { getData, postData } from "../../../../services/FetchServices";

import { isUndefined } from "@syncfusion/ej2-base";
import PrintBackButton from "../Marksheet/PrintBackButton";
const axios = require("axios");



function PriTC(props) {



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








    return (
        < >{console.log("TC Data : ",props)}
            <PrintBackButton history={props.history} />
            <div className="tc stl_ stl_02">
                <div className="tc stl_03">
                    <img
                        src={backgroud}
                        alt=""
                        className="tc stl_04" />
                    <img
                        src={logo1}
                        style={{
                            position: "absolute",
                            left: "8.0em",
                            top: "26.7129em",
                            width: "70%",
                            opacity: "0.1"

                        }}
                    />

                    <img
                        src={capture}
                        style={{
                            position: "absolute",
                            left: "9.0em",
                            top: "11.7129em",
                            //width: "10%",

                        }}
                    />
                </div>


                <div className="tc stl_03"
                    style={{
                        right: "2.7em",
                        top: "2.7129em"
                    }}
                >

                    <img
                        src={logo}
                        style={{
                            position: "absolute",
                            left: "5.0em",
                            top: "1.7129em",
                            width: "16%",

                        }}
                    />


                </div>


















                <div className="tc stl_01" style={{ left: "41.8283em", top: "1.9974em" }}>
                    <span className="tc stl_10 stl_11 stl_12" style={{ "word-spacing": "-0.0067em" }}>
                        Reg No: 5303 &nbsp;
                    </span>
                </div>


                <div className="tc stl_01 stl_07"
                    style={{
                        left: "2.7em",
                        top: "2.4129em",
                    }}
                >


                    <span
                        className="tc stl_13 stl_09 stl_12"
                        style={{ "word-spacing": "-0.0001em" }}
                    >
                        School Code
                    </span>

                    <span className="tc stl_14 stl_09 stl_12"
                        style={{
                            "word-spacing": "-0.0025em",
                        }}
                    >
                        : 112287 &nbsp;
                    </span>
                </div>


                <div className="tc stl_01 stl_07"
                    style={{
                        left: "2.7em",
                        top: "12.7129em",
                    }}
                >


                    <span
                        className="tc stl_13 stl_09 stl_12"
                        style={{ "word-spacing": "-0.0001em" }}
                    >
                        Admission Date/No. 
                    </span>

                    <span className="tc stl_14 stl_09 stl_12"
                        style={{
                            "word-spacing": "-0.0002em",
                        }}
                    >
                        :&nbsp; {getAdmissionDate}/{getAdmissionno} &nbsp;
                    </span>
                </div>







{/* 
                <div
                    className="tc stl_01 stl_07"
                    style={{ left: "21.78em", top: "12.6856em" }}
                >
                    <span
                        className="tc stl_13 stl_09 stl_12"
                        style={{ "word-spacing": "-0.0001em" }}
                    >
                        Admission No:
                    </span>
                    <span
                        className="tc stl_14 stl_09 stl_12"
                    >
                        200517901 &nbsp;
                    </span>
                </div> */}










                <div className="tc stl_01" style={{ left: "11.5117em", top: "3.4059em" }}>
                    <span className="tc stl_13 stl_14 stl_15" style={{ "fontWeight": "bold", "fontSize": "1.5em", "word-spacing": "-0.0031em", "font-family": "Gill Sans Extrabold ,sans-serif" }}>
                        KRISHNA CONVENT HR. SEC SCHOOL
                    </span>
                </div>

                <div className="tc stl_01" style={{ left: "13.3442em", top: "8.5959em" }}>
                    <span className="tc stl_16 stl_08 stl_12" style={{ "word-spacing": "-0.0047em" }}>
                        A Sr. Sec. School Affiliated To MP Board MAdhya Pradesh &nbsp;
                    </span>
                </div>


                <div className="tc stl_01" style={{ left: "20.0842em", top: "5.5859em" }}>
                    <span className="tc stl_17 stl_08 stl_18" style={{ "word-spacing": "0.0017em" }}>
                        Banmore , Morena &nbsp;
                    </span>
                </div>


                <div className="tc stl_01" style={{ left: "20.0842em", top: "6.5875em" }}>
                    <span className="tc stl_17 stl_08 stl_19" style={{ "word-spacing": "-0.0009em" }}>
                        MADHYA PRADESH &nbsp;
                    </span>
                </div>







                <div className="tc stl_view">
                    <div className="tc stl_05 stl_06">
                       

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "48.7882em", top: "12.6856em" }}
                        >
                            <span
                                className="tc stl_13 stl_09 stl_16"
                                style={{ "word-spacing": "0.0269em" }}
                            >
                                TC No:
                            </span>
                            <span
                                className="tc stl_14 stl_09 stl_12"
                            >
                                {getStudentId}/{getStudentTcId} &nbsp;
                            </span>
                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "21.3723em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "-0.0001em" }}
                            >
                                Full Name Of Pupil:
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_18"
                                style={{ "word-spacing": "-0.002em" }}
                            >
                                {getName} &nbsp;
                            </span>
                        </div>








                   











                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "24.0734em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_19"
                                style={{ "word-spacing": "0.0031em" }}
                            >
                                Father's/Guardian's Name:
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_20"
                                style={{ "word-spacing": "-0.0018em" }}
                            >
                               {getFathername} &nbsp;
                            </span>
                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ "left": "2.8964em", "top": "27.3745em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Mother's Name:
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_21"
                                style={{ "word-spacing": "0.0118em" }}
                            >
                                {getMothername} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "30.2756em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Gender :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                               {getGender} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "30.0756em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Caste :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_22"
                            >
                                {getCaste} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ "left": "30.9063em", top: "33.3767em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_23"
                                style={{ "word-spacing": "0.0081em" }}
                            >
                                Religion :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getReligion} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "43.8485em", top: "30.0756em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Category :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getCasteCategory} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "43.8485em", top: "33.3767em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Nationality :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                               {getNationality} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "33.3767em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "-0.0001em" }}
                            >
                                Date Of Birth :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getDob} &nbsp;
                            </span>
                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "36.0777em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                In Which Standard The Pupil Admitted To The School

                            </span>
                           
                        </div>






                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "36.0777em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_24"
                                style={{ "word-spacing": "0.0069em" }}
                            >
                                Standard In Which The Pupil Was Studying At The &nbsp;
                            </span>
                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "37.6533em" }}
                        >
                           
                            <span
                                className="tc stl_17 stl_09 stl_26"
                            >
                               Class {getAdmittedClass} &nbsp;
                            </span>
                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "37.6533em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Time Of Leaving The School :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12">
                              Class {getClassOption}&nbsp;
                            </span>
                        </div>

                      
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "50.6953em", "z-index": "701" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                School Board Annual Examination Last
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_29"
                            >
                                T
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12">
                                a
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                            >
                                ken &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "25.9063em", top: "42.1561em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_30"
                                style={{ "word-spacing": "0.0052em", fontSize: "1.3em", fontWeight: "bolder" }}
                            >
                                SUBJECTS STUDIED
                            </span>

                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "52.5709em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_31"
                                style={{ "word-spacing": "0.0072em" }}
                            >
                                With Result :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_32"
                                style={{ "word-spacing": "0.0097em" }}
                            >
                                {getSchoolBoardResult} &nbsp;
                            </span>
                        </div>

                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "3.9063em", top: "47.1317em" }}
                        >
                            <span
                                className="tc stl_17 stl_09 stl_33"
                                style={{ "word-spacing": "0.0005em" }}
                            >
                                1.Hindi&nbsp;
                            </span>
                        </div>








                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "11.9063em", top: "47.1317em" }}
                        >
                            <span
                                className="tc stl_17 stl_09 stl_33"
                                style={{ "word-spacing": "0.0005em" }}
                            >
                                2.English&nbsp;
                            </span>
                        </div>




                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "22.9063em", top: "47.1317em" }}
                        >
                            <span
                                className="tc stl_17 stl_09 stl_33"
                                style={{ "word-spacing": "0.0005em" }}
                            >
                                3.Maths &nbsp;
                            </span>
                        </div>




                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "31.9063em", top: "47.1317em" }}
                        >
                            <span
                                className="tc stl_17 stl_09 stl_33"
                                style={{ "word-spacing": "0.0005em" }}
                            >
                                4.GK &nbsp;
                            </span>
                        </div>





                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "40.9063em", top: "47.1317em" }}
                        >
                            <span
                                className="tc stl_17 stl_09 stl_33"
                                style={{ "word-spacing": "0.0005em" }}
                            >
                                5.EVS &nbsp;
                            </span>
                        </div>





                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "49.9063em", top: "47.1317em" }}
                        >
                            <span
                                className="tc stl_17 stl_09 stl_33"
                                style={{ "word-spacing": "0.0005em" }}
                            >
                                6.Computer &nbsp;
                            </span>
                        </div>











                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "50.6953em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Whether Qualified For Promotion
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_11"
                            >
                                T
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                o
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                            >
                                T
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                he Higher &nbsp;
                            </span>
                        </div>

                       
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "52.5709em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_35"
                                style={{ "word-spacing": "0.0126em" }}
                            >
                                Class If Yes, Specify :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_26"
                            >
                                {getPromotion} &nbsp;
                            </span>
                        </div>
                      


                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "55.6345em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_11"
                            >
                                T
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                            >
                                o
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_36"
                                style={{ "word-spacing": "0.003em" }}
                            >
                                tal Number Of Working Days Upto The Date Of
                            </span>
                        </div>



                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "29.9063em", top: "55.6345em" }}
                        >



                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0.9414em" }}
                            >
                                &nbsp;
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_11"
                            >
                                T
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                            >
                                o
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                tal Number Of School Days Attended :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                               {getTotalDaysAttended} &nbsp;
                            </span>
                        </div>


                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "57.0101em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "-0.0002em" }}
                            >
                                Leaving :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getTotalWorkingDays} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "60.0737em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "-0.0001em" }}
                            >
                                Date Of Application For Certificate :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getDateOfApplication} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "2.8964em", top: "63.0748em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_19"
                                style={{ "word-spacing": "0.0032em" }}
                            >
                                Reason For Leaving School :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_37"
                                style={{ "word-spacing": "0.0162em" }}

                            >
                                {getReasonLeaving} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "60.0737em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "-0.0001em" }}
                            >
                                Date Of Issue Of Certificate :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getDateOfIssueCertificate} &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "63.0748em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_30"
                                style={{ "word-spacing": "0.0053em" }}
                            >
                                Other Remakrks :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getOtherRemark} &nbsp;
                            </span>
                        </div>


                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "30.9063em", top: "65.5748em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_30"
                                style={{ "word-spacing": "0.0053em" }}
                            >
                                Domicile of MP :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getDomicile} &nbsp;
                            </span>
                        </div>


                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "02.9063em", top: "65.5748em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_30"
                                style={{ "word-spacing": "0.0053em" }}
                            >
                                SSSM-ID No. :
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                                {getSssmidno} &nbsp;
                            </span>
                        </div>





                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "02.9063em", top: "68.1748em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_30"
                                style={{ "word-spacing": "0.0053em" }}
                            >
                                Address:
                            </span>
                            <span
                                className="tc stl_17 stl_09 stl_12"
                            >
                               {getAddress} &nbsp;
                            </span>
                        </div>













                      
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "20.5939em", top: "78.3926em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Principal Signature &nbsp;
                            </span>
                        </div>
                        <div
                            className="tc stl_01 stl_07"
                            style={{ left: "6.0046em", top: "78.3926em" }}
                        >
                            <span
                                className="tc stl_08 stl_09 stl_12"
                                style={{ "word-spacing": "0em" }}
                            >
                                Class
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_11"
                            >
                                T
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                            >
                                e
                            </span>
                            <span
                                className="tc stl_08 stl_09 stl_12"
                            >
                                acher &nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default PriTC;