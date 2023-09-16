"use client";
import Trip from "@/app/components/tripCard/page";
import Link from "next/link";

const MyTrips = () => {
    const trips = [
		{
			id: 1, title: 'Kashmir Trip', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		{
			id: 2, title: 'Hunza Tour', startDate: '10 Jul, 2021', endDate: '15 July, 2023'
		},
		{
			id: 3, title: 'Ratti Gali, Arang Kel', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		
	]
    return (
        <>
            <h1 className="text-lg text-center">Here are your recent trips!</h1>
            {
                trips.map((trip) => {
                    return <Trip
                        id={trip.id}
                        title={trip.title}
                        startDate={trip.startDate}
                        endDate={trip.endDate}
                    >
                    </Trip>
                })
            }
            <div className="justify-center flex mt-4">
				<Link href='/dashboard/123' className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Back to Dashboard</Link>
			</div>
        </>
    );
}
export default MyTrips;