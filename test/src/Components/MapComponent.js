import React from 'react';
import { useState } from 'react';
import ReactMapGL, {Layer} from 'react-map-gl';

import {Container} from 'react-bootstrap';

function MapComponent() {
    const TOKEN = 'pk.eyJ1IjoidW1rYTMyNTAiLCJhIjoiY2s3a2E4bTNwMHl5bTNlcGV0aWxoNmd4aiJ9.5WNajUpPVMIq3mJqlpT_cQ';

    const [viewport, setViewport] = useState({
        height: "30vw",
        width: "70vh",
        latitude: -74,
        longitude: 40,
        zoom: 15,
        pitch: 45,
        bearing: -17.6,
    });

    const buildingsLayer = {
        id: "3d-buildings",
        source: 'composite',
        'source-layer': 'building',
        type: "fill-extrusion",
        layerOptions: {
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'minzoom': 15
        },
        paint: {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
                ],
            'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
                ],
            'fill-extrusion-opacity': .9
    }};
  
    return (
        <Container>
            <hr/>
            <ReactMapGL
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/light-v10"
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                <Layer {...buildingsLayer}/>
            </ReactMapGL>
            <hr/>
        </Container>
    );
  }

  export default MapComponent;