"use client"
import { setLoggedInUser } from '@/app/redux/Actions/userActions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
	
	const router = useRouter();
	let dispatch = useDispatch();

	// const [loggedIn, setIsLoggedIn] = useState(false);
	let loggedIn = useSelector((state: any) => state.users.loggedIn);
	console.log(loggedIn);
	// useEffect(() => {
	// 	// setIsLoggedIn(loggedInValue);
	// }, [loggedIn]);
	
	const handleLogout = () => {
		// setIsLoggedIn(false);
		dispatch(setLoggedInUser(false));
		console.log("after logout value " , loggedIn)
		setTimeout(() => {
			router.push(`/auth?view=login`);
			
		}, 1000);
		localStorage.removeItem('loggedIn');
	}
	
    return (
        <>
        <header className="bg-gray-800 p-4 text-white fixed top-0 left-0 right-0 header z-10">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
				<div className="flex items-center">
					<img src="/logo.jpg" alt="Logo" className="mr-2 h-8" />
					<div className="text-2xl font-bold">Trip Mates</div>
				</div>
				<div>
							<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
								onClick={ () => {router.push('/home')}}>Customize Your Trip</button>
							{
								!loggedIn ? 
									<>
										< button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
										onClick={ () => {router.push(`/auth?view=login`)} }>Login</button>
										<button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => { router.push(`/auth?view=signup`) }}>Signup</button>
										</>
									:
									<>
										<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
											onClick={() => {
												router.push('/home/myTrips')
										}}>My Recent Trips</button>
									<button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
										onClick={handleLogout }>Logout</button>
									</>
							}
				</div>
				</div>
			</div>
		</header>

        </>
    );
}
export default Header;