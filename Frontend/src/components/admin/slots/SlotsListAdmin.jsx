import React from "react";
import { useNavigate } from "react-router-dom";
import "./SlotsListAdmin.css";
import SlotCardAdmin from "./SlotCardAdmin";

const SlotsListAdmin = ({ slot, delete_slot }) => {
    const navigate = useNavigate();

    const redirects = {
        create_slot: () => navigate("/dashboard/slots/create"),
    };

    return (
        // <div>
        //     <div className="properties section">
        //         <div className="container">
        //             <div className="row">
        //                 <button className="button-30 mb-5" onClick={redirects.create_slot}>
        //                     Crear Slot
        //                 </button>
        //                 {slots.map((slot) => (
        //                     <SlotCardAdmin key={slot.slug} slot={slot} delete_slot={delete_slot} />
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <tr>
            <td className="border w-12 text-center">{slot.id}</td>
            <td className="border w-72 text-center">
                <span>{slot.slug}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{slot.slot_name}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{slot.station}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{slot.image}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{slot.slot_status}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{slot.bike}</span>
            </td>
            <td className="flex flex-wrap w-34 justify-content-center">
                <button className="button " onClick={() => delete_slot(slot.slug)}>
                    Eliminar Slot
                </button>
                {/* <ModalAddUpdate modalType={modalType} bike={bike} updateBike={updateBike} /> */}
                {/* <ModalDelete deleted={() => deleteBike(bike.id)} /> */}
            </td>
        </tr>
    );
}

export default SlotsListAdmin;