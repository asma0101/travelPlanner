import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import validateToken from './middleware';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const prisma = new PrismaClient();
  validateToken(req, res, async () => {
    if (req.method === 'POST') {
      const { tripDetails, userDetails } = req.body;
      try {
        const userPlans = await prisma.userPlans.findMany({
			where: {
			userId: userDetails.tripId,  
			planId: tripDetails.tripId,  
			},
		});
		  if (userPlans && userPlans.length > 0) {
			    return res.status(201).json({ message: `You're already registered for this trip!`, success: false });
		  }
      const newPlan = await prisma.userPlans.create({
		  data: {
              user: { connect: { id: userDetails.userId } },
              plan: { connect: { id: tripDetails.tripId } },
              CNIC: userDetails.cnic,
              contact: userDetails.contact,
              status: false
        },
      });
      return res.status(201).json({ message: 'Plan registered successfully!', success: true });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error,  success: false });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false  });
  }      
    })

}

export default Handler;

  