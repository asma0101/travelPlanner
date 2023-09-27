import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    try {
         if (req.method === 'GET') {
        const services = await prisma.services.findMany();
        if (!services) {
            return res.status(400).json({ message: 'Services not Found!' });
        }
        return res.status(200).json({ success: true, services });
    }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }finally {
    await prisma.$disconnect();
  }
   
}

export default Handler;