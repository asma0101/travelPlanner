"use client"
import { setErrorAlert } from "@/app/redux/Actions/userActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const authGuard = (WrappedComponent: any) => {
  const AuthGuardComponent = (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        return;
      } else {
        dispatch(setErrorAlert(true, 'Please login to proceed!'));
        router.push('/auth?view=login'); 
      }
    }, [router, dispatch]);

    return <WrappedComponent {...props} />;
  };

  AuthGuardComponent.displayName = `AuthGuard(${getDisplayName(WrappedComponent)})`;

  return AuthGuardComponent;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default authGuard;
