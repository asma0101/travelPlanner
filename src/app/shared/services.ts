import axios from "axios";
import API_ENDPOINTS from "../common/constants";
import { Trip, User } from "../common/interfaces";
import { getHeaders } from "../common/utilitiesService";
export const getTripDetails = async (id: number) => {
    try {
        let response = await axios.get(`${API_ENDPOINTS.GET_TRIP_DETAILS}/${id}`);
        if (response && response.data.success) {
            return response.data.plan || response; 
        }
        return response;
    } catch (error) {
        return error;

    }

    return null;
}

export const fetchPickPoints = async () => {
    try {
        let response = await axios.get(API_ENDPOINTS.GET_ALL_PICK_POINTS);
        if (response && response.data.success) {
            return response.data.pickPoints || null;
        }
        return response;
    } catch (error) {
        return error;
    }
    
}

export const registerTrip = async (payload:any) => {
    let response = await axios.post(API_ENDPOINTS.REGISTER_TRIP, payload, {
        headers: getHeaders()
    } );
    return response;
}

export const getUserTrips = async (userId: Number) => {
    try {
        let response = await axios.get(`${API_ENDPOINTS.GET_USER_TRIPS}?userId=${userId}`, {
            headers: getHeaders()
        })
        if (response && response?.data.success) {
            return response.data.userPlans || null;
        }
        return response;
    } catch (error) {
        return error;
    }
}

export const getReviews = async () => {
    try {
        let response = await axios.get(API_ENDPOINTS.GET_ALL_REVIEWS);
        if (response && response?.data.success) {
            return response.data.reviews || null;
        }
        return null;
    } catch (error) {
        return error;
        
    }
}

export const initializeTrip = () => {
    let trip: Trip = {
		id: 0,
		destination: {
			 id: 0,
			name: '',
			region: ''
		},
		destinationId: 0,
		pickPoint: {
			id: 0,
			pointName: '',
			cityId: 0,
			city: {
				id: 0,
				name: '',
				pickPoints: []
			}
		},
		pickPointId: 0,
		startDate: new Date(),
		endDate: new Date(),
		isCustomTrip: false,
		services: '',
		totalCharges: 0
    };
    return trip;
}

export const initUser = () => {
    let user: User = {
		userId: 0, cnic:'', contact:''
    }
    return user;
}