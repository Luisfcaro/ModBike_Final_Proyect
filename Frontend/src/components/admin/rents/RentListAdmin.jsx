import React from "react";
import "./RentListAdmin.css";
import RentCard from "../../../components/admin/rents/RentCard";


const RentListAdmin = ({ rent }) => {

    return (
        // <div>
        //     <div className="properties section">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-4 offset-lg-4">
        //                     <div className="section-heading text-center">
        //                         <h6>| Reservas </h6>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 {
        //                     rents.map((rent) => (
        //                         <RentCard key={rent.id} rent={rent} />
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <tr>
            <td className="border w-12 text-center">{rent.id}</td>
            <td className="border w-72 text-center">
                <span>{rent.bike}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{rent.user}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{rent.initial_slot}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{rent.final_slot}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{rent.rent_date}</span>
            </td>
            <td className="border w-32 text-center">
                <span>{rent.return_date}</span>
            </td>
        </tr>
    )
}

export default RentListAdmin;