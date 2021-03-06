import * as React from 'react';
import ReactMapGL, {Popup , Marker} from 'react-map-gl';
import * as enterprise from '../data/enterprise.json';
import * as friends from '../data/friends.json';


export default function App() {
  const [viewport, setViewport] = React.useState({
    latitude: -21.7557592,
    longitude: -43.3400294,
    zoom: 14.67,
  });
  const [showPopup, togglePopup] = React.useState(false);

  return (
    <>
         <ReactMapGL
            mapStyle="mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd"
            mapboxApiAccessToken={ACCESS_TOKEN_MAP}
            {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}
            >
        
            {enterprise.location.map((local) => (
            <Marker latitude={local.coordinates[0]} longitude={local.coordinates[1]}>
                <img src="/bar.png" height="30px;"/>
            </Marker>
            ))}
            {friends.location.map((local) => (
            <Marker latitude={local.coordinates[0]} longitude={local.coordinates[1]}>
            <img src="/pessoa.png" height="50px"/>
            </Marker>
            ))}
        </ReactMapGL>
    </>
  );
}