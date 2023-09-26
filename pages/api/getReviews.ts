import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    if (req.method === 'GET') {
        const reviews = await prisma.reviews.findMany({
            include: {
                user: {
                    select: {
                        name: true, 
                    }
                }
                }
    });
        if (!reviews) {
            return res.status(400).json({ message: 'No Reviews found!', success:false});
        }
        return res.status(200).json({ success: true, reviews });
    }
}

export default Handler;