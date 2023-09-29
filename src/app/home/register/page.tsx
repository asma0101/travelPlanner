"use client"
import authGuard from "../../components/authGaurd/page";
import { PickPoint, Trip, User } from "@/app/common/interfaces";
import { getTotalDays } from "@/app/common/utilitiesService";
import ErrorAlert from "@/app/components/alert/page";
import Spinner from "@/app/components/spinner/page";
import { setErrorAlert, setLoader } from "@/app/redux/Actions/userActions";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTripDetails,fetchPickPoints, registerTrip, initializeTrip, initUser } from '../../shared/services';

const RegisterTrip = () => {
	
	let user = initUser();
	let pickPointsData: PickPoint[] = [];
	const router = useRouter();
	const [selectedTrip, setSelectedTrip] = useState(initializeTrip());
	const [tripDays, setTripDays] = useState(1);
	const [formData, setFormData] = useState({
		pickpoint: '',
		contact: '',
		cnic: '',
	});
	const [errors, setErrors] = useState({
		pickPoint: '',
		cnic: '',
		contactNumber: '',
	});
	const [isFormValid, setIsFormValid] = useState(false);
	const [loggedInUserData, setLoggedInUserData] = useState(user);
	const [pickPoints, setPickPoints] = useState(pickPointsData);
	const searchParams = useSearchParams();
	const tripId = searchParams?.get('tripId');
	let loader = useSelector((state: any) => state.users.loader.loader);
	let isDisplayAlert = useSelector((state: any) => state.users.alertData.displayAlert)
	let dispatch = useDispatch();

	useEffect(() => {
		const userData: any = localStorage.getItem('userDetails') || null;
		setLoggedInUserData(JSON.parse(userData));
		const fetchTripDetails = async () => {
			dispatch(setLoader(true));
			try {
				let plan = await getTripDetails(Number(tripId));
				if (plan !== null)
					setSelectedTrip(plan);
					setTripDays(getTotalDays(plan));
					dispatch(setLoader(false));
			} catch (error) {
				dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));
			}
		}
		const getPickPoints = async () => {
			try {
				let pickPointsResponse = await fetchPickPoints();
				if (pickPointsResponse !== null)
					setPickPoints(pickPointsResponse);
			} catch (error) {
				dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));
			}
		}
		fetchTripDetails();
		getPickPoints();
		
	},[dispatch,router, tripId]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (formData.pickpoint !== '' && formData.contact !== '' && formData.cnic != '') {
			const flag = validateForm();
			if (flag) {
				dispatch(setLoader(true))
				try {
				let payload = {
					userDetails: {
						userId: loggedInUserData && loggedInUserData.userId,
						cnic: formData.cnic,
						contact: formData.contact
					},
					tripDetails: {
						tripId: selectedTrip.id,
						pickPoint: formData.pickpoint
					}
				}
				let response = await registerTrip(payload);
				if (response?.data.success) {
					dispatch(setErrorAlert(true, 'Registration Success!', false));
					setFormData({
						pickpoint: '',
						contact: '',
						cnic: '',
					});
					router.push('/home/myTrips');

					}
				else {
						dispatch(setErrorAlert(true, response.data.message));

					}
				} catch (error) {
					dispatch(setErrorAlert(true, 'Registration Failed!'));
				}
				dispatch(setLoader(false))
				

			}
			
		}
	};

	const handleChange = (e:any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		setErrors({
			...errors,
			[name]: '', 
		});
	};

	const validateForm = () => {
		let valid = true;
		const newErrors = { ...errors };

		if (formData.pickpoint.trim() === '') {
			valid = false;
			newErrors.pickPoint = 'Please choose your pick up point';
		}

		const cnicRegex = /^[\d-]+$/;
		if (!cnicRegex.test(formData.cnic) || formData.cnic.length !== 15) {
			valid = false;
			newErrors.cnic = 'Invalid CNIC format';
		}

		const contactNumberRegex = /^\d+$/;
		if (!contactNumberRegex.test(formData.contact) || formData.contact.length !== 11) {
			valid = false;
			newErrors.contactNumber = 'Invalid Contact Number';
		}
		setErrors(newErrors);
		setIsFormValid(valid);

		return valid;
	}
    return (
		<>
			{
					isDisplayAlert  ? <ErrorAlert></ErrorAlert> : null
				}
			<div className="flex justify-center items-center h-screen trip-details-bg-img">

				
				{
					loader ? <Spinner></Spinner> :
						<>
					<div className="w-1/2 p-6  h-screen flex justify-center items-center margin-top-10">
					<div className="w-500 bg-white p-6">
						<h2 className="textXLg font-bold mb-4">Let&apos;s Explore Together</h2>
						<div className="mb-4">
							<p className="font-bold text-blue-600">Destination:</p>
							<p>{selectedTrip.destination.name}, { selectedTrip.destination.region}</p>
						</div>
						<div className="mb-4">
							<p className="font-bold text-blue-600">Number of Days:</p>
							<p>{tripDays} day/s</p>
						</div>

						<div className="mb-4">
							<p className="font-bold text-blue-600">Trip Charges:</p>
							<p>Rs. {selectedTrip.totalCharges}</p>
						</div>

						<div className="mb-4">
							<p className="font-bold text-blue-600">Services Available:</p>
							<ul className="list-disc pl-4">
								<li>
									{selectedTrip.services}
								</li>
							</ul>
						</div>
						<div className="mb-4">
							<p className="font-bold text-red-900">IMPORTANT:</p>
							<ul className="list-disc pl-4">
								<li>Please provide your active contact/email</li>
								<li>Pick up time shall be informed one day prior departure</li>
								<li>Payment to be done in cash before departure</li>
								<li>Please bring with you necessary refereshment e.g Water, snacks etc</li>
							</ul>
						</div>

						
					</div>

				</div>
				
					<div className="w-1/2 p-6   shadow-md rounded">
					<div className="flex justify-center items-center h-screen">
						<div className="w-500 p-6 bg-white border shadow-md rounded ">
							<h2 className="textXLg font-bold mb-4">Register For Trip</h2>
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label htmlFor="pickpoint" className="block text-gray-700 font-bold mb-2">
										Choose Pickpoint
									</label>
									<select
										id="pickpoint"
										name="pickpoint"
										value={formData.pickpoint}
										onChange={handleChange}
										className="block w-full py-2 px-3 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
												>
										<option value="">Select Pickpoint</option>
										{
											pickPoints.map((pickPoint: PickPoint) => (
												<option value={pickPoint.id} key={pickPoint.id}>
													{pickPoint.pointName + ', ' + pickPoint.city.name}
												</option>
											))
										}
									</select>

								</div>

								<div className="mb-4">
									<label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
										Add Contact Number
									</label>
									<input
										type="text"
										id="contact"
										name="contact"
										placeholder="e.g 03037887723"
										value={formData.contact}
										onChange={handleChange}
										className="block w-full py-2 px-3 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
												/>
										<p className="error text-red-800">{errors.contactNumber}</p>
											
								</div>

								<div className="mb-4">
									<label htmlFor="cnic" className="block text-gray-700 font-bold mb-2">
										CNIC
									</label>
									<input
										type="text"
										id="cnic"
										name="cnic"
										placeholder="xxxxx-xxxxxxx-x"
										value={formData.cnic}
										onChange={handleChange}
										className="block w-full py-2 px-3 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
												/>
										<p className="error text-red-800 ">{errors.cnic}</p>
											
								</div>

								<div className="mt-6">
									<button
										type="submit"
										className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
									>
										Confirm Registration
									</button>
								</div>
							</form>
						</div>
					</div>
							</div>
							</>
				}
				

				
			</div>
			
			
            
        </>
    );

    
}

export default authGuard(RegisterTrip);