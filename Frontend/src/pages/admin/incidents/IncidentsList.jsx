import React from "react";
import { useIncidents } from "../../../hooks/useIncidents";
import IncidentsListAdmin from "../../../components/admin/incidents/IncidentsListAdmin";

const IncidentsList = () => {
    const { incidents } = useIncidents();

    return (
        // <div>
        //     <IncidentsListAdmin incidents={incidents} />
        // </div>


        <div className="mt-10">
            <div className="header flex items-center justify-content-center mb-2 mr-7">
                <h1 className="font-bold text-3xl font-sans flex-grow text-center ">Incidencias</h1>
                {/* <button className="button-30 mb-5" style={{ width: "95%", marginLeft: "25px", marginTop: "9px" }} onClick={redirects.create_bike}>
                    Crear Bicicleta
                </button> */}
            </div>
            <div></div>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border w-10 text-center">ID</th>
                        <th className="border w-32 text-center">ESTADO</th>
                        <th className="border w-32 text-center">FEACHA INICIO</th>
                        <th className="border w-32 text-center">FECHA FIN</th>
                        <th className="border w-32 text-center">SLOT ACCIDENTADO</th>
                        <th className="border w-32 text-center">DESCRIPCION</th>
                        <th className="border w-32 text-center">USUARIO</th>
                        <th className="border w-32 text-center">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents.map((incident) => (
                        <IncidentsListAdmin
                            key={incident.id}
                            incident={incident}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IncidentsList;