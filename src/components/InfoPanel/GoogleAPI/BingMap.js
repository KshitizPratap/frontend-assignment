import React from "react";
import BingMapsReact from "bingmaps-react";

function BingMap(props) {

    let latitude = null, longitude = null;

    if(props.user.address !== undefined){
        latitude = props.user.address.geo.lat;
        longitude = props.user.address.geo.lat;
    }

    console.log("[Longitude]", longitude)
    console.log("[Latitude]", latitude)

  return (
    <BingMapsReact
      bingMapsKey="Ak1uPdpiAyizxPVeNZxS9LU9pYsOqiasfE_hLLUWeJv6HjoMfgOlURMfFYjGQ3yw"
      height = "500px"
      width = "500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
      />
  );
}

export default BingMap;
