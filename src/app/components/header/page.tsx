"use client"
import { isUserLoggedIn } from '@/app/common/utilitiesService';
import { setLoggedInUser } from '@/app/redux/Actions/userActions';
import { useRouter, useSearchParams  } from 'next/navigation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../common/utilitiesService';
const Header = () => {
	const [isLoginView, setLoginView] = useState(true);
	const router = useRouter();
	const searchParams = useSearchParams()
	const view = searchParams?.get('view') || '';
	let loggedIn = isUserLoggedIn();
	useEffect(() => {
		setLoginView((view && view === 'login') || false);
	},[])
	
	
	const handleLogout = () => {
		logoutUser();
		setTimeout(() => {
			router.push(`/auth?view=login`);
			
		}, 1000);
	}
	
    return (
		<>
        <header className="bg-gray-800 p-4 text-white fixed top-0 left-0 right-0 header z-10">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
						<div className="flex items-center cursor-pointer" onClick={ () => {router.push('/home')}}>
						<img src="/logo.jpg" alt="Logo" className="mr-2 h-8" />
						<div className="text-2xl font-bold">Trip Mates</div>
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
													{/* <button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
														onClick={() => { router.push('/home') }}>Make your own Trip
													</button> */}
													{
														loggedIn ?
															<>
														<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
																onClick={() => { router.push('/home/myTrips') }}>My Recent Trips</button>
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
        </>
    );
}
export default Header;