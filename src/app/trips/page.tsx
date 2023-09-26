"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import API_ENDPOINTS from '../common/constants';
import Trip from "../components/tripCard/page";
import { Trip as TripInterface } from '../common/interfaces';
import Loading from './loading';
import { useDispatch } from 'react-redux';
import { setErrorAlert } from '../redux/Actions/userActions';


const Trips =  () => {
	const tripArr: TripInterface[] = [];
	const [trips, setTrips] = useState(tripArr);
	const parentView = 'home';
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get(API_ENDPOINTS.GET_TRIPS);
				if (response && response?.data.success) {
					setTrips(response.data.plans);
				}
				else {
					dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));
				}
			} catch (error) {
					dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));

			}
		}
		fetchData();
	},[dispatch])
    return (
		<>
            <div className="w-1/2 p-4 overflow-y-auto">
			
				{
					trips.length > 0 ?
					<>
						<h2 className="text-2xl font-bold mb-4">Upcoming Trips</h2>
						<div className="overflow-y-auto max-h-80">
							{
								trips.map((plan:any) => {
									return <Trip
										key={plan.id}
										id={plan.id}
										title={`${plan.destination.name} - ${plan.destination.region}`  }
										startDate={new Date(plan.startDate).toLocaleDateString()}
										endDate={new Date(plan.endDate).toLocaleDateString()}
										services={plan.services}
										viewFrom={parentView}
									></Trip>
								})
						}				  
						</div> 
						</>
						: <Loading></Loading>
				}
			</div>

					
        </>
    );
}
export default Trips;