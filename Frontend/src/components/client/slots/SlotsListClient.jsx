import React from "react";
import SlotCardClient from "./SlotCardClient";
import { useRents } from "../../../hooks/useRents";


const SlotsListClient = ({ station, slots }) => {
    const { rents, useAddRent, useReturnBike } = useRents();

    return (
        // <div className="row ">
        //     {slots.map((slot) => (
        //         <SlotCardClient key={slot.id} slot={slot} addRent={(data) => useAddRent(data)} returnBike={(data) => useReturnBike(data)} />
        //         // <h1>Slot</h1>
        //     ))
        //     }
        // </div>

        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="font-manrope font-bold text-4xl text-white mb-8  text-center">Slots de {station.station_name}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {slots.map((slot) => (
                        <SlotCardClient key={slot.id} slot={slot} addRent={(data) => useAddRent(data)} returnBike={(data) => useReturnBike(data)} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SlotsListClient;