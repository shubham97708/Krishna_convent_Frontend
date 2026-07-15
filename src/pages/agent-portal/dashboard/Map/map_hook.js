import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import GoogleMapsApiLoader from "google-maps-api-loader";




const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({
      apiKey
    }).then(google => {
      setGoogleMap(google);
    });
  }, []);
  return googleMap;
};

const useMap = ({
  googleMap,
  mapContainerRef,
  initialConfig,
  requlatlng
}) => {
  const [map, setMap] = useState(null);


  useEffect( 
    () => {
      if (!googleMap || !mapContainerRef.current) { return; }

      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        initialConfig
      );
      // marker
      const marker = new googleMap.maps.Marker({
        position: initialConfig.center,
        draggable: true,
        map: map,
      });
      const InfoWindow = new googleMap.maps.InfoWindow({
        content: `<div id="content">
                    <button id="onBtn" class="btn btn-sm">
                    Text
                    </button>
                  </div>`
      });
      marker.addListener("click", () =>
        requlatlng(marker.position.lat(), marker.position.lng())
      );
      setMap(map);
    },
    [ googleMap, mapContainerRef , initialConfig ]
  );
  return map;
};

export {
  useGoogleMap,
  useMap
};