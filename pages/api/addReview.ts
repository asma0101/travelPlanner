import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { userId, comments, rating } = req.body;

    try {
      const review = await prisma.reviews.create({
        data: {
          userId,
          comments,
          rating,
        },
      });

      res.status(201).json({success:true, review});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error!', success: false });
    }
  } else {
    res.status(405).json({ message: 'Internal server error!', success: false });
  }
}
export default Handler;
