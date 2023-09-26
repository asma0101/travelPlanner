import bcrypt from 'bcrypt';
import {PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const prisma = new PrismaClient();

    if (req.method === 'POST') {
    const { name, email, password } = req.body;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const newUser = await prisma.users.create({
		  data: {
			name,
			email,
			password: hashedPassword,
        },
      });

      return res.status(201).json({ message: 'Account created successfully', success: true  });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error, success: true  });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: true  });
  }
}

export default Handler;

  