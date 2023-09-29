import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    try {
        if (req.method === 'GET') {
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
        if (!plans) {
            return res.status(400).json({ message: 'No trips found!' });
        }
        return res.status(200).json({ success: true, plans });
    }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', errorData: error });
    }
    
}

export default Handler;