"use client";
import Link from 'next/link';
import React from 'react';


const TripDetails = (props: any) => {
	
	const toggleModal = () => {
		props.toggleModal();
	}
    return (
		<>
			<div className="mb-4 justify-center flex">
				<h1 className="text-lg">Trip details here</h1>
			</div>
			<div className="justify-center flex">
				<Link href='/dashboard/myTrips' className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Back to List</Link>
			</div>
  
        </>
    );
}

export default TripDetails;