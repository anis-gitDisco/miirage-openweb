import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, { GeolocateControl, Source, Layer } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    height: '110% !important',
  },
});

const geolocateControlStyle = {
  right: 10,
  top: 10,
};

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.13346104546625, 42.39380027088738],
      },
    },
  ],
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 5,
    'circle-color': 'rgba(252, 186, 3, 0.8)',
  },
};

function Map() {
  const classes = useStyles();
  const [viewport, setViewport] = React.useState({
    latitude: 42.39380027088738,
    longitude: -71.13346104546625,
    zoom: 10,
  });

  useEffect(() => {
    console.log(process.env);
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <ReactMapGL
      className={classes.container}
      {...viewport}
      mapStyle="mapbox://styles/davidmichaelhogan/cks133dod84s418rzfw0jvjp3"
      width="100%"
      height="100%"
      mapboxApiAccessToken={
        'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
      }
      dragRotate
      onViewportChange={(viewport) => setViewport(viewport)}
      pitch={60}
      touchRotate
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        showAccuracyCircle={false}
        trackUserLocation
        showUserHeading
        auto
      />
    </ReactMapGL>
  );
}

export default Map;
