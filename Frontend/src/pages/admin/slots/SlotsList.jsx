import React from "react";
import { useSlots } from "../../../hooks/useSlots";
import SlotsListAdmin from "../../../components/admin/slots/SlotsListAdmin";
import { useNavigate } from "react-router-dom";

const SlotsList = () => {

    const { slots, useDeleteSlot } = useSlots();

    const navigate = useNavigate();

    const redirects = {
        create_slot: () => navigate("/dashboard/slots/create"),
    };

    return (
        // console.log(slots),
        // <div>
        //     <SlotsListAdmin slots={slots} delete_slot={useDeleteSlot} />
        // </div>


        <div>
            <div className="header flex items-center justify-content-center mb-2 mr-7">
                {/* <h1 className="font-bold text-3xl font-sans flex-grow text-center ">Bicicletas</h1> */}
                <button className="button-30 mb-5" style={{ width: "95%", marginLeft: "25px", marginTop: "9px" }} onClick={redirects.create_slot}>
                    Crear Slot
                </button>
            </div>
            <div></div>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border w-10 text-center">ID</th>
                        <th className="border w-32 text-center">SLUG</th>
                        <th className="border w-32 text-center">NOMBRE</th>
                        <th className="border w-32 text-center">ESTACION</th>
                        <th className="border w-32 text-center">IMAGEN</th>
                        <th className="border w-32 text-center">ESTADO</th>
                        <th className="border w-32 text-center">BICI</th>
                        <th className="border w-32 text-center">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.map((slot) => (
                        <SlotsListAdmin
                            key={slot.slug}
                            slot={slot}
                            delete_slot={useDeleteSlot}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SlotsList;