import {PrismaClient } from '@prisma/client';
import Service from "../components/service/page";

interface Service {
  id: number;
  serviceName: string;
  charges: number;
  description: string;
  img: string;
  Link: string;
}
const prisma = new PrismaClient();

const fetchServices = async () => {
	const services = await prisma.services.findMany();
	return services;
}
const Services = async () => {
    const services = await fetchServices();
    return (
        <>
            <div className="flex justify-center mb-4 max-w-screen-xl mx-auto">
					{
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
					}
					
				</div>
        </>
    );
}
export default Services;