"use client";
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';


const TripDetails = (props:any) => {
	
	const trip = {
		title: 'Amazing Trip to Mountains',
		image: '/mountain_trip.jpg',
		description:
				'Experience the breathtaking beauty of the mountains. Join us for an adventure of a lifetime! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt exercitationem consequuntur, ut velit maiores voluptates debitis. Eaque ad saepe rerum eius assumenda ut a autem, consequatur odio error voluptas omnis!',
		services: ['Accommodation', 'Guided Tours', 'Meals'],
		startDate: '2023-10-01',
		endDate: '2023-10-07',
	};

    return (
		<>
			<div className="bg-gray-100 h-full">
				<div className="mb-4 justify-center flex">
					<h1 className="text-lg">Trip details here</h1>
				</div>
				<div className="container mx-auto py-8">
					<Head>
						<title>Trip Details - {trip.title}</title>
					</Head>

					<div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
						<h1 className="text-3xl font-bold mb-4">{trip.title}</h1>
						<div className="flex mb-4">
							<div className="mr-4">
								<img
								src="/tripIcon.png"
								alt={trip.title}
								className="w-50 h-50 object-cover rounded"
								/>
							</div>
							<div>
								<p className="text-xl font-semibold mb-2">Trip Details:</p>
								<p>{trip.description}</p>
							</div>
						</div>

						<div className="mb-4">
							<p className="text-xl font-semibold mb-2">Services Included:</p>
							<ul className="list-disc pl-4">
								<li>Service1</li>
								<li>Service1</li>
								<li>Service1</li>
								<li>Service1</li>
								<li>Service1</li>
								<li>Service1</li>
							</ul>
						</div>

						<div className="flex ">
							<p className="text-xl font-semibold">Dates: </p>
							<span>
								{trip.startDate} - {trip.endDate}
							</span>
						</div>
					</div>
				</div>
				<div className="justify-center flex">
					<Link href='/home/myTrips' className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Back to List</Link>
				</div>
			</div>
        </>
    );
}

export default TripDetails;