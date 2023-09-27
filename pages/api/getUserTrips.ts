import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import validateToken from './middleware';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const userId = Number(req.query.userId);
    try {
    validateToken(req, res, async () => {
        if (req.method === 'GET') {
            const userPlans = await prisma.userPlans.findMany({
                where: {
                userId: userId
                },
                include: {
                user: {
                    select: {
                    id: true,
                    name: true,
                    email: true
                    }
                },
                plan: {
                    include: {
                    pickPoint: {
                        include: {
                        city: true
                        }
                    },
                    destination: true
                    }
                }
                }
            });
            if (!userPlans) {
                return res.status(400).json({ message: 'No trips found!', success: false });
            }
            return res.status(200).json({ success: true, userPlans });
        }        
    })        
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });  
    }finally {
    await prisma.$disconnect();
  }


}

export default Handler;