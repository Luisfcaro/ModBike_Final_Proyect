import React from "react";
import { useStations } from "../../../hooks/useStations";
import StationListCard from "../../../components/client/stations/StationListCard";

const StationsListClient = () => {

    const { stations } = useStations();

    return (
        // <div className="row ">
        // {stations.map((station) => (
        //     <StationListCard key={station.id} station={station} />
        // ))
        // }
        // </div>

        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="font-manrope font-bold text-4xl text-white mb-8  text-center">Nuestras Estaciones</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {stations.map((station) => (
                        <StationListCard key={station.id} station={station} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StationsListClient;