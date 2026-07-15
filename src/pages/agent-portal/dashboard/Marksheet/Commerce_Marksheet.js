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


function Commerce_Marksheet(props) {

	const hasIt = !isUndefined(props.location.res) && (props.location.res.optionalsubject || "").toLowerCase().includes("computer application");
	const rowShift = hasIt ? 1.475 : 0;

	const [getHindi, setHindi] = React.useState("")
	const [getEnglish, setEnglish] = React.useState("")
	const [getBusiness, setBusiness] = React.useState("")
	const [getAccountancy, setAccountancy] = React.useState("")
	const [getEconomics, setEconomics] = React.useState("")

	const [getScience, setScience] = React.useState("")
	const [getSanskrit, setSanskrit] = React.useState("")
	const [getSoscience, setSoscience] = React.useState("")


	const [getCommerceBusinessTheory, setCommerceBusinessTheory] = React.useState("")
	const [getCommerceBusinessPractical, setCommerceBusinessPractical] = React.useState("")
	const [getCommerceAccountancyTheory, setCommerceAccountancyTheory] = React.useState("")
	const [getCommerceAccountancyPractical, setCommerceAccountancyPractical] = React.useState("")
	const [getCommerceEconomicsTheory, setCommerceEconomicsTheory] = React.useState("")
	const [getCommerceEconomicsPractical, setCommerceEconomicsPractical] = React.useState("")
	const [getCommerceHindiTheory, setCommerceHindiTheory] = React.useState("")
	const [getCommerceHindiPractical, setCommerceHindiPractical] = React.useState("")
	const [getCommerceEnglishTheory, setCommerceEnglishTheory] = React.useState("")
	const [getCommerceEnglishPractical, setCommerceEnglishPractical] = React.useState("")
	const [getIt, setIt] = React.useState("")
	const [getCommerceItTheory, setCommerceItTheory] = React.useState(0)
	const [getCommerceItPractical, setCommerceItPractical] = React.useState(0)














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
				setCommerceHindiTheory(props.location.res.hindit)
				setCommerceHindiPractical(props.location.res.hindip)
			} else if (props.location.res.hindit + props.location.res.hindip>= 75 && props.location.res.hindit + props.location.res.hindip <= 100) {

				setHindi((props.location.res.hindit + props.location.res.hindip) + " Dist")
				setCommerceHindiTheory(props.location.res.hindit)
				setCommerceHindiPractical(props.location.res.hindip)
			} else {
				setHindi((props.location.res.hindit + props.location.res.hindip) + " F")
				setCommerceHindiTheory(props.location.res.hindit)
				setCommerceHindiPractical(props.location.res.hindip)
				countSupplementry++;
				strSupplementry = strSupplementry + " Hindi ,"
			}


			if (props.location.res.englisht + props.location.res.englishp >= 33 && props.location.res.englisht + props.location.res.englishp <= 74) {	
				setEnglish(props.location.res.englisht + props.location.res.englishp)
				setCommerceEnglishPractical(props.location.res.englishp)
				setCommerceEnglishTheory(props.location.res.englisht)

			} else if (props.location.res.englisht + props.location.res.englishp >= 75 && props.location.res.englisht + props.location.res.englishp <= 100) {
				setEnglish((props.location.res.englisht + props.location.res.englishp)+" Dist")
				setCommerceEnglishPractical(props.location.res.englishp)
				setCommerceEnglishTheory(props.location.res.englisht)
			} else {
				setEnglish((props.location.res.englisht + props.location.res.englishp)+" F")
				setCommerceEnglishPractical(props.location.res.englishp)
				setCommerceEnglishTheory(props.location.res.englisht)
				countSupplementry++;
				strSupplementry = strSupplementry + " English ,"
			}


			if (props.location.res.businesst+props.location.res.businessp >= 33 && props.location.res.businesst+props.location.res.businessp <= 74) {
				setBusiness(props.location.res.businesst+props.location.res.businessp)
				setCommerceBusinessTheory(props.location.res.businesst)
				setCommerceBusinessPractical(props.location.res.businessp)

			} else if (props.location.res.businesst+props.location.res.businessp >= 75 && props.location.res.businesst+props.location.res.businessp<= 100) {
				setBusiness((props.location.res.businesst+props.location.res.businessp)+ " Dist")
				setCommerceBusinessTheory(props.location.res.businesst)
				setCommerceBusinessPractical(props.location.res.businessp)
			} else {

				setBusiness((props.location.res.businesst+props.location.res.businessp)+ " F")
				setCommerceBusinessTheory(props.location.res.businesst)
				setCommerceBusinessPractical(props.location.res.businessp)
				countSupplementry++;
				strSupplementry = strSupplementry + " Business ,"
			}


			if (props.location.res.accountancyt+props.location.res.accountancyp >= 33 && props.location.res.accountancyt+props.location.res.accountancyp <= 74) {
				setAccountancy(props.location.res.accountancyt+props.location.res.accountancyp)
				setCommerceAccountancyPractical(props.location.res.accountancyp)
				setCommerceAccountancyTheory(props.location.res.accountancyt)
			} else if (props.location.res.accountancyt+props.location.res.accountancyp >= 75 && props.location.res.accountancyt+props.location.res.accountancyp <= 100) {
				setAccountancy((props.location.res.accountancyt+props.location.res.accountancyp)+" Dist")
				setCommerceAccountancyPractical(props.location.res.accountancyp)
				setCommerceAccountancyTheory(props.location.res.accountancyt)
			} else {
				setAccountancy((props.location.res.accountancyt+props.location.res.accountancyp)+" F")
				setCommerceAccountancyPractical(props.location.res.accountancyp)
				setCommerceAccountancyTheory(props.location.res.accountancyt)
				countSupplementry++;
				strSupplementry = strSupplementry + " Accountancy ,"
			}



			if (props.location.res.economicst+props.location.res.economicsp >= 33 && props.location.res.economicst+props.location.res.economicsp <= 74) {
				setEconomics(props.location.res.economicst+props.location.res.economicsp)
				setCommerceEconomicsPractical(props.location.res.economicsp)
				setCommerceEconomicsTheory(props.location.res.economicst)

			} else if (props.location.res.economicst+props.location.res.economicsp >= 75 && props.location.res.economicst+props.location.res.economicsp <= 100) {

				setEconomics((props.location.res.economicst+props.location.res.economicsp)+" Dist")
				setCommerceEconomicsPractical(props.location.res.economicsp)
				setCommerceEconomicsTheory(props.location.res.economicst)
			} else {
				setEconomics((props.location.res.economicst+props.location.res.economicsp)+ " F")
				setCommerceEconomicsPractical(props.location.res.economicsp)
				setCommerceEconomicsTheory(props.location.res.economicst)
				strSupplementry = strSupplementry + " Economics ,"
			}


			if (hasIt) {
				setCommerceItTheory(props.location.res.itt)
				setCommerceItPractical(props.location.res.itp)
				if (props.location.res.itt+props.location.res.itp >= 75 && props.location.res.itt+props.location.res.itp <= 100) {
					setIt((props.location.res.itt+props.location.res.itp)+" Dist")
				} else if (props.location.res.itt+props.location.res.itp >= 33 && props.location.res.itt+props.location.res.itp <= 74) {
					setIt(props.location.res.itt+props.location.res.itp)
				} else {
					setIt((props.location.res.itt+props.location.res.itp)+ " F")
				}
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

			let totalmarks = props.location.res.hindit + props.location.res.hindip  + props.location.res.englisht + props.location.res.englishp + props.location.res.businesst+props.location.res.businessp + props.location.res.accountancyt+props.location.res.accountancyp + props.location.res.economicst+props.location.res.economicsp
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



			axios.post(`${BaseUrl}/lockpostadd/GetRankForCommerceStudent`, body)
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
						</div>

						<div className="stl_01" style={{ left: "12.2em", top: "19.531em" }}>
							<span className="stl_32 stl_11 stl_29" style={{ "word-spacing": "0.4548em" }}>
								: {getAdmissionno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "22.3835em" }}>
							<span className="stl_32 stl_11 stl_21" style={{ "word-spacing": "-0.0026em" }}>
								Adhar No.
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.3em", top: "22.3835em" }}>
							<span className="stl_32 stl_11 stl_36" style={{ "word-spacing": "0.2183em" }}>
								: {getAdharno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "23.8035em" }}>
							<span className="stl_32 stl_11 stl_37" style={{ "word-spacing": "-0.0004em" }}>
								SSSM-ID No.
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.3em", top: "23.8035em" }}>
							<span className="stl_32 stl_11 stl_38" style={{ "word-spacing": "0.0086em" }}>
								: {getSssmidno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "25.1035em" }}>
							<span className="stl_32 stl_11 stl_37" style={{ "word-spacing": "-0.0004em" }}>
							Enrollment
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.3em", top: "25.1035em" }}>
							<span className="stl_32 stl_11 stl_38" style={{ "word-spacing": "0.0086em" }}>
								: {getEnrollment} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "19.531em" }}>
							<span className="stl_32 stl_11 stl_34" style={{ "word-spacing": "-0.0034em" }}>
								Roll No &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.3em", top: "19.531em" }}>
							<span className="stl_32 stl_11 stl_40" style={{ "word-spacing": "0.4602em" }}>
								: {getRollno} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "31.0358em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_35">
								DOB &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.3em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_33" style={{ "word-spacing": "0.2257em" }}>
								: {getDob} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "3.86em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_27" style={{ "word-spacing": "-0.0161em" }}>
								Student Name
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.2em", top: "20.9535em" }}>
							<span className="stl_32 stl_11 stl_33" style={{ "word-spacing": "0.0009em" }}>
								: {getName} &nbsp;
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
						</div>

						<div className="stl_01" style={{ left: "12.2em", top: "22.3835em" }}>
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
						</div>

						<div className="stl_01" style={{ left: "12.2em", top: "23.8035em" }}>
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

						<div className="stl_01" style={{ left: "12.2em", top: "25.2335em" }}>
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

						{hasIt && (
							<div className="stl_01" style={{ left: "13.9758em", top: "40.8402em" }}>
								<span className="stl_32 stl_11 stl_40">
									30 &nbsp;
								</span>
							</div>
						)}

						<div className="stl_01" style={{ left: "13.6758em", top: `${42.2952 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_40">
								{100 + (hasIt ? 30 : 0)} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "19.682em", top: "31.9535em" }}>
							<span className="stl_32 stl_11 stl_49">
								(Obtain) &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "20.682em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceEnglishPractical} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "20.682em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceHindiPractical} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "20.682em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceBusinessPractical} &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "20.682em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceAccountancyPractical} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "20.682em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceEconomicsPractical} &nbsp;
							</span>
						</div>

						{hasIt && (
							<div className="stl_01" style={{ left: "20.682em", top: "40.8402em" }}>
								<span className="stl_32 stl_11 stl_40">
									{getCommerceItPractical} &nbsp;
								</span>
							</div>
						)}


						<div className="stl_01" style={{ left: "20.682em", top: `${42.2952 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceEnglishPractical + getCommerceHindiPractical + getCommerceBusinessPractical + getCommerceAccountancyPractical + getCommerceEconomicsPractical + (hasIt ? getCommerceItPractical : 0)} &nbsp;
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

						{hasIt && (
							<div className="stl_01" style={{ left: "27.1758em", top: "40.8402em" }}>
								<span className="stl_32 stl_11 stl_40">
									70 &nbsp;
								</span>
							</div>
						)}

						<div className="stl_01" style={{ left: "27.1758em", top: `${42.2952 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_40">
								{400 + (hasIt ? 70 : 0)} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "32.682em", top: "31.9535em" }}>
							<span className="stl_32 stl_11 stl_49">
								(Obtain) &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "33.682em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceEnglishTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "33.682em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceHindiTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "33.682em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceBusinessTheory} &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "33.682em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceAccountancyTheory} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "33.682em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceEconomicsTheory} &nbsp;
							</span>
						</div>

						{hasIt && (
							<div className="stl_01" style={{ left: "33.682em", top: "40.8402em" }}>
								<span className="stl_32 stl_11 stl_40">
									{getCommerceItTheory} &nbsp;
								</span>
							</div>
						)}


						<div className="stl_01" style={{ left: "33.682em", top: `${42.2952 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_40">
								{getCommerceEnglishTheory + getCommerceHindiTheory + getCommerceBusinessTheory + getCommerceAccountancyTheory + getCommerceEconomicsTheory + (hasIt ? getCommerceItTheory : 0)} &nbsp;
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
								{getBusiness} &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "40.682em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getAccountancy} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.682em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getEconomics} &nbsp;
							</span>
						</div>



						<div className="stl_01" style={{ left: "40.682em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								{getEnglish + getHindi + getBusiness + getAccountancy + getEconomics} &nbsp;
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
								{getBusiness} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.8283em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getAccountancy} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "40.8283em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getEconomics} &nbsp;
							</span>
						</div>

						{hasIt && (
							<div className="stl_01" style={{ left: "40.8283em", top: "40.8402em" }}>
								<span className="stl_32 stl_11 stl_54">
									{getIt} &nbsp;
								</span>
							</div>
						)}


						<div className="stl_01" style={{ left: "40.8083em", top: `${42.2952 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_55">
								{getTotalmarks + (hasIt ? getCommerceItTheory + getCommerceItPractical : 0)} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "5.682em", top: "36.437em" }}>
							<span className="stl_52 stl_11 stl_53">


								BUSINESS &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "4.482em", top: "37.897em" }}>
							<span className="stl_52 stl_11 stl_29">
								ACCOUNTANCY &nbsp;

							</span>
						</div>

						<div className="stl_01" style={{ left: "4.982em", top: "39.367em" }}>
							<span className="stl_52 stl_11 stl_38">

								 ECONOMICS &nbsp;
							</span>
						</div>

						{hasIt && (
							<div className="stl_01" style={{ left: "5.682em", top: "40.8402em" }}>
								<span className="stl_52 stl_11 stl_53">
									IT &nbsp;
								</span>
							</div>
						)}



						<div className="stl_01" style={{ left: "6.182em", top: `${42.297 + rowShift}em` }}>
							<span className="stl_52 stl_11 stl_56" style={{ "word-spacing": "0.0028em" }}>
								Total
							</span>
						</div>



						<div className="stl_01" style={{ left: "19.152em", top: `${45.2328 + rowShift}em` }}>
							<span className="stl_26 stl_11 stl_57" style={{ "word-spacing": "0.0012em" }}>
								Co-Scholastic Areas
							</span>

						</div>

						<div className="stl_01" style={{ left: "11.88em", top: `${46.9952 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_23" style={{ "word-spacing": "0.0004em" }}>
								PERCENTAGE &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.88em", top: `${48.5652 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_59" style={{ "word-spacing": "-0.0016em" }}>
								DIVISION &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.98em", top: `${50.2352 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_60" style={{ "word-spacing": "-0.0033em" }}>
								RANK &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "12.78em", top: `${51.9077 + rowShift}em` }}>
							<span className="stl_32 stl_11 stl_50">
								RESULT &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0583em", top: `${46.9028 + rowShift}em` }}>
							<span className="stl_26 stl_11 stl_28">
								{getPercentage}%
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0583em", top: `${48.5728 + rowShift}em` }}>
							<span className="stl_26 stl_11 stl_28">
								{getDivision}
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0783em", top: `${50.2453 + rowShift}em` }}>
							<span className="stl_26 stl_11 stl_28">
								{getRank}
							</span>
						</div>

						<div className="stl_01" style={{ left: "37.0583em", top: `${51.9153 + rowShift}em` }}>
							<span className="stl_26 stl_11 stl_28">
								{getResult}
							</span>
						</div>

						<div className="stl_01" style={{ left: "4.0583em", top: `${53.6153 + rowShift}em` }}>

							{getSupplementry == "" ? (<span className="stl_26 stl_11 stl_28">

							</span>) : (<span className="stl_26 stl_11 stl_28">
								Supplementry In ({getSupplementry})
							</span>)}

						</div>

						<div className="stl_01" style={{ left: "3.88em", top: `${55.2534 + rowShift}em` }}>
							<span className="stl_48 stl_11 stl_12" style={{ "word-spacing": "0.0015em" }}>
								Class Teacher Remarks : &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "3.88em", top: `${58.6237 + rowShift}em` }}>
							<span className="date stl_08 stl_27" style={{ "word-spacing": "-0.0012em" }}>
								Date : {date_final}&nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "3.88em", top: `${63.2734 + rowShift}em` }}>
							<span className="stl_61 stl_08 stl_62" style={{ "word-spacing": "-0.001em" }}>
							Class Teacher &nbsp;
							</span>
						</div>

						{/* <div className="stl_01" style={{ left: "20.0242em", top: "64.2734em" }}>
							<span className="stl_61 stl_08 stl_49" style={{ "word-spacing": "-0.0006em" }}>
								Class Teacher &nbsp;
							</span>
						</div> */}


						<div className="stl_01" style={{ left: "39.7583em", top: `${63.2734 + rowShift}em` }}>
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



export default Commerce_Marksheet;