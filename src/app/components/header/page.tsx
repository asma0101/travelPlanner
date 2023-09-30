"use client"
import { isUserLoggedIn } from '@/app/common/utilitiesService';
import { setErrorAlert } from '@/app/redux/Actions/userActions';
import Link from 'next/link';
import { useRouter, useSearchParams  } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../common/utilitiesService';
import ErrorAlert from '../alert/page';
import ReviewForm from '../reviews/addReview/page';
const Header = () => {
	const [isLoginView, setLoginView] = useState(true);
	const [showFeedbackModel, setShowFeedbackModel] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
 	const router = useRouter();
	const searchParams = useSearchParams()
	const view = searchParams?.get('view') || '';
	let loggedIn = isUserLoggedIn();
	const dispatch = useDispatch();
	useEffect(() => {
		setLoginView((view && view === 'login') || false);
	},[view, showFeedbackModel])
	
	
	const handleLogout = () => {
		logoutUser();
		setTimeout(() => {
			router.push(`/auth?view=login`);
			
		}, 1000);
	}

	const toggleModel = (showSuccessMsg: Boolean = false) => {
		setShowFeedbackModel(!showFeedbackModel);
		if (showSuccessMsg) {
			dispatch(setErrorAlert(true, 'Thanks for your feedback!', false));
			setShowAlert(true);
		}
	}
	
    return (
		<>
        <header className="bg-gray-800 p-4 text-white fixed top-0 left-0 right-0 header z-10">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
						<div className="flex items-center cursor-pointer">
							<img src="/logo.jpg" alt="Logo" className="mr-2 h-8" />
							<div className="text-2xl font-bold">Trip Mates</div>
							<div className="pl-4">
								<Link href="/home" className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"> 
									Home </Link>
								<Link href="/about" className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"> 
								About us </Link>
							</div>
						</div>
					{
						!isLoginView  ?
							<>
								{
									!loggedIn ?
											<>
												<div className="flex justify-end">
													<button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
														onClick={ () => {router.push(`/auth?view=login`)} }>Login</button>
													<button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => { router.push(`/auth?view=signup`) }}>Signup</button>
												</div>
											</>
									:
											<>
												<div className="flex justify-end">
													{
														loggedIn ?
															<>
														<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
																	onClick={() => { router.push('/home/myTrips') }}>My Recent Trips</button>
																<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
																		onClick={() => {setShowFeedbackModel(true)}}
																>Submit Feedback</button>
															<button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
																	onClick={handleLogout}>Logout</button>
																</>
														: null
													}
													

													
												</div>
									</>
								}
							</>
						: null								
					}	
				</div>
			</div>
		</header>
		
			{
				showFeedbackModel ?
					<ReviewForm toggleModel={toggleModel}></ReviewForm> : null
			}
			{
				showAlert ? <ErrorAlert></ErrorAlert> : null
			}
		</>
		
    );
}
export default Header;