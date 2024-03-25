import React from "react";
import "./SlotCardClient.css";
import { useNavigate } from "react-router-dom";


const SlotCardClient = ({ slot, addRent, returnBike }) => {

    const navigate = useNavigate();

    const redirects = {
        create_incidence: (slug) => () => navigate(`/create_incident/${slug}`),
    };

    const send_data_add = e => {
        e.preventDefault();
        addRent(slot.slug);
    }

    const send_data_return = e => {
        e.preventDefault();
        returnBike(slot.slug);
    }


    return (
        // console.log(slot),

        // <div className="card">
        //     <div className="card__image">
        //         <img src={slot.image} alt="Station" />
        //     </div>
        //     <div className="card__content">
        //         <p className="card__title"><b>{slot.slot_name}</b></p>
        //         <p className="card__description"><b>Estado: </b>{slot.slot_status}</p>
        // <div className="card__button">
        //     {slot.slot_status === "Disponible" ? (
        //         <button className="btn btn-primary" onClick={send_data_add}>Recoger Bici</button>
        //     ) : slot.slot_status === "No disponible" ? (
        //         <button className="btn btn-danger" onClick={send_data_return}>Dejar Bici</button>
        //     ) : (
        //         <button className="btn btn-secondary" disabled>En Mantenimiento</button>
        //     )}
        //     <button className="btn btn-danger" onClick={redirects.create_incidence(slot.slug)}>Incidencia</button>
        // </div>
        //     </div>
        // </div>


        <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={slot.image} alt="product image" />
                <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://picsum.photos/300/300" alt="product image" />
                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h6 className="text-xl tracking-tight text-slate-900">{slot.slot_name}</h6>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-xl font-bold text-slate-900">{slot.slot_status}</span>
                    </p>
                </div>

                {slot.slot_status === "Disponible" ? (
                    <a onClick={send_data_add} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Recoger Bici
                    </a>
                        // <button className="btn btn-primary" onClick={send_data_add}>Recoger Bici</button>
                ) : slot.slot_status === "No disponible" ? (
                    <a onClick={send_data_return} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Dejar Bici
                    </a>
                    // <button className="btn btn-danger" onClick={send_data_return}>Dejar Bici</button>
                ) : (
                    <button className="btn btn-secondary" disabled>En Mantenimiento</button>
                )}
                <a onClick={redirects.create_incidence(slot.slug)} className="flex items-center justify-center rounded-md bg-red-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-2">
                        Incidencia
                </a>

            </div>
        </div>

    )
}

export default SlotCardClient;


