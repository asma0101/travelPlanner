import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const prisma = new PrismaClient();
    try {
      if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: {email: email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password', success:false });
    }

	  const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password', success:false });
    }

    const token = jwt.sign({ userId: user.id }, 'tr@v3l', {
      expiresIn: '1h', 
    });

    return res.status(200).json({ token, user: { userId: user.id, userEmail: user.email } , success:true });
  } else {
    return res.status(405).json({ message: 'Method not allowed', success:false });
  }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' ,errorData: error});
    }
  
}

export default Handler;

  