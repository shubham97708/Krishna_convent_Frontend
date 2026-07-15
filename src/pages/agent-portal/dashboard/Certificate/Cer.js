import React, { Component } from 'react';


//import './index.css';
import './Cer.css';
import logo from './Components/img/CAM.png';
import sing from './Components/img/sing.png';






class Cer extends Component {





  constructor(props) {
    super(props);


    this.state = {

      studentname: 'SHUBHAM SONI',
      course: 'REACT JS ',
      Certificateno: '2018/156/JDHDGSSNS',
      date: "5-29-2019",
      teachername: "Sandeep Sappal",



      printsts: "rotate(-90deg)",
      btn: false


    }
  }




  finalprit = () => {

    window.print();


  }

  prit = () => {

    this.setState({
      printsts: "rotate(0deg)",
      btn: true
    })

  }



  default = () => {
    this.setState({
      printsts: "rotate(-90deg)",
      btn: false
    })

  }


  render() {
    return (
      <div  >
        {<button hidden={this.state.btn} onClick={this.prit} onMouseLeave={this.finalprit}>Print Certificate</button>}
        <div onClick={this.default} class="book" style={{ transform: this.state.printsts }} >

          <div class="page">

            <div style={{
              borderRight: "6px solid #2571bf ",
              height: "970px",
              marginRight: "-50px"

            }}>


              <img src={logo} style={{

                transform: "rotate(90deg)",
                marginLeft: "-70px",
                marginTop: "70px",
                float: "right"

              }} />


              <h1 style={{
                float: "right",

                writingMode: "vertical-rl",
                marginTop: "300px",
                marginRight: "-40px"


              }} >CSEP CampusShala Education </h1>


              <h5
                style={{
                  float: "right",
                  writingMode: "vertical-rl",
                  marginTop: "300px",
                  //marginRight:"-10px"

                }}

              >Awarded to</h5>


              <h1 style={{

                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                color: "#2571bf",

              }} >{this.state.studentname}</h1>



              <h5
                style={{
                  float: "right",
                  writingMode: "vertical-rl",
                  marginTop: "300px",
                  marginRight: "30px"
                }}

              >For successfully meeting criteria in the skill assessment on:</h5>


              <h2 style={{

                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                color: "#2571bf"
              }} >{this.state.course}</h2>


              <h6
                style={{

                  float: "right",
                  writingMode: "vertical-rl",
                  marginTop: "300px"

                }}

              >{this.state.teachername}<br />
                {this.state.date}
              </h6>


              <text style={{

                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                fontSize: "10px"
              }} >
                On behalf of CSEP Education Services
              </text>


              <img src={sing} style={{
                height: "70px",
                width: "70px",
                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                transform: "rotate(90deg)",

              }} />

              <text style={{

                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                fontSize: "10px"
              }} >
                Country Manager , CSPE PointText(Project Sevices)
              </text>




              <text style={{

                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                marginRight: "25px",
                fontSize: "10px",
                paddingRight: "40px"
              }} >
                Certificate No. :<font style={{ color: "#2571bf" }}>{this.state.Certificateno}</font>
              </text>



              <text style={{

                float: "right",
                writingMode: "vertical-rl",
                marginTop: "300px",
                marginRight: "5px",
                fontSize: "10px"
              }} >
                To verify the authenticity of this Certificate , Plese Visit<font style={{ color: "#2571bf" }}>www.campusshala.com</font>
              </text>




              <div style={{
                borderLeft: "25px solid #2571bf",
                height: "970px",
                marginLeft: "-72px"
              }}></div>


            </div>






















          </div>

        </div>
      </div>
    );
  }
}

export default Cer;
