"use client"
import { useRouter } from 'next/navigation';

const Header = (props:any) => {
	
	const router = useRouter();
	
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
					<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800">Customize Your Trip</button>
							{
								!props.loggedIn ? 
									<>
										< button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
										onClick={ () => {router.push(`/auth?view=login`)} }>Login</button>
										<button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => { router.push(`/auth?view=signup`) }}>Signup</button>
										</>
									:
									<>
										<button className="mr-2 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-800"
											onClick={() => {
												router.push('/dashboard/myTrips')
										}}>My Recent Trips</button>
									<button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
										onClick={() => { router.push(`/auth?view=login`); localStorage.removeItem('loggedIn')} }>Logout</button>
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