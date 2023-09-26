"use client"
import { setErrorAlert } from '@/app/redux/Actions/userActions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ErrorAlert = () => {
	const dispatch = useDispatch();
	const alertData = useSelector((state: any) => state.users.alertData);
	const [dismissed, setDismissed] = useState(!alertData.displayAlert);
	useEffect(() => {
		setDismissed(!alertData.displayAlert);
	}, [alertData.displayAlert]);
  const dismissAlert = () => {
	  setDismissed(true);
	  dispatch(setErrorAlert(false, ''));
	};
	const applyClasses = () => {
		const classes = ['border', 'px-6', 'py-4', 'rounded', 'w-1/2'];
		if (alertData.isError) {
			classes.push('bg-red-100');
			classes.push('border-red-400');
			classes.push('text-red-700');
		} else {
			classes.push('bg-green-100');
			classes.push('border-green-400');
			classes.push('text-green-700');
		}
		return classes.join(' ');
	};
	return (
		<>
			{
				!dismissed ? 
					<div className="absolute top-0 left-0 right-0 flex justify-center mt-16 z-50">
						<div className={applyClasses()}
						>
							<div className="flex justify-between items-center mb-2">
							<strong className="font-bold">{alertData.isError ? 'Error' : 'Success'}</strong>
							<button onClick={dismissAlert} className={alertData.isError ? 'text-red-700 hover:text-red-900':'text-green-700 hover:text-green-900'}>
								<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
							</div>
							<p className="block sm:inline">{alertData?.alertMsg}</p>
						</div>
					</div>


				: null
			}
			
		</>
    
  );
};

export default ErrorAlert;
