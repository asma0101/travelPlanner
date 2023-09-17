"use client";

import TripDetails from '@/app/home/myTrips/viewTrip/[_tripId]/page';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Trip = (props: any) => {
    
    const [showDetails, setShowDetails] = useState(false);

    const openTripDetails = () => {
        router.push(`/home/myTrips/viewTrip/${props.id}`)
    };
    const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-between border border-gray-300 hover:border-blue-500 hover:shadow-md"
            onClick={openTripDetails}>
                <div className="  cursor-pointer rounded-lg  p-4 flex items-center transition duration-300"
                >
                    <img src="/tripIcon.png" alt="Trip Icon" className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                    <h3 className="text-xl font-bold ">{props.title}</h3>
                    <h3 className="text-xl">Services Included: {props.services}</h3>
                    <p>{props.startDate} - {props.endDate}</p>
                    </div>
                </div>
                <div className="p-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={openTripDetails} >Register</button>
                </div>

            </div>


      </>      
    );
}
export default Trip;