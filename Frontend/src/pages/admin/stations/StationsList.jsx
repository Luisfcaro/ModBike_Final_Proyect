import React from "react";
import { useStations } from "../../../hooks/useStations";
import StationsListAdmin from "../../../components/admin/stations/StationsListAdmin";
import { useNavigate } from "react-router-dom";

const StationsList = () => {

  const { stations, useDeleteStation } = useStations();

  const navigate = useNavigate();

  const redirects = {
    create_station: () => navigate("/dashboard/stations/create"),
  };

  return (
    // console.log(stations),
    // <div>
    //   <StationsListAdmin stations={stations} delete_station={useDeleteStation}/>
    // </div>

    <div>
      <div className="header flex items-center justify-content-center mb-2 mr-7">
        {/* <h1 className="font-bold text-3xl font-sans flex-grow text-center ">Bicicletas</h1> */}
        <button className="button-30 mb-5" style={{ width: "95%", marginLeft: "25px", marginTop: "9px" }} onClick={redirects.create_station}>
          Crear Estacion
        </button>
      </div>
      <div></div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border w-72 text-center">ID</th>
            <th className="border w-92 text-center">NOMBRE</th>
            <th className="border w-72 text-center">DESCRIPCION</th>
            <th className="border w-72 text-center">LATITUD</th>
            <th className="border w-72 text-center">LONGITUD</th>
            <th className="border w-72 text-center">IMAGEN</th>
            <th className="border w-32 text-center">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {stations.map((station) => (
            <StationsListAdmin
              key={station.id}
              station={station}
              delete_station={useDeleteStation}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StationsList;
