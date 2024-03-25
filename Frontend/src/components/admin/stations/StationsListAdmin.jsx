import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StationsListAdmin.css';
import StationCardAdmin from './StationCardAdmin';

export default function StationsListAdmin({ stations, station, delete_station }) {

    const navigate = useNavigate();

    const redirects = {
        update_station: (id) => navigate(`/dashboard/stations/${id}/edit`),
        create_station: () => navigate('/dashboard/stations/create'),
    }


    return (
        // <div>
        //     <div className="properties section">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-4 offset-lg-4">
        //                     <div className="section-heading text-center">
        //                         <h6>| Estaciones</h6>
        //                         <h1>Te ofrecemos las estaciones más cercanas</h1>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <button className='button-30 mb-5' onClick={redirects.create_station}>Crear Estacion</button>
        //                 {
        //                     stations.map((station) => (
        //                         <StationCardAdmin key={station.id} station={station} delete_station={delete_station} />
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <tr>
        <td className="border w-12 text-center">{station.id}</td>
        <td className="border w-32 text-center">
            <span>{station.station_name}</span>
        </td>
        <td className="border w-72 text-center">
            <span>{station.station_desc}</span>
        </td>
        <td className="border w-32 text-center">
            <span>{station.lat}</span>
        </td>
        <td className="border w-32 text-center">
            <span>{station.lon}</span>
        </td>
        <td className="border w-32 text-center">
            <span>{station.image}</span>
        </td>
        <td className="flex flex-wrap w-34 justify-content-center">
            <button className="button " onClick={() => redirects.update_station(station.slug)}>
                Editar Estacion
            </button>
            <button className="button " onClick={() => delete_station(station.slug)}>
                Eliminar Estacion
            </button>
            {/* <ModalAddUpdate modalType={modalType} bike={bike} updateBike={updateBike} /> */}
            {/* <ModalDelete deleted={() => deleteBike(bike.id)} /> */}
        </td>
    </tr>
    )
}
