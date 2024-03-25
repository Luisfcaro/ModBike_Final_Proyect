import React from "react";
import { useRents } from "../../../hooks/useRents";
import RentListAdmin from "../../../components/admin/rents/RentListAdmin";

const RentList = () => {
    const { rents } = useRents();

    console.log(rents);

    return (
        // <div>
        //     <RentListAdmin rents={rents} />
        // </div>

        <div className="mt-10">
        <div className="header flex items-center justify-content-center mb-2 mr-7">
            <h1 className="font-bold text-3xl font-sans flex-grow text-center ">Reservas</h1>
            {/* <button className="button-30 mb-5" style={{ width: "95%", marginLeft: "25px", marginTop: "9px" }} onClick={redirects.create_bike}>
                Crear Bicicleta
            </button> */}
        </div>
        <div></div>
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border w-10 text-center">ID</th>
                    <th className="border w-32 text-center">BICI</th>
                    <th className="border w-32 text-center">USUARIO</th>
                    <th className="border w-32 text-center">SLOT INICIAL</th>
                    <th className="border w-32 text-center">SLOT FINAL</th>
                    <th className="border w-32 text-center">FECHA INICIO RESERVA</th>
                    <th className="border w-32 text-center">FECHA FIN RESERVA</th>
                </tr>
            </thead>
            <tbody>
                {rents.map((rent) => (
                    <RentListAdmin
                        key={rent.id}
                        rent={rent}
                    />
                ))}
            </tbody>
        </table>
    </div>

    )
}

export default RentList;