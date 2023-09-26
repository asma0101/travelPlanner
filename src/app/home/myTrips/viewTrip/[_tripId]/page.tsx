"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import API_ENDPOINTS from '@/app/common/constants';
import { Trip } from '@/app/common/interfaces';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import { getTotalDays, isUserLoggedIn } from '@/app/common/utilitiesService';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAlert, setLoader } from '@/app/redux/Actions/userActions';
import Spinner from '@/app/components/spinner/page';


const TripDetails =  (props: any) => {
		let trip: Trip = {
		id: 0,
		destination: {
			 id: 0,
			name: '',
			region: ''
		},
		destinationId: 0,
		pickPoint: {
			id: 0,
			pointName: '',
			cityId: 0,
			city: {
				id: 0,
				name: '',
				pickPoints: []
			}
		},
		pickPointId: 0,
		startDate: new Date(),
		endDate: new Date(),
		isCustomTrip: false,
		services: '',
		totalCharges: 0
	};
	const [tripDetails, setTripDetails] = useState(trip);
	const [totalDays, setTotalDays] = useState(1);
	const tripId = Number(props.params._tripId);
	const router = useRouter();
	let dispatch = useDispatch();
	const loader = useSelector((state: any) => state.users.loader.loader);
	const [loggedIn, setLoggedIn] = useState(false);
	try {
		
		useEffect(() => {
			setLoggedIn(isUserLoggedIn());
			const fetchData = async () => {
				dispatch(setLoader(true));
				let response = await axios.get(`${API_ENDPOINTS.GET_TRIP_DETAILS}/${tripId}`);
				if (response && response?.data?.success) {
					setTripDetails({...response.data.plan});
					setTotalDays(getTotalDays({...response.data.plan}));
				}
				dispatch(setLoader(false));
			}
			fetchData();
		}, [dispatch, tripId]);
	} catch (e) {
			dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));

	}
	
	const registerTrip = () => {
		router.push(`/home/register?tripId=${tripId}`)
	}

    return (
		<>
			{
				loader ? <Spinner></Spinner>
					:
					<div className="bg-gray-100 h-full  mt-24">
						<div className="mb-4 justify-center flex">
							<h1 className="text-lg">Trip details here</h1>
						</div>
						<div className="container mx-auto py-8">
							<Head>
								<title>Trip Details</title>
							</Head>

							<div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
								<h1 className="text-3xl font-bold mb-4">
									Join us on an adventurous trip to {`"${tripDetails.destination.name}, ${tripDetails.destination.region}"`}
						</h1>
								<div className=" ">
									<p className="text-xl font-semibold">
										<span className="font-bold text-2xl">No. Of Days</span>: {totalDays}
									</p>
									<p className="text-xl font-semibold">
										<span className="font-bold text-2xl">
											From: {new Date(tripDetails.startDate).toLocaleDateString() + ' '}</span>
											<span className="font-bold text-2xl">
											 To: {new Date(tripDetails.endDate).toLocaleDateString()}</span>
									</p>


								</div>
								<div className="flex mb-4 mt-3">
									<div className="mr-4">
										<img
											src="/tripIcon.png"
											alt={tripDetails.pickPoint.pointName}
											className="w-50 h-50 object-cover rounded"
										/>
									</div>
									<div>
										<p className="text-xl font-semibold mb-2">Trip Details:</p>
										<p>
											Let&apos;s get captivated by the stunning beauty of Mountains ! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente eum sed animi laudantium. Repellendus, harum. Ad fugiat voluptatem, repudiandae, ut a, officiis magni sed delectus blanditiis dolor voluptas nemo.
								</p>
									</div>
								</div>

								<div className="mb-4">
									<p className="text-xl font-semibold mb-2">Services Included:</p>
									{tripDetails.services}
								</div>

								<div className="justify-between flex">
									<button onClick={registerTrip} className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Register</button>
									{
										loggedIn ?
									<Link href='/home/myTrips' className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Back to Trips</Link>
											:
									<Link href='/home' className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Back to Home</Link>

									}
						
								</div>
								<div className="justify-end flex">
								</div>
						
							</div>
						</div>
				
				
					</div>
			}
		</>
    );
}

export default TripDetails;