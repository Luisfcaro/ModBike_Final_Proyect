import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Map = ({stations}) => {
  const navigate = useNavigate();
  return (
    <MapContainer 
    center={[38.8235583, -0.6043874]} 
    zoom={14} 
    style={{ 
        height: "600px", 
        width: "75%",
        margin: "8% auto auto auto",
        borderRadius: "10px",
        boxShadow : "3px 4px 15px 2px rgba(0,0,0,0.75)",
        }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

        {stations.map((station) => (
            <Marker key={station.id} position={[station.lat, station.lon]}>
                <Popup>
                <h2><b>{station.station_name}</b></h2>
                <p>Slots Disponibles: <b>{station.bikes_aviable}</b></p>
                <Button onClick={() => navigate(`/station/${station.id}`)}><b>Ver Más</b></Button>
                </Popup>
            </Marker>
        ))}

    </MapContainer>
  );
};

export default Map;