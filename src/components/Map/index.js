import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import * as enterprise from '../../../data/enterprise.json';
import * as friends from '../../../data/friends.json';





class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '93.7vh',
      latitude: -21.759,
      longitude: -43.345,
      zoom: 14.67,
      overflow: 'hidden',
    }
  };

  render() {
    return (
    <>    
        <ReactMapGL
            mapStyle="mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd"
            mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNkYWZvbnNlY2FkZXBhdWxhIiwiYSI6ImNrbGJrcjhzMDJyaDIzMm5ydDhsODgyZGEifQ.SU8e15tTWit54umOThvsBw"
            onViewportChange={(viewport) => this.setState({ viewport })}
            {...this.state.viewport}
            >
        
            {enterprise.location.map((local) => (
            <Marker latitude={local.coordinates[0]} longitude={local.coordinates[1]}>
                <button><img src="/bar.png" height="30px;"  /></button>
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
}

export default Map;