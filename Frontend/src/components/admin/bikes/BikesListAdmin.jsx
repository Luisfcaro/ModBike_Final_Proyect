import React from "react";
import { useNavigate } from "react-router-dom";
import "./BikesListAdmin.css";
import BikeCardAdmin from "./BikeCardAdmin";

const BikesListAdmin = ({ bike, delete_bike }) => {
    const navigate = useNavigate();

    const redirects = {
        update_bike: (slug) => navigate(`/dashboard/bikes/${slug}/edit`),
    }

    return (
        // <div>
        //     <div className="properties section">
        //         <div className="container">
        //             <div className="row">
        //                 <button className="button-30 mb-5" onClick={redirects.create_bike}>
        //                     Crear Bicicleta
        //                 </button>
        //                 {bikes.map((bike) => (
        //                     <BikeCardAdmin key={bike.slug} bike={bike} delete_bike={delete_bike} />
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <tr>
            <td className="border w-12 text-center">{bike.id}</td>
            <td className="border w-72 text-center">
                <span>{bike.slug}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{bike.bike_name}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{bike.bike_status}</span>
            </td>
            <td className="flex flex-wrap w-34 justify-content-center">
                <button className="button " onClick={() => redirects.update_bike(bike.slug)}>
                    Editar Bicicleta
                </button>
                <button className="button " onClick={() => delete_bike(bike.slug)}>
                    Eliminar Bicicleta
                </button>
                {/* <ModalAddUpdate modalType={modalType} bike={bike} updateBike={updateBike} /> */}
                {/* <ModalDelete deleted={() => deleteBike(bike.id)} /> */}
            </td>
        </tr>
    );
}

export default BikesListAdmin;