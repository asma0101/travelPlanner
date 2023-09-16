"use client"
import Home from "@/app/home/page";
import { useEffect, useState } from "react";

const Dashboard = () => {
	const [loggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		const isLoggedIn = localStorage.getItem('loggedIn') 
		setIsLoggedIn(isLoggedIn ? JSON.parse(isLoggedIn) : false);
	});
	
  return (
    <>
      <Home loggedIn={loggedIn}></Home>
      {/* <h1 className="text-lg justify-center flex">Welcome to user dashboard</h1>
      
    <div className="justify-center flex">
				<Link href='/dashboard/myTrips' className=" py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">View My Trips</Link>
			</div> */}
      
    </>
  );
}

export default Dashboard;