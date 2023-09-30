"use client";

import Spinner from "@/app/components/spinner/page";
import Trip from "@/app/components/tripCard/page";
import { setErrorAlert, setLoader } from "@/app/redux/Actions/userActions";
import { getUserTrips } from "@/app/shared/services";
import  { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authGuard from "../../components/authGaurd/page";
import ErrorAlert from "@/app/components/alert/page";


const MyTrips = () => {
    let router = useRouter();
    const [userTrips, setUserTrips] = useState([]);
    let loader = useSelector((state: any) => state.users.loader.loader);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredTrips, setFilteredTrips] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    let dispatch = useDispatch();
    
    useEffect(() => {
        const fetchUserTrips = async () => {
			dispatch(setLoader(true));
            try {
                let userDetails: any = localStorage.getItem('userDetails');
                userDetails = JSON.parse(userDetails);
                let data = await getUserTrips(userDetails.userId);
                if (data && data.success) {
                    setUserTrips(data.userPlans);
                    setFilteredTrips(data.userPlans);
                    dispatch(setLoader(false));
                } else {
                    dispatch(setLoader(false));
                    dispatch(setErrorAlert(true, 'Unable to fetch your trips! Please try later.'));                    
                }
                
            } catch (error) {
                dispatch(setLoader(false));
			    dispatch(setErrorAlert(true, 'Unable to fetch your trips! Please try later.'));

            }
        };
        fetchUserTrips();
    }, [dispatch]);
    useEffect(() => {
        const filtered = userTrips && userTrips.filter((userTrip:any) => {
            const destination = `${userTrip.plan.destination.name} - ${userTrip.plan.destination.region}`;
            return destination.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredTrips(filtered);
    }, [searchTerm, userTrips]);

    return (
        <>
            {
                showAlert ? <ErrorAlert></ErrorAlert> : null
            }
            <div className="max-w-screen-lg mx-auto mt-24 overflow-y-auto">
                {
                    loader ? <Spinner></Spinner> :
                        <>
                            {
                                filteredTrips.length > 0 ?
                                    <>
                                    <div className="flex  items-center mb-4 w-100">
                                        <input
                                        type="text"
                                        className="border p-2 rounded-lg mr-2 w-100"
                                                placeholder="Search trips..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        <FontAwesomeIcon icon={faSearch} />
                                            
                                    </div>
                                    <div className="overflow-y-auto max-h-100">
                                        {
                                            filteredTrips.map((userTrip:any) => {
                                                return <Trip
                                                    key={userTrip.id}
                                                    id={userTrip.plan.id}
                                                    title={`${userTrip.plan.destination.name} - ${userTrip.plan.destination.region}`  }
                                                    startDate={new Date(userTrip.plan.startDate).toLocaleDateString()}
                                                    endDate={new Date(userTrip.plan.endDate).toLocaleDateString()}
                                                    services={userTrip.plan.services}
                                                    status={userTrip.status}
                                            ></Trip>
                                            })
                                        }	
                                    </div>
                        </>
                                    :
                                    <>
                                        <div className="text-[2rem]">
                                            <h2 className="text-[2rem]">No Trips Found!</h2>
                                        </div>
                                        </>
                }
                        
                        <button className="btn-register  right-0 mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => {router.push('/home')}}>Back to Home</button>
                    
                    </>
                }
            </div>
        </>
    );
}
export default authGuard(MyTrips);