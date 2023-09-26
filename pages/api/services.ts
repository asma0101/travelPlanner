import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    if (req.method === 'GET') {
        const services = await prisma.services.findMany();
        if (!services) {
            return res.status(400).json({ message: 'Services not Found!' });
        }
        return res.status(200).json({ success: true, services });
    }
}

export default Handler;