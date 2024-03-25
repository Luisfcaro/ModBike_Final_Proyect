import React from "react";
import "./IncidentsListAdmin.css";
import IncidentCardAdmin from "./IncidentCardAdmin";
import { useNavigate } from "react-router-dom";

const IncidentsListAdmin = ({ incident }) => {

    const navigate = useNavigate();

    const redirects = {
        update_incident: (id) => navigate(`/dashboard/incidents/${id}/edit`),
    }

    return (
        // <div>
        //     <div className="properties section">
        //         <div className="container">
        //             <div className="row">
        //                 {incidents.lenght === 0 ? <h1>No hay incidentes</h1> : incidents.map((incident) => (
        //                     <IncidentCardAdmin key={incident.id} incident={incident} />
        //                 ))
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <tr>
            <td className="border w-12 text-center">{incident.id}</td>
            <td className="border w-72 text-center">
                <span>{incident.state}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{incident.incident_date}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{incident.resolved_date}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{incident.slot}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{incident.description}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{incident.user}</span>
            </td>
            <td className="flex flex-wrap w-34 justify-content-center">
                <button className="button " onClick={() => redirects.update_incident(incident.id)}>
                    Editar Incidencia
                </button>
                {/* <ModalAddUpdate modalType={modalType} bike={bike} updateBike={updateBike} /> */}
                {/* <ModalDelete deleted={() => deleteBike(bike.id)} /> */}
            </td>
        </tr>
    );
}

export default IncidentsListAdmin;