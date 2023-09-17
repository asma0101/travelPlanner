"use client";

import Trip from "@/app/components/tripCard/page";
import Router, { useRouter } from "next/navigation";


const MyTrips = () => {
    let router = useRouter();
    const trips = [
		{
			id: 1, title: 'Kashmir Trip', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023', services: 'Accommodation, Means, Travel'
		},
		{
			id: 2, title: 'Hunza Tour', startDate: '10 Jul, 2021', endDate: '15 July, 2023', services: 'Accommodation, Means, Travel'
		},
		{
			id: 3, title: 'Ratti Gali, Arang Kel', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023', services: 'Accommodation, Means, Travel'
		},
		
	]
    return (
        <>
            <div className="max-w-screen-lg mx-auto mt-24">
                <div className="flex justify-between items-center mb-4 w-100">
                    <input
                    type="text"
                    className="border p-2 rounded-lg mr-2 w-100"
                    placeholder="Search trips..."
                    />
                </div>
                <div>
                    {trips.map((trip) => (
                        <Trip key={trip.id}
                            id={trip.id}
                            title={trip.title}
                            startDate={trip.startDate}
                            endDate={trip.endDate}
                            servcies={trip.services}
                        >

                        </Trip>
                        // <div className="flex border items-center justify-between" key={trip.id}>
                        //     <div  className=" p-4 mb-4 rounded-lg relative">
                        //         <h2 className="text-xl font-bold mb-2">{trip.title}</h2>
                        //         <p>Start Date: {trip.startDate}</p>
                        //         <p>End Date: {trip.endDate}</p>
                        //     </div>
                        //     <div className="">
                        //         <button className="btn-register  right-0 mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Review</button>
                        //     </div>
                        // </div>
                    ))}
                </div>
                <button className="btn-register  right-0 mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {router.push('/home')}}>Back to Home</button>
            
            </div>
        </>
    );
}
export default MyTrips;