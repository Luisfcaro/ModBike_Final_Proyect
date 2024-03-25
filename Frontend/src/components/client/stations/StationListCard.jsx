import React from "react";
import { useNavigate } from "react-router-dom";
import "./StationListCard.css";


const StationsListCard = ({ station }) => {
    const navigate = useNavigate();

    const redirects = {
        view_station: (id) => () => navigate(`/station/${id}`),
    }

    return (
        // <div className="card">
        //     <div className="card__image">
        //         <img src={station.image} alt="Station" />
        //     </div>
        //     <div className="card__content">
        //         <p className="card__title"><b>{station.station_name}</b></p>
        //         <p className="card__description"><b>Descripcion: </b>{station.station_desc}</p>
        //         <p className="card__description"><b>Location: </b>{station.location}</p>
        //         <p className="card__description"><b>Slots: </b>{station.qty_slots}</p>
        //         <p className="card__description"><b>Bikes: </b>{station.bikes_aviable}</p>
        //         <div className="card__button">
        //             <button className="btn btn-primary" onClick={redirects.view_station(station.id)}>Ver Estacion</button>
        //         </div>
        //     </div>
        // </div>

        <a onClick={redirects.view_station(station.id)} class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
        <img src="https://picsum.photos/300/300" alt="Station Image" />
        <div
            class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <div class="flex items-center justify-between mb-2">
                <h6 class="font-semibold text-base leading-7 text-black ">{station.station_name}</h6>
                <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">Slots disponibles: {station.bikes_aviable}</h6>
            </div>
            <p class="text-xs leading-5 text-gray-500">Coords: {station.lat} , {station.lon}</p>
        </div>
    </a>
    )
}

export default StationsListCard;