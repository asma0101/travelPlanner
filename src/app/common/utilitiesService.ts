
import { Trip } from "./interfaces";

export const getTotalDays = (tripData: Trip) => {
    const startDate = new Date(tripData.startDate);
    const endDate = new Date(tripData.endDate);
    const timeDifference = (endDate.getTime() - startDate.getTime());
    return Math.round(timeDifference / (1000 * 60 * 60 * 24));
}

export const storeLoggedInUser = (data: any) => {
    let userDetails = {
        userId: data?.user.userId || 0,
        userName: data?.user.userEmail || '', 
        token: data?.token || '',
        loggedIn: true
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    localStorage.setItem('token', data?.token);
}
export const isUserLoggedIn = () => {
    let userDetails = null;
    if (typeof window !== 'undefined') {
            userDetails = localStorage.getItem('userDetails');
    }
    if (userDetails) {
        let userData = JSON.parse(userDetails);
        return userData.loggedIn || false;
    }
}

export const logoutUser = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('loggedIn');
}

export const getHeaders = () => {
    if (typeof window !== 'undefined') {
        let token = localStorage.getItem('token');
        return {
            Authorization: `Bearer ${token}`
        }
    }
}