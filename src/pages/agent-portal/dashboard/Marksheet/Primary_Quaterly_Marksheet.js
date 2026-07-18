import React, { useEffect, useState } from "react";

import './A4.css';
import backgroud from './img/Final_backgraound.jpg';
import logo from './img/logo.png'
import childpic from './img/child.jpg'
import BaseUrl from "../../../../services/BaseUrl";
import logo1 from './img/logo1.png'
import { getData, postData } from "../../../../services/FetchServices";
import { isUndefined } from "@syncfusion/ej2-base";
import { setPrintDocumentTitle } from "./printDocumentTitle";
import PrintBackButton from "./PrintBackButton";


const axios = require("axios");


function Primary_Quaterly_Marksheet(props) {


	const [getHindi, setHindi] = React.useState("")
	const [getEnglish, setEnglish] = React.useState("")
	const [getGk, setGk] = React.useState("")
	const [getEvs, setEvs] = React.useState("")
	const [getComputer, setComputer] = React.useState("")
	const [getMaths, setMaths] = React.useState("")
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
		if( !isUndefined(props.location.res)){
		setPrintDocumentTitle(props.location.res.name, props.location.res.class);

		

let countSupplementry= 0
let strSupplementry =""

			if(props.location.res.hindi >=33 && props.location.res.hindi<=74){
				setHindi(props.location.res.hindi)
			}else if(props.location.res.hindi >=75 && props.location.res.hindi<=100){
				setHindi(props.location.res.hindi+" Dist")
			}else {
				setHindi(props.location.res.hindi+" F")
				countSupplementry++;
				strSupplementry = strSupplementry + " Hindi ,"
			}


			if(props.location.res.english >=33 && props.location.res.english<=74){
				setEnglish(props.location.res.english)
			}else if(props.location.res.english >=75 && props.location.res.english<=100){
				setEnglish(props.location.res.english+" Dist")
			}else {
				setEnglish(props.location.res.english+" F")
				countSupplementry++;
				strSupplementry = strSupplementry + " English ,"
			}


			if(props.location.res.gk >=33 && props.location.res.gk<=74){
				setGk(props.location.res.gk)
			}else if(props.location.res.gk >=75 && props.location.res.gk<=100){
				setGk(props.location.res.gk+" Dist")
			}else {
				setGk(props.location.res.gk+" F")
				countSupplementry++;
				strSupplementry = strSupplementry + " GK ,"
			}


			if(props.location.res.evs >=33 && props.location.res.evs<=74){
				setEvs(props.location.res.evs)
			}else if(props.location.res.evs >=75 && props.location.res.evs<=100){
				setEvs(props.location.res.evs+" Dist")
			}else {
				setEvs(props.location.res.evs+" F")
				countSupplementry++;
				strSupplementry = strSupplementry + " EVS ,"
			}



			if(props.location.res.computer >= 33 && props.location.res.computer <= 74){
				setComputer(props.location.res.computer)
			}else if(props.location.res.computer >=75 && props.location.res.computer <= 100){
				setComputer(props.location.res.computer +" Dist")
			}else {
				setComputer(props.location.res.computer + " F")
				countSupplementry++;
				strSupplementry = strSupplementry + " Computer ,"
			}


			if(props.location.res.maths >=33 && props.location.res.maths<=74){
				setMaths(props.location.res.maths)
			}else if(props.location.res.maths >=75 && props.location.res.maths<=100){
				setMaths(props.location.res.maths+" Dist")
			}else {
				setMaths(props.location.res.maths+" F")
				countSupplementry++;
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

		
	let maxLength = 26;
	let address = (props.location.res.address).substring(0, maxLength) + '...';


	//	setAddress(props.location.res.address)

	setAddress(address)
		
		setPhoto(`${BaseUrl}/images/${props.location.res.photo}`) 

		
		 setSession(props.location.res.session+"-"+parseInt(props.location.res.session+1))

		let totalmarks = props.location.res.hindi + props.location.res.english + props.location.res.gk +props.location.res.evs +props.location.res.computer +props.location.res.maths
		let percentage = parseInt((totalmarks/600)*100)

		if(percentage >= 33 && percentage <= 49){
			setDivision("4th")
		}else if(percentage >= 50 && percentage <= 64){
			setDivision("3rd")
		}else if(percentage >= 65 && percentage <= 74){
			setDivision("2nd")
		}else if(percentage >= 75 && percentage <= 100){
			setDivision("1st")
		}else{
			setDivision(" - ")
		}
		
		setTotalmarks(totalmarks)
		setPercentage(percentage)

		if(props.location.res.examtype == "quarterly"){
			setExamType("Quarterly")
		}else if(props.location.res.examtype == "halfyearly"){
			setExamType("Halfyearly")
		}else if(props.location.res.examtype == "annually"){
			setExamType("Annually")
		} 
		
		if(props.location.res.class == "nur"){
			setClass("Nursery")
		}else if(props.location.res.class == "lkg"){
			setClass("LKG")
		}else if(props.location.res.class == "ukg"){
			setClass("UKG")
		}else if(props.location.res.class == "1"){
			setClass("1st")
		}else if(props.location.res.class == "2"){
			setClass("2nd")
		}else if(props.location.res.class == "3"){
			setClass("3rd")
		}else if(props.location.res.class == "4"){
			setClass("4th")
		}else if(props.location.res.class == "5"){
			setClass("5th")
		}


		if(props.location.res.medium == "eng"){
			setMedium("English")
		}else if(props.location.res.class == "hin"){
			setMedium("Hindi")
		}
		
		if(countSupplementry >= 1 && countSupplementry <= 2){
			setResult("Supp")
			setDivision(" - ")
			setPercentage(" - ")
			setSupplementry(strSupplementry)
		}else if(countSupplementry >=3){
			setResult("Fail")
			setDivision(" - ")
			setPercentage(" - ")
		}else if(countSupplementry == 0){
			setResult("Pass")
		}


		let body={
			studentclass : props.location.res.class,
			examtype: props.location.res.examtype,
			studentmedium : props.location.res.medium
		}

	// 	let result = await postData("lockpostadd/GetRankForPrimaryStudent", body);
	// console.log("Data For Rank ",result)



		axios.post(`${BaseUrl}/lockpostadd/GetRankForPrimaryStudent`, body)
        .then((res) => {
          console.log("From Rank", res)
			for(var i=0 ;i< res.data.length;i++){
				if(res.data[i].studentid == props.location.res.studentid ){
					
					console.log("Rank Is ",res.data[i].Rank)
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
									width: "10%",

								}}
							/>

							<img
								style={{
									position: "absolute",
									"pointer-events": "none",
									right: "2.0em", top: "3.7129em",
									width: "10%"
								}}
								
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
						{/* <!-- <div className="stl_01" style="left:20.9842em;top:7.9875em;"><span className="stl_17 stl_08 stl_20">(0542)-XXXXXXXXX &nbsp;</span></div> --> */}
						{/* <!-- <div className="stl_01" style="left:17.7142em;top:9.9875em;"><span className="stl_17 stl_08 stl_21" style="word-spacing:-0.0052em;">School Website: </span><a href="http://www.resulthosting.net" target="_blank"><span className="stl_22 stl_08 stl_23">www.resulthosting.net &nbsp;</span></a></div> --> */}
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
								Session :{getSession} &nbsp;
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


						{/* <div className="stl_01" style={{ left: "31.0358em", top: "25.2215em" }}>
							<span className="stl_39 stl_11 stl_19" style={{ "word-spacing": "0.0012em" }}>
								*Total Attendance/Working Days &nbsp;
							</span>
						</div> */}


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
							<span
							className="stl_32 stl_11 stl_33"
							style={{
						"word-spacing": "0.4479em" ,
						}}
						>
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
							
						</div>

{/* /////////////////////////////////////////////////////////////// */}
						<div className="stl_01" style={{ left: "6.682em", top: "31.2535em" }}>
							<span className="stl_32 stl_11 stl_49">
								Subjects &nbsp;
							</span>
						</div>




						<div className="stl_01" style={{ left: "23.8042em", top: "30.5535em" }}>
							<span className="stl_32 stl_11 stl_51">
								Marks &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "17.8042em", top: "31.8535em" }}>
							<span className="stl_32 stl_11 stl_51">
								(Max) &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "24.2042em", top: "31.8535em" }}>
							<span className="stl_32 stl_11 stl_51">
								(Min) &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "30.8042em", top: "31.8535em" }}>
							<span className="stl_32 stl_11 stl_51">
								(Obtain) &nbsp;
							</span>
						</div>


					

						<div className="stl_01" style={{ left: "38.2658em", top: "31.2535em" }}>
							<span className="stl_32 stl_11 stl_38">
							Total Marks &nbsp;
							</span>
						</div>


						
					
						



						<div className="stl_01" style={{ left: "17.8758em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "17.8758em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "17.8758em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "17.8758em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "17.8758em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "17.8758em", top: "40.8252em" }}>
							<span className="stl_32 stl_11 stl_40">
								100 &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "17.8758em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
								600 &nbsp;
							</span>
						</div>
						
						
						
						<div className="stl_01" style={{ left: "24.9758em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_40">
								33 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "24.9758em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_40">
								33 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "24.9758em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_40">
								33 &nbsp;
							</span>
						</div>
						<div className="stl_01" style={{ left: "24.9758em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_40">
							33 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "24.9758em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_40">
								33 &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "24.9758em", top: "40.8252em" }}>
							<span className="stl_32 stl_11 stl_40">
								33 &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "24.8758em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_40">
							198	&nbsp;
							</span>
						</div>





						<div className="stl_01" style={{ left: "32.2283em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getEnglish} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "32.2283em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getHindi} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "32.2283em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getMaths} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "32.2283em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getEvs} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "32.2283em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getGk} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "32.2283em", top: "40.8252em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getComputer} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "31.8283em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_55">
								{getTotalmarks} &nbsp;
							</span>
						</div>


						<div className="stl_01" style={{ left: "39.8283em", top: "33.4654em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getEnglish} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "39.8283em", top: "34.9635em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getHindi} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "39.8283em", top: "36.4352em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getMaths} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "39.8283em", top: "37.8952em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getEvs} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "39.8283em", top: "39.3652em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getGk} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "39.8283em", top: "40.8252em" }}>
							<span className="stl_32 stl_11 stl_54">
								{getComputer} &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "39.8283em", top: "42.2952em" }}>
							<span className="stl_32 stl_11 stl_55">
								{getTotalmarks} &nbsp;
							</span>
						</div>












						<div className="stl_01" style={{ left: "7.182em", top: "34.9654em" }}>
							<span className="stl_52 stl_11 stl_49">
								HINDI &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "6.882em", top: "33.4654em" }}>
							<span className="stl_52 stl_11 stl_49">


								ENGLISH &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "6.182em", top: "36.437em" }}>
							<span className="stl_52 stl_11 stl_53">

								MATHEMATICS &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "7.182em", top: "37.897em" }}>
							<span className="stl_52 stl_11 stl_29">
								EVS &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "7.182em", top: "39.367em" }}>
							<span className="stl_52 stl_11 stl_38">
								GK &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "6.682em", top: "40.827em" }}>
							<span className="stl_52 stl_11 stl_12">
								Computer &nbsp;
							</span>
						</div>

						<div className="stl_01" style={{ left: "7.682em", top: "42.297em" }}>
							<span className="stl_52 stl_11 stl_56" style={{ "word-spacing": "0.0028em" }}>
								Total
							</span>
						</div>

					{/*  /////////////////////////////////////////////////////////////////////*/}

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
								 </span>)  }
							
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



export default Primary_Quaterly_Marksheet;