// "use client"
import { PrismaClient } from '@prisma/client';
import Trip from "../components/tripCard/page";

const prisma = new PrismaClient();


const fetchUpcomingTrips = async () => {
	const plans = await prisma.plans.findMany({
    include: {
      destination: {
        select: {
          name: true, 
          region: true 
        }
      },
      pickPoint: {
        select: {
          pointName: true, 
          city: {
            select: {
              name: true 
            }
          }
        }
      },
    }
  });

  return plans;
}
let plans: any = [];
const Trips = async () => {

    const trips = await fetchUpcomingTrips();
    plans = trips;

    return (
        <>
            <div className="w-1/2 p-4 overflow-y-auto">
					<h2 className="text-2xl font-bold mb-4">Upcoming Trips</h2>
					<div className="overflow-y-auto max-h-80">
						{
							plans.map((plan:any) => {
								return <Trip
									key={plan.id}
									id={plan.id}
									title={`${plan.destination.name} - ${plan.destination.region}`  }
									startDate={plan.startDate.toLocaleDateString()}
									endDate={plan.endDate.toLocaleDateString()}
									services={plan.services}
								></Trip>
							})
					}			  
					</div>
				</div>
        </>
    );
}
export default Trips;