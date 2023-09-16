"use client";

import TripDetails from '@/app/dashboard/myTrips/viewTrip/[_tripId]/page';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Trip = (props: any) => {
    
    const [showDetails, setShowDetails] = useState(false);

    const toggleModal = (flag:any) => {
        // setShowDetails(flag);
    };
    const router = useRouter();
    return (
        <>
            <div
                onClick={() => {
                    // setShowDetails(!showDetails);
                    router.push(`/dashboard/myTrips/viewTrip/${props.id}`)
                }}   
                className="border border-gray-300 cursor-pointer rounded-lg hover:border-blue-500 hover:shadow-md p-4 flex items-center transition duration-300">
                <img src="/tripIcon.png" alt="Trip Icon" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                    <h3 className="text-xl font-bold ">{props.title}</h3>
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
            </div>
            {
                showDetails ?
                    <TripDetails
                        title={props.title}
                        startDate={props.startDate}
                        endDate={props.endDate}
                        toggleModal={toggleModal}
                    >

                    </TripDetails>
                    : null
            }

      </>      
    );
}
export default Trip;