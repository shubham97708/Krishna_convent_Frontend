import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useGoogleMap, useMap } from "./map_hook.js";
import Geocode from "react-geocode";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import SearchBar from "./SearchBar";
import Typography from "@material-ui/core/Typography";

Geocode.setApiKey("AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk");
Geocode.enableDebug();

const API_KEY = "AIzaSyBFgIFAgbwAU7BsVp4HveZBqTC0W300CKk";
const location = window.navigator && window.navigator.geolocation;

let initialConfig = {
  zoom: 12,
  center: {
    lat: 0,
    lng: 0,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff5cc",
    padding: "5px",
    align: "center",
    textAlign: "center",
    width: "100%",
    //position:'absolute'
  },

  root1: {
    alignSelf: "center",
    background: "#fff",
    padding: "5px",
    marginTop: "-5%",
    marginLeft: "15%",
    textAlign: "center",
    width: "50%",
    position: "absolute",
    border: "0.5px solid green",

    // opacity:'0.8',
    //marginRight:'25%',
    // align: 'center',
  },
  root2: {
    background: "#fff",
    padding: "0.1%",
    marginTop: "-8%",
    textAlign: "center",
    height: "auto",
    width: "auto",
    // maxWidth:'40%',

    position: "absolute",
    border: "0.5px solid green",
    marginLeft: "12rem",
    // marginRight:'20%',

    // marginLeft:"90%",
    // marginTop:"5%",
    // bottom:'5%',
    // right:'2%',
    // align:"right",
    // minHeight:35,
    // minWidth:50,
    // position:'absolute',
    // height:40,
    // width:60,
    // backgroundColor:"#2BB573"
  },

  rootnewdiv: {
    width: "100%",
    alignContent: "center",
    justifyItems: "center",
    display: "grid",
    position: "relative",
  },
  root3: {
    width: "50%",
    border: "0.5px solid green",
    height: "auto",
    background: "#fff",
    verticalAlign: "middle",

    textAlign: "center",
    alignItems: "center",

    alignContent: "flex-end",
    alignContent: "center",
    justifyItems: "center",
    justifyContent: "center",
    display: "block",
    position: "absolute",
    marginTop: "-100px",
  },
}));

const Gmap = (props) => {
  const [getlatlng, setlatlng] = React.useState({});
  const classes = useStyles();
  const [Address, SetAddress] = React.useState("Address Not Found");
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);

  //get Current Location
  const getloc = () => {
    if (
      props.incomingprops.status == false &&
      props.incomingprops.address != true &&
      props.incomingprops.lat != true &&
      props.incomingprops.lng != true
    ) {
      if (location) {
        location.getCurrentPosition((position) => {
          initialConfig = {
            zoom: 12,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          };
          Geocode.fromLatLng(
            initialConfig.center.lat,
            initialConfig.center.lng
          ).then((response) => {
            SetAddress(response.results[1].formatted_address);
          });
        });
      }
    }
  };

  const setDataOnState = () => {
    console.log(props.incomingprops);
    if (
      props.incomingprops.status == true &&
      props.incomingprops.address != false &&
      props.incomingprops.lat != false &&
      props.incomingprops.lng != false
    ) {
      // alert(props.incomingprops.address);
      SetAddress(props.incomingprops.address);
    }
  };

  //First Call for location
  useEffect(() => {
    getloc();
  }, []);

  const setLatLngToInit = () => {
    if (
      props.incomingprops.status == true &&
      props.incomingprops.address != false &&
      props.incomingprops.lat != false &&
      props.incomingprops.lng != false
    )
      initialConfig = {
        zoom: 12,
        center: {
          lat: props.incomingprops.lat,
          lng: props.incomingprops.lng,
        },
      };
  };

  useEffect(() => {
    // alert(JSON.stringify(props.incomingprops));
    setDataOnState();
    setLatLngToInit();
  }, [props.incomingprops]);

  // Lat lon To Address
  function requlatlng(latt, lngg) {
    Geocode.fromLatLng(latt, lngg).then((response) => {
      SetAddress(response.results[1].formatted_address);
      props.addresstatechangefun(
        response.results[1].formatted_address,
        latt,
        lngg
      );
    });
  }
  //

  //Reload Map To Default Location
  const handleClick = () => {
    if (location) {
      location.getCurrentPosition((position) => {
        initialConfig = {
          zoom: 12,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        };
        Geocode.fromLatLng(
          initialConfig.center.lat,
          initialConfig.center.lng
        ).then((response) => {
          SetAddress(response.results[1].formatted_address);
        });
      });
    }
  };

  //Address To lat lon
  const showalert = (data) => {
    Geocode.fromAddress(data.formatted_address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setlatlng(
          (initialConfig = {
            zoom: 12,
            center: {
              lat: lat,
              lng: lng,
            },
          })
        );
        if (props.newlatlng) {
          if (props.incomingprops.lat == lat && props.incomingprops.lng == lng){
            props.newlatlng(true);
          }else{
            props.newlatlng(false);
          }
            
        }

        console.log("My Lat ", lat, "My Lon ", lng);
      },
      (error) => {
        console.error(error);
      }
    );

    //  console.log(initialConfig)
    //alert(data.formatted_address)
    // SetAddress(data.formatted_address)
  };

  useMap({
    googleMap,
    mapContainerRef,
    initialConfig,
    requlatlng,
  });

  return (
    <div>
      <Button onClick={handleClick} variant="contained" component="span">
        {" "}
        Reload Map{" "}
      </Button>
      <div
        style={{
          height: "60vh",
          width: "100%",
          position: "relative",
        }}
        ref={mapContainerRef}
      />
      <div className={classes.rootnewdiv}>
        <Paper className={classes.root3}>
          {/* {Address}  */}

          <Typography style={{ fontSize: "1.1vw", flexWrap: "wrap" }}>
            {Address}
          </Typography>
          <SearchBar add={Address} setadd={SetAddress} alerr={showalert} />
        </Paper>
      </div>
    </div>
  );
};

export default Gmap;
