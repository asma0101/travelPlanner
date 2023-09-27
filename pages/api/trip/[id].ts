import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
        if (req.method === 'GET') {
        const plan = await prisma.plans.findUnique({
            where: { id: Number(id) },
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
        if (!plan) {
            return res.status(400).json({ message: 'Trip details not found!', success: false });
        }
        return res.status(200).json({ success: true, plan });
    }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
    await prisma.$disconnect();
  }
    
}

export default Handler;