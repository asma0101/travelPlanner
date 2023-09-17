"use client"
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setLoader, setLoggedInUser } from '../redux/Actions/userActions';

const Login = () => {

	const router = useRouter();
	const isLoggedIn = localStorage.getItem('loggedIn') || 'false';
	let dispatch = useDispatch();
	if (isLoggedIn !== 'false') {
			router.push('/home');
	}
	const SignIn = (e: any) => {
		e.preventDefault(); 
		const emailInput = document.getElementById('email');
		const passwordInput = document.getElementById('password');

		if (emailInput != null && passwordInput != null) {
			dispatch(setLoggedInUser(true));
			dispatch(setLoader(true));
			setTimeout(() => {
				router.push('/home');
				localStorage.setItem('loggedIn', 'true');
				
			}, 1000);
		} else {
			alert('Please fill out all fields correctly.');
		}
	}
	return (
		<>
			<div className="min-h-screen bg-gray-200  flex items-center justify-center">
				<div className="bg-white p-8 rounded shadow-lg w-1/3">
					<h2 className="text-2xl mb-4 text-center">Login</h2>
					<form>
					<div className="mb-4">
						<label className="block mb-2 font-bold text-gray-800" htmlFor="email">
						Email
						</label>
						<input
						className="w-full px-3 py-2 border border-blue-500 rounded"
						type="email"
						id="email"
						name="email"
						required
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2 font-bold text-gray-800" htmlFor="password">
						Password
						</label>
						<input
						className="w-full px-3 py-2 border border-blue-500 rounded"
						type="password"
						id="password"
						name="password"
						required
						/>
					</div>
					<button
						className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
							type="button" onClick={SignIn}
					>
						Login
					</button>
					</form>
				</div>
			</div>
    </>
  );
}

export default Login;