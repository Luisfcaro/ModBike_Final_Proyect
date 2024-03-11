import './Home.css';
import React, { useState, useEffect } from 'react';
import Map from '../../components/Map/Map';
import StationContext from '../../context/StationContext';


export default function Home() {
  const { stations } = React.useContext(StationContext);
  return (
    <div className="home-container">
      <Map stations={stations}/>
    </div>
  )
}