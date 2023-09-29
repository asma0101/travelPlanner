"use client"

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { addReview, initUser } from '@/app/shared/services';
import { useDispatch } from 'react-redux';
import { setErrorAlert } from '@/app/redux/Actions/userActions';

const ReviewForm = (props: any) => {
	let user = initUser();
	const [loggedInUserData, setLoggedInUserData] = useState(user);
	const dispatch = useDispatch();

	useEffect(() => {
		const userData: any = localStorage.getItem('userDetails') || null;
		setLoggedInUserData(JSON.parse(userData));
	}, [dispatch])
	const [formData, setFormData] = useState({
		comments: '',
		rating: '',
	});
	const handleChange = (e:any) => {
		setFormData({
		...formData,
		[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e:any) => {
		e.preventDefault();
		console.log(formData);
		let payload = {
			userId: loggedInUserData && loggedInUserData.userId,
			comments: formData.comments,
			rating: Number(formData.rating)
		};
		try {
			const response:any = await addReview(payload);
			if (response) {
				setFormData({
					comments: '',
					rating: '',
				});
				props.toggleModel(true);
			}			
		} catch (e) {
			dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));
		}
	};

	const toggleModel = () => {
		props.toggleModel();
	}
	const calculateRating = (rating:any) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i}>⭐</span>);
        }
        return stars;
	};
	const calculateComments = (rating: any) => {
		const comments = ['Very Bad', 'Not Bad', 'Fair', 'Good', 'Excellent!'];
		return comments[rating-1];
	}
	return (
	<>
		{
			<>
				<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
					<div className="relative w-1/2 my-6 mx-auto max-w-3xl">
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
								<h3 className="text-[1rem] font-semibold">
									Add Your Feedback
								</h3>
								<button
									className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
									onClick={toggleModel}
								>
									<span className=" text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									<FontAwesomeIcon style={{color:'black'}} icon={faClose} />
									</span>
								</button>
							</div>
							<div className="relative p-6 flex-auto">
								<form  className="max-w-md mx-auto">
									<div className="mb-4">
										<label htmlFor="comments" className="block text-gray-700 font-bold mb-2">
										Comments
										</label>
										<textarea
										id="comments"
												name="comments"
										value={formData.comments}
										onChange={handleChange}
										className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										rows={ 4}
										required
										/>
									</div>
									<div className="mb-4">
										<label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
										Rating
										</label>
										<input
										type="range"
										id="rating"
										name="rating"
										value={formData.rating}
										onChange={handleChange}
										className="w-full"
										min="1"
										max="5"
										step="1"
										/>
										<span className="text-gray-700">
											{calculateRating(formData.rating)}
										</span>
										<p className="text-gray-700">
											{calculateComments(formData.rating)}
										</p>
											
									</div>
									
								</form >
							</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
									onClick={handleSubmit}
								>
									Submit
								</button>
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={toggleModel}
									>
										Close
									</button>
								</div>
						</div>
					</div>
          		</div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			
				</>
		}

	</>
	);
};

export default ReviewForm;
