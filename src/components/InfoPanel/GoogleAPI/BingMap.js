import React from 'react';
import ReactMap from 'react-mapbox-gl';

const accessToken = "pk.eyJ1Ijoia3NoaXRpenByYXRhcCIsImEiOiJja3hieDgyYzQxMjlhMnZrdG1tNzkwNjE0In0.vIYAYPMRzYVHgKYOskl6FQ";
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken
});

const mapStyle = {
  height: '100%',
  width: '36vw',

};

function MapAPI(){

  const viewport = {
    center : [0, 20],
    zoom : [4]
  }

    return (
      <Map
        style={style}
        containerStyle={mapStyle}
        {...viewport}/>
    );
  }

export default MapAPI;