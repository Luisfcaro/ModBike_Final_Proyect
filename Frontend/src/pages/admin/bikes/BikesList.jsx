import React from "react";
import { useBikes } from "../../../hooks/useBikes";
import BikesListAdmin from "../../../components/admin/bikes/BikesListAdmin";
import { useNavigate } from "react-router-dom";


const BikesList = () => {
    const { bikes, useDeleteBike} = useBikes();
    const navigate = useNavigate();

    const redirects = {
        create_bike: () => navigate("/dashboard/bikes/create"),
    };

    return (
        // <div>
        //     <BikesListAdmin bikes={bikes} delete_bike={useDeleteBike}/>
        // </div>

        

        <div>
            <div className="header flex items-center justify-content-center mb-2 mr-7">
                {/* <h1 className="font-bold text-3xl font-sans flex-grow text-center ">Bicicletas</h1> */}
                <button className="button-30 mb-5" style={{width: "95%" ,  marginLeft: "25px",  marginTop: "9px"}} onClick={redirects.create_bike}>
                    Crear Bicicleta
                </button>
            </div>
            <div></div>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border w-72 text-center">ID</th>
                        <th className="border w-92 text-center">SLUG</th>
                        <th className="border w-72 text-center">NOMBRE</th>
                        <th className="border w-72 text-center">ESTADO</th>
                        <th className="border w-32 text-center">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {bikes.map((bike) => (
                        <BikesListAdmin
                            key={bike.slug}
                            bike={bike}
                            delete_bike={useDeleteBike}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BikesList;