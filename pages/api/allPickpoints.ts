import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    if (req.method === 'GET') {
        const pickPoints = await prisma.pickPoints.findMany({
            include: {
                city: {
                    select: {
                        name: true 
                    }
                }
            }
        });
        if (!pickPoints) {
            return res.status(400).json({ message: 'No trips found!', success: false });
        }
        return res.status(200).json({ success: true, pickPoints });
    }
}

export default Handler;