import React, { useEffect, useState } from "react";

import './A4.css';
import backgroud from './img/second_backgraound.jpg';
import logo from './img/logo.png'
import childpic from './img/child.jpg'
import logo1 from './img/logo1.png'
import BaseUrl from "../../../../services/BaseUrl";
import { getData, postData } from "../../../../services/FetchServices";

import { isUndefined } from "@syncfusion/ej2-base";
import PrintBackButton from "./PrintBackButton";
const axios = require("axios");


function Pcm_Marksheet(props) {


	const [getHindi, setHindi] = React.useState("")
	const [getEnglish, setEnglish] = React.useState("")
	const [getPhysics, setPhysics] = React.useState("")
	const [getChemistry, setChemistry] = React.useState("")
	const [getMaths, setMaths] = React.useState("")

	const [getScience, setScience] = React.useState("")
	const [getSanskrit, setSanskrit] = React.useState("")
	const [getSoscience, setSoscience] = React.useState("")


	const [getPcmPhysicsTheory, setPcmPhysicsTheory] = React.useState("")
	const [getPcmPhysicsPractical, setPcmPhysicsPractical] = React.useState("")
	const [getPcmChemistryTheory, setPcmChemistryTheory] = React.useState("")
	const [getPcmChemistryPractical, setPcmChemistryPractical] = React.useState("")
	const [getPcmMathsTheory, setPcmMathsTheory] = React.useState("")
	const [getPcmMathsPractical, setPcmMathsPractical] = React.useState("")
	const [getPcmHindiTheory, setPcmHindiTheory] = React.useState("")
	const [getPcmHindiPractical, setPcmHindiPractical] = React.useState("")
	const [getPcmEnglishTheory, setPcmEnglishTheory] = React.useState("")
	const [getPcmEnglishPractical, setPcmEnglishPractical] = React.useState("")














	const [getClass, setClass] = React.useState("");

	const [getTotalmarks, setTotalmarks] = React.useState("");
	const [getPercentage, setPercentage] = React.useState("");
	const [getDivision, setDivision] = React.useState("");
	const [getRank, setRank] = React.useState("");
	const [getResult, setResult] = React.useState("");
	const [getSupplementry, setSupplementry] = React.useState("");

	const [getMedium, setMedium] = React.useState("");
	const [getPhoto, setPhoto] = React.useState({ icon: "", file: "" });
	const [getName, setName] = React.useState("");
	const [getFathername, setFathername] = React.useState("");
	const [getMothername, setMothername] = React.useState("");
	const [getRollno, setRollno] = React.useState("");
	const [getAdmissionno, setAdmissionno] = React.useState("");
	const [getDob, setDob] = React.useState("");
	const [getAdharno, setAdharno] = React.useState("");
	const [getSssmidno, setSssmidno] = React.useState("");
	const [getAddress, setAddress] = React.useState("");
	const [getSession, setSession] = React.useState("");
	const [getExamType, setExamType] = React.useState("");

	const [getSubject, setSubject] = React.useState("");
	const [getEnrollment, setEnrollment] = React.useState("");
	const [getMobileno, setMobileno] = React.useState("");







	const readAllRecords = () => {
		if (!isUndefined(props.location.res)) {



			let countSupplementry = 0
			let strSupplementry = ""

			if (props.location.res.hindit + props.location.res.hindip >= 33 && props.location.res.hindit + props.location.res.hindip <= 74) {
				setHindi(props.location.res.hindit + props.location.res.hindip)
				setPcmHindiTheory(props.location.res.hindit)
				setPcmHindiPractical(props.location.res.hindip)
			} else if (props.location.res.hindit + props.location.res.hindip>= 75 && props.location.res.hindit + props.location.res.hindip <= 100) {

				setHindi((props.location.res.hindit + props.location.res.hindip) + " Dist")
				setPcmHindiTheory(props.location.res.hindit)
				setPcmHindiPractical(props.location.res.hindip)
			} else {
				setHindi((props.location.res.hindit + props.location.res.hindip) + " F")
				setPcmHindiTheory(props.location.res.hindit)
				setPcmHindiPractical(props.location.res.hindip)
				countSupplementry++;
				strSupplementry = strSupplementry + " Hindi ,"
			}


			if (props.location.res.englisht + props.location.res.englishp >= 33 && props.location.res.englisht + props.location.res.englishp <= 74) {	
				setEnglish(props.location.res.englisht + props.location.res.englishp)
				setPcmEnglishPractical(props.location.res.englishp)
				setPcmEnglishTheory(props.location.res.englisht)

			} else if (props.location.res.englisht + props.location.res.englishp >= 75 && props.location.res.englisht + props.location.res.englishp <= 100) {
				setEnglish((props.location.res.englisht + props.location.res.englishp)+" Dist")
				setPcmEnglishPractical(props.location.res.englishp)
				setPcmEnglishTheory(props.location.res.englisht)
			} else {
				setEnglish((props.location.res.englisht + props.location.res.englishp)+" F")
				setPcmEnglishPractical(props.location.res.englishp)
				setPcmEnglishTheory(props.location.res.englisht)
				countSupplementry++;
				strSupplementry = strSupplementry + " English ,"
			}


			if (props.location.res.physicst+props.location.res.physicsp >= 33 && props.location.res.physicst+props.location.res.physicsp <= 74) {
				setPhysics(props.location.res.physicst+props.location.res.physicsp)
				setPcmPhysicsTheory(props.location.res.physicst)
				setPcmPhysicsPractical(props.location.res.physicsp)

			} else if (props.location.res.physicst+props.location.res.physicsp >= 75 && props.location.res.physicst+props.location.res.physicsp<= 100) {
				setPhysics((props.location.res.physicst+props.location.res.physicsp)+ " Dist")
				setPcmPhysicsTheory(props.location.res.physicst)
				setPcmPhysicsPractical(props.location.res.physicsp)
			} else {

				setPhysics((props.location.res.physicst+props.location.res.physicsp)+ " F")
				setPcmPhysicsTheory(props.location.res.physicst)
				setPcmPhysicsPractical(props.location.res.physicsp)
				countSupplementry++;
				strSupplementry = strSupplementry + " Physics ,"
			}


			if (props.location.res.chemistryt+props.location.res.chemistryp >= 33 && props.location.res.chemistryt+props.location.res.chemistryp <= 74) {
				setChemistry(props.location.res.chemistryt+props.location.res.chemistryp)
				setPcmChemistryPractical(props.location.res.chemistryp)
				setPcmChemistryTheory(props.location.res.chemistryt)
			} else if (props.location.res.chemistryt+props.location.res.chemistryp >= 75 && props.location.res.chemistryt+props.location.res.chemistryp <= 100) {
				setChemistry((props.location.res.chemistryt+props.location.res.chemistryp)+" Dist")
				setPcmChemistryPractical(props.location.res.chemistryp)
				setPcmChemistryTheory(props.location.res.chemistryt)
			} else {
				setChemistry((props.location.res.chemistryt+props.location.res.chemistryp)+" F")
				setPcmChemistryPractical(props.location.res.chemistryp)
				setPcmChemistryTheory(props.location.res.chemistryt)
				countSupplementry++;
				strSupplementry = strSupplementry + " Chemistry ,"
			}



			if (props.location.res.mathst+props.location.res.mathsp >= 33 && props.location.res.mathst+props.location.res.mathsp <= 74) {
				setMaths(props.location.res.mathst+props.location.res.mathsp)
				setPcmMathsPractical(props.location.res.mathsp)
				setPcmMathsTheory(props.location.res.mathst)

			} else if (props.location.res.mathst+props.location.res.mathsp >= 75 && props.location.res.mathst+props.location.res.mathsp <= 100) {

				setMaths((props.location.res.mathst+props.location.res.mathsp)+" Dist")
				setPcmMathsPractical(props.location.res.mathsp)
				setPcmMathsTheory(props.location.res.mathst)
			} else {
				setMaths((props.location.res.mathst+props.location.res.mathsp)+ " F")
				setPcmMathsPractical(props.location.res.mathsp)
				setPcmMathsTheory(props.location.res.mathst)
				strSupplementry = strSupplementry + " Maths ,"
			}



			setName(props.location.res.name)
			setFathername(props.location.res.fathername)
			setMothername(props.location.res.mothername)
			setRollno(props.location.res.rollno)
			setAdmissionno(props.location.res.admissionno)
			setDob(props.location.res.dob)
			setAdharno(props.location.res.adharno)
			setSssmidno(props.location.res.sssmidno)
			setEnrollment(props.location.res.enrollment)
			let maxLength = 26;
			let address = (props.location.res.address).substring(0, maxLength) + '...';
		
		
			//	setAddress(props.location.res.address)
		
			setAddress(address)

			setPhoto(`${BaseUrl}/images/${props.location.res.photo}`)


			setSession(props.location.res.session+"-"+parseInt(props.location.res.session+1))

			let totalmarks = props.location.res.hindit + props.location.res.hindip  + props.location.res.englisht + props.location.res.englishp + props.location.res.physicst+props.location.res.physicsp + props.location.res.chemistryt+props.location.res.chemistryp + props.location.res.mathst+props.location.res.mathsp 
			let percentage = parseInt((totalmarks / 500) * 100)

			if (percentage >= 33 && percentage <= 49) {
				setDivision("4th")
			} else if (percentage >= 50 && percentage <= 64) {
				setDivision("3rd")
			} else if (percentage >= 65 && percentage <= 74) {
				setDivision("2nd")
			} else if (percentage >= 75 && percentage <= 100) {
				setDivision("1st")
			} else {
				setDivision(" - ")
			}

			setTotalmarks(totalmarks)
			setPercentage(percentage)

			if (props.location.res.examtype == "quarterly") {
				setExamType("Quarterly")
			} else if (props.location.res.examtype == "halfyearly") {
				setExamType("Halfyearly")
			} else if (props.location.res.examtype == "annually") {
				setExamType("Annually")
			}

			if (props.location.res.class == "11") {
				setClass("11th")
			} else if (props.location.res.class == "12") {
				setClass("12th")
			}


			if (props.location.res.medium == "eng") {
				setMedium("English")
			} else if (props.location.res.medium == "hin") {
				setMedium("Hindi")
			}

			if (countSupplementry >= 1 && countSupplementry <= 2) {
				setResult("Supp")
				setDivision(" - ")
				setPercentage(" - ")
				setSupplementry(strSupplementry)
			} else if (countSupplementry >= 3) {
				setResult("Fail")
				setDivision(" - ")
				setPercentage(" - ")
			} else if (countSupplementry == 0) {
				setResult("Pass")
			}


			let body = {
				studentclass: props.location.res.class,
				examtype: props.location.res.examtype,
				studentmedium: props.location.res.medium
			}

			// 	let result = await postData("lockpostadd/GetRankForPrimaryStudent", body);
			// console.log("Data For Rank ",result)



			axios.post(`${BaseUrl}/lockpostadd/GetRankForPcmStudent`, body)
				.then((res) => {
					console.log("From Rank", res)
					for (var i = 0; i < res.data.length; i++) {
						if (res.data[i].studentid == props.location.res.studentid) {

							console.log("Rank Is ", res.data[i].Rank)
							setRank(res.data[i].Rank)
						}
					}

				})
				.catch((err) => {

					console.log("From Rank", err)
				});


		}
	}


	useEffect(function () {
		readAllRecords();

	}, []);


	let date = new Date()
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	let date_final = day + '-' + month + '-' + year;



	return (
		< >
			<PrintBackButton history={props.history} />
			<div className="stl_ stl_02">
				<div className="stl_03">
					<img src={backgroud} alt="" className="stl_04" />
					<img
								src={logo1}
								style={{
									position: "absolute",
									left: "8.0em",
									top: "26.7129em",
									width: "70%",
									opacity:"0.1"

								}}
							/>
							

				</div>
				<div className="stl_view">
					<div className="stl_05 stl_06">
						<div className="stl_01"
							style={{
								left: "3.7em",
								top: "3.7129em",
							}}
						>
							<span className="stl_07 stl_08 stl_09"
								style={{
									"word-spacing": "-0.0025em",
								}}
							>
								School Code : 112287 &nbsp;
							</span>
						</div>





						<div className="stl_03"
							style={{
								right: "2.7em",
								top: "2.7129em"
							}}
						>

							<img
								src={logo}
								style={{
									position: "absolute",
									left: "8.0em",
									top: "3.7129em",
									width: "12%",

								}}
							/>

							<img
								style={{
									position: "absolute",
									"pointer-events": "none",
									right: "2.0em", top: "3.7129em",
									width: "10%"
								}}
								//src={childpic}
								src={getPhoto}
							/>
						</div>

						<div className="stl_01" style={{ left: "38.8283em", top: "3.4974em" }}>
							<span className="stl_10 stl_11 stl_12" style={{ "word-spacing": "-0.0067em" }}>
								Reg No: 5303 &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "11.5117em", top: "4.5059em" }}>
						<span className="stl_13 stl_14 stl_15" style={{ "fontWeight":"bold","fontSize":"1.5em","word-spacing": "-0.0031em", "font-family": "Gill Sans Extrabold ,sans-serif" }}>
								KRISHNA CONVENT HR. SEC SCHOOL
							</span>
						</div>

						<div className="stl_01" style={{ left: "13.3442em", top: "8.9959em" }}>
							<span className="stl_16 stl_08 stl_12" style={{ "word-spacing": "-0.0047em" }}>
								A Sr. Sec. School Affiliated To MP Board MAdhya Pradesh &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "20.0842em", top: "5.9859em" }}>
							<span className="stl_17 stl_08 stl_18" style={{ "word-spacing": "0.0017em" }}>
								Banmore , Morena &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "20.0842em", top: "6.9875em" }}>
							<span className="stl_17 stl_08 stl_19" style={{ "word-spacing": "-0.0009em" }}>
								MADHYA PRADESH &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "17.2642em", top: "12.7387em" }}>
							<span className="stl_24 stl_11 stl_25" style={{ "word-spacing": "0.0023em" }}>
								Report Card ({getExamType}) &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "11.6417em", top: "14.8786em" }}>
							<span className="stl_26 stl_11 stl_27" style={{ "word-spacing": "0.0001em" }}>
								Class : {getClass}
							</span>
							<span className="stl_26 stl_11 stl_28" style={{ "word-spacing": "0.4546em" }}>
								&nbsp;
							</span>
							<span className="stl_26 stl_11 stl_29" style={{ "word-spacing": "0.0022em" }}>
								Medium : {getMedium}
							</span>
							<span className="stl_26 stl_11 stl_28" style={{ "word-spacing": "0.4523em" }}>
								&nbsp;
							</span>
							<span className="stl_26 stl_11 stl_30" style={{ "word-spacing": "-0.0034em" }}>
								Session : {getSession} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "20.2242em", top: "17.6668em" }}>
							<span className="stl_31 stl_11 stl_21" style={{ "word-spacing": "-0.001em" }}>
								Student Details &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "3.86em", top: "19.531em" }}>
							<span className="stl_32 stl_11 stl_33" style={{ "word-spacing": "-0.0042em" }}>
								Admission No
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "1.1147em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_29" style={{ "word-spacing": "0.4548em" }}>
								: {getAdmissionno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "19.531em" }}>
							<span className="stl_32 stl_11 stl_34" style={{ "word-spacing": "-0.0034em" }}>
								Roll No &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_35">
								DOB &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "22.3835em" }}>
							<span className="stl_32 stl_11 stl_21" style={{ "word-spacing": "-0.0026em" }}>
								Adhar No.</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "0.2242em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_36" style={{ "word-spacing": "0.2183em" }}>
								: {getAdharno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "23.8035em" }}>
							<span className="stl_32 stl_11 stl_37" style={{ "word-spacing": "-0.0004em" }}>
								SSSM-ID No. :
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "0.2162em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_38" style={{ "word-spacing": "0.0086em" }}>
								{getSssmidno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "25.1035em" }}>
							<span className="stl_32 stl_11 stl_37" style={{ "word-spacing": "-0.0004em" }}>
							Enrollment : 
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "0.2162em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_38" style={{ "word-spacing": "0.0086em" }}>
								{getEnrollment} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "36.8183em", top: "19.531em" }}>
							<span className="stl_32 stl_11 stl_40" style={{ "word-spacing": "0.4602em" }}>
								: {getRollno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "36.8483em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_33" style={{ "word-spacing": "0.2257em" }}>
								: {getDob} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "3.86em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_27" style={{ "word-spacing": "-0.0161em" }}>
								Student Name
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "0.886em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_35" style={{ "word-spacing": "0.4428em" }}>
								:
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "-0.0114em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_33" style={{ "word-spacing": "0.0009em" }}>
								{getName} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "3.86em", top: "22.3835em" }}>
							<span className="stl_32 stl_11 stl_41">
								Mother
							</span>
							<span className="stl_42 stl_11 stl_43">
								’
							</span>
							<span className="stl_32 stl_11 stl_20" style={{ "word-spacing": "0.002em" }}>
								s Name
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "0.4411em" }}>
								&nbsp;</span>
							<span className="stl_32 stl_11 stl_44" style={{ "word-spacing": "0.4295em" }}>
								: Smt.
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "-0.0048em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_19" style={{ "word-spacing": "-0.0011em" }}>
								{getMothername} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "3.86em", top: "23.8035em" }}>
							<span className="stl_32 stl_11 stl_45">
								Father
							</span>
							<span className="stl_42 stl_11 stl_46">
								’
							</span>
							<span className="stl_32 stl_11 stl_20" style={{ "word-spacing": "0.002em" }}>
								s Name
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "0.8855em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_47" style={{ "word-spacing": "0.4425em" }}>
								: Shri.
							</span>
							<span className="stl_32 stl_11 stl_28" style={{ "word-spacing": "-0.0035em" }}>
								&nbsp;
							</span>
							<span className="stl_32 stl_11 stl_36" style={{ "word-spacing": "0.0031em" }}>
								{getFathername} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "3.86em", top: "25.2335em" }}>
							<span className="stl_32 stl_11 stl_20">
								Address &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.1417em", top: "25.2335em" }}>
							<span className="stl_32 stl_11 stl_33" style={{ "word-spacing": "0.4479em" }}>
								: {getAddress}
							</span>

						</div>
						<div className="stl_01" style={{ left: "19.582em", top: "28.7793em" }}>
							<span className="stl_48 stl_11 stl_29" style={{ "word-spacing": "-0.0014em" }}>
								Academic Performance
							</span>
							<span className="stl_48 stl_11 stl_28" style={{ "word-spacing": "0.2297em" }}>
								&nbsp;
							</span>
							{/* <span className="stl_48 stl_11 stl_25" style={{ "word-spacing": "-0.0032em" }}>
								(8 Point Scale) &nbsp;
							</span> */}
						</div>


						<div className="stl_01" style={{ left: "5.682em", top: "31.2535em" }}>
							<span className="stl_32 stl_11 stl_49">
								SUBJECTS &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "15.682em", top: "30.5535em" }}>
							<span className="stl_32 stl_11 stl_49">
								Assignment &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "13.182em", top: "31.9535em" }}>
							<span className="stl_32 stl_11 stl_49">
								(Max) &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "13.9758em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								20 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "13.9758em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								20 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "13.9758em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								20 &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "13.9758em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								20 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "13.9758em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								20 &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "13.6758em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "19.682em", top: "31.9535em" }}>
							<span className="stl_32 stl_11 stl_49">
								(Obtain) &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "20.682em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmEnglishPractical} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "20.682em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmHindiPractical} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "20.682em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmPhysicsPractical} &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "20.682em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmChemistryPractical} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "20.682em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmMathsPractical} &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "20.682em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmEnglishPractical + getPcmHindiPractical + getPcmPhysicsPractical + getPcmChemistryPractical + getPcmMathsPractical} &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "29.182em", top: "30.5535em" }}>
							<span className="stl_32 stl_11 stl_49">
								Theory &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "26.682em", top: "31.9535em" }}>
							<span className="stl_32 stl_11 stl_49">
								(Max) &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "27.1758em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								80 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "27.1758em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								80 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "27.1758em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								80 &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "27.1758em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								80 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "27.1758em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								80 &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "27.1758em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								400 &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "32.682em", top: "31.9535em" }}>
							<span className="stl_32 stl_11 stl_49">
								(Obtain) &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "33.682em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmEnglishTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "33.682em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmHindiTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "33.682em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmPhysicsTheory} &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "33.682em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmChemistryTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "33.682em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmMathsTheory} &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "33.682em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPcmEnglishTheory + getPcmHindiTheory + getPcmPhysicsTheory + getPcmChemistryTheory + getPcmMathsTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.182em", top: "31.1535em" }}>
							<span className="stl_32 stl_11 stl_49">
								TOTAL &nbsp;
							</span>
						</div>

						{/* <div className="stl_01" style={{ left: "40.682em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getEnglish} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.682em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getHindi} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.682em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getPhysics} &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "40.682em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getChemistry} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.682em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getMaths} &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "40.682em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getEnglish + getHindi + getPhysics + getChemistry + getMaths} &nbsp;
							</span>
						</div> */}



						<div className="stl_01" style={{ left: "5.882em", top: "34.9654em" }}>
							<span className="stl_52 stl_11 stl_49">
								HINDI &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "5.882em", top: "33.4654em" }}>
							<span className="stl_52 stl_11 stl_49">
								ENGLISH &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "40.8283em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getEnglish} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.8283em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getHindi} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.8283em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getPhysics} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.8283em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getChemistry} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.8283em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getMaths} &nbsp;
							</span>
						</div>

					

						<div className="stl_01" style={{ left: "40.8083em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_55">
								{getTotalmarks} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "5.682em", top: "36.437em" }}>
							<span className="stl_52 stl_11 stl_53">


								PHYSICS &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "5.482em", top: "37.897em" }}>
							<span className="stl_52 stl_11 stl_29">
								CHEMISTRY &nbsp;

							</span>
						</div>

						<div className="stl_01" style={{ left: "6.182em", top: "39.367em" }}>
							<span className="stl_52 stl_11 stl_38">

								MATHS &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "6.182em", top: "42.297em" }}>
							<span className="stl_52 stl_11 stl_56" style={{ "word-spacing": "0.0028em" }}>
								Total
							</span>
						</div>



						<div className="stl_01" style={{ left: "19.152em", top: "45.2328em" }}>
							<span className="stl_26 stl_11 stl_57" style={{ "word-spacing": "0.0012em" }}>
								Co-Scholastic Areas
							</span>

						</div>

						<div className="stl_01" style={{ left: "11.88em", top: "46.9952em" }}>
							<span className="stl_32 stl_11 stl_23" style={{ "word-spacing": "0.0004em" }}>
								PERCENTAGE &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.88em", top: "48.5652em" }}>
							<span className="stl_32 stl_11 stl_59" style={{ "word-spacing": "-0.0016em" }}>
								DIVISION &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.98em", top: "50.2352em" }}>
							<span className="stl_32 stl_11 stl_60" style={{ "word-spacing": "-0.0033em" }}>
								RANK &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.78em", top: "51.9077em" }}>
							<span className="stl_32 stl_11 stl_50">
								RESULT &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0583em", top: "46.9028em" }}>
							<span className="stl_26 stl_11 stl_28">
								{getPercentage}%
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0583em", top: "48.5728em" }}>
							<span className="stl_26 stl_11 stl_28">
								{getDivision}
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0783em", top: "50.2453em" }}>
							<span className="stl_26 stl_11 stl_28">
								{getRank}
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0583em", top: "51.9153em" }}>
							<span className="stl_26 stl_11 stl_28">
								{getResult}
							</span>
						</div>

						<div className="stl_01" style={{ left: "4.0583em", top: "53.6153em" }}>

							{getSupplementry == "" ? (<span className="stl_26 stl_11 stl_28">

							</span>) : (<span className="stl_26 stl_11 stl_28">
								Supplementry In ({getSupplementry})
							</span>)}

						</div>

						<div className="stl_01" style={{ left: "3.88em", top: "55.2534em" }}>
							<span className="stl_48 stl_11 stl_12" style={{ "word-spacing": "0.0015em" }}>
								Class Teacher Remarks : &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "3.88em", top: "58.6237em" }}>
							<span className="date stl_08 stl_27" style={{ "word-spacing": "-0.0012em" }}>
								Date : {date_final}&nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "3.88em", top: "63.2734em" }}>
							<span className="stl_61 stl_08 stl_62" style={{ "word-spacing": "-0.001em" }}>
							Class Teacher &nbsp;
							</span>
						</div>

						{/* <div className="stl_01" style={{ left: "20.0242em", top: "64.2734em" }}>
							<span className="stl_61 stl_08 stl_49" style={{ "word-spacing": "-0.0006em" }}>
								Class Teacher &nbsp;
							</span>
						</div> */}


						<div className="stl_01" style={{ left: "39.7583em", top: "63.2734em" }}>
							<span className="stl_61 stl_08 stl_28">
								Principal &nbsp;
							</span>
						</div>

					</div>
				</div>

			</div>
		</>
	)
}



export default Pcm_Marksheet;