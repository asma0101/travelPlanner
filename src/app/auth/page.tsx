"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API_ENDPOINTS, { HOST } from '../common/constants';
import { setErrorAlert, setLoader, setLoggedInUser, setLoggedInUserData } from '../redux/Actions/userActions';
import axios from 'axios';
import ErrorAlert from '../components/alert/page';
import Link from 'next/link';
import {isUserLoggedIn, storeLoggedInUser} from '../common/utilitiesService';
import Spinner from '../components/spinner/page';

const Login = () => {

	const router = useRouter();
	const searchParams = useSearchParams()
	const view = searchParams?.get('view');
	let dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formType, setFormType] = useState(view);
	const isError = useSelector((state: any) => state.users.alertData.displayAlert);
	const loader = useSelector((state: any) => state.users.loader.loader);
	if (isUserLoggedIn()) {
			router.push('/home');
	}
	
	useEffect(() => {
	},[formType])

	const toggleView = (viewValue: string) => {
		setFormType(viewValue) 
		resetForm();
	}
	const SignIn = async (e: any) => {
		e.preventDefault();
		const payload:any = { email, password };
		if (formType === 'signUp') {
			payload['name'] = name;
			handleSignUp(payload);
		} else {
			handleLogin(payload);
		}
	}
	const handleLogin = async (payload: any) => {
		try {
			dispatch(setLoader(true));
			const response:any = await axios.post(API_ENDPOINTS.LOGIN, payload);
			if (response && response?.data.success) {
				dispatch(setLoader(false));
				storeLoggedInUser(response.data);
				dispatch(setLoggedInUser(true));
				dispatch(setLoggedInUserData(response?.data.user));
				setTimeout(() => {
					router.push('/home');
					localStorage.setItem('loggedIn', 'true');
				}, 1000);
			} else {
				dispatch(setLoader(false));
				dispatch(setErrorAlert(true, response?.data.message || 'Invalid Credentials!'));
			}
		} catch (error) {
				dispatch(setLoader(false));
			dispatch(setErrorAlert(true, 'Invalid Credentials!'));
		}
	} 
	const handleSignUp = async (payload: any) => {
		setLoader(true);
		if (payload.name != '' && payload.email != '' && payload.password != '') {
			try {
			const response:any = await axios.post(API_ENDPOINTS.SIGN_UP, payload);
				if (response && response?.data.success) {
					resetForm();
				dispatch(setLoader(false));
				dispatch(setErrorAlert(true, 'Account created successfully!',false));
				setFormType('login');
				
			} else {
				dispatch(setLoader(false));
				dispatch(setErrorAlert(true, response?.data.message || 'Something went wrong!'));
			}
			} catch (error) {
				dispatch(setLoader(false));
				dispatch(setErrorAlert(true, 'Something went wrong!'));
			}

		} else {
			dispatch(setErrorAlert(true, 'Please fill in all fields!'));
		}
	}
	const resetForm = () => {
		setName('');
		setPassword('');
		setEmail('');
	}
	return (
		<>
			{
				<>
					{isError ? <ErrorAlert></ErrorAlert> : null}
			<div className="flex h-screen">
				<div className="flex-1 flex justify-center items-center flex-1 bg-cover bg-center" style={{backgroundImage: 'url("/background.jpg")'}}>
					<div className="max-w-md w-full p-8 bg-white rounded shadow-lg">
						<h2 className="text-2xl font-bold mb-6 text-center">
							{formType === 'login' ? 'Login' : 'Sign up'}
						</h2>
						<form onSubmit={SignIn}>
							{
								formType === 'signUp' ?
									<div className="mb-4">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Name</label>
										<input 
											className="border rounded w-full py-2 px-3" 
											type="name" 
											id="name" 
											value={name}
											onChange={(e) => setName(e.target.value)}
											required 
										/>
									</div>
								: null
							}
							
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
								<input 
									className="border rounded w-full py-2 px-3" 
									type="email" 
									id="email" 
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required 
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
								<input 
									className="border rounded w-full py-2 px-3" 
									type="password" 
									id="password" 
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required 
								/>
							</div>
							<button 
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
								type="submit">
								{formType === 'login' ? 'Login' : 'Sign Up'}
										</button>
										{loader ? <Spinner></Spinner>:null}
							<p>
								{formType === 'login' ? `Don't have an account? ` : 'Already have an account? '}
								
								<span onClick={() => { toggleView(formType === 'login' ? 'signUp' : 'login') }}
								className=" text-blue cursor-pointer underline font-semibold">
									{formType === 'login' ? 'Sign Up' : 'Login'}
								</span>
							</p>
						</form>
					</div>
				</div>
						</div>
						</>
			}
			
    </>
  );
}

export default Login;