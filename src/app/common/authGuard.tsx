
"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorAlert } from '../redux/Actions/userActions';

export default function authGuard  (WrappedComponent: any) {
  return (props:any) => {
      const router = useRouter();
      const dispatch = useDispatch();

    useEffect(() => {
      const token = localStorage.getItem('token');
        if (token) {
            return;
        }
        else if (!token) {
            dispatch(setErrorAlert(true, 'Please login to proceed!'));
            router.push('/auth?view=login'); 
        }
    }, [router, dispatch]);

    return <WrappedComponent {...props} />;
  };
};

