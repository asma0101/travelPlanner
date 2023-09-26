"use client"
import Service from "../components/service/page";
import Loading from './loading';
import { Services as ServiceInterface } from '../common/interfaces';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_ENDPOINTS from '../common/constants';
import { useDispatch } from "react-redux";
import { setErrorAlert } from "../redux/Actions/userActions";
interface Service {
  id: number;
  serviceName: string;
  charges: number;
  description: string;
  img: string;
  Link: string;
}

const Services =  () => {
	const servicesData: ServiceInterface[] = [];
	const [services, setServices] = useState(servicesData);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get(API_ENDPOINTS.GET_SERVICES);
				if (response && response?.data?.success) {
					setServices(response.data.services);
				}
				else {
				}
			} catch (error) {
				dispatch(setErrorAlert(true, 'Something went wrong! Please try later'));
			}
		}
		fetchData();
	},[])
    return (
		<>
			
			<div className="flex justify-center mb-4 max-w-screen-xl mx-auto">
			{

				services.length > 0 ? 
						services.map((service) => {
							return <Service
								key={service.id}
								id={service.id}
								title={service.serviceName}
								description={service.description}
								link={service.Link}
								img={service.img}
								charges={service.charges}
							></Service>
						})
				: <Loading></Loading>
				}
			</div>
				
            
        </>
    );
}
export default Services;