"use client";

import { isUserLoggedIn } from '@/app/common/utilitiesService';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Trip = (props: any) => {
    

    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        setLoggedIn(isUserLoggedIn());
    }, []);
    const openTripDetails = () => {
        router.push(`/home/myTrips/viewTrip/${props.id}`)
    }
    return (
        <>
            <div className=" w-100 items-center  border border-gray-300 hover:border-blue-500 hover:shadow-md overflow-x-hidden"
                onClick={openTripDetails}>
                <div className="cursor-pointer rounded-lg  p-4 flex justify-between items-center  transition duration-300">
                    <div className=" flex ">
                        <img src="/tripIcon.png" alt="Trip Icon" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                            <h3 className="text-xl font-bold ">{props.title}</h3>
                            <p>{props.startDate} - {props.endDate}</p>
                        </div>
                    </div>

                    <div className="p-2 flex justify-end">
                        {
                            props.viewFrom !== 'home' ?
                                    props.status && loggedIn ?
                                <button className="text-2x px-4 py-2 rounded-lg tooltip">
                                    <span className="tooltiptext">Trip Completed</span>
                                    <FontAwesomeIcon style={{ fontSize: '2rem', color: 'green' }} icon={faCircleCheck} />
                                </button>
                                : <button className="text-2x px-4 py-2 rounded-lg tooltip">
                                    <span className="tooltiptext">Trip Scheduled</span>
                                    <FontAwesomeIcon className="text-gray-500" style={{ fontSize: '2rem'}} icon={faClock} />
                                    </button>
                                :
                            <button className="text-2x px-4 py-2  bg-blue-500 text-white rounded "
                                    onClick={openTripDetails} >
                                    Details
                                {/* <span className="tooltiptext">Details</span> */}
                                {/* <FontAwesomeIcon className="text-blue-500" style={{ fontSize: '2rem' }} icon={faCircleInfo} /> */}
                            </button>
                        }
                    </div>
                </div>
            </div>
            

      </>      
    );
}
export default Trip;