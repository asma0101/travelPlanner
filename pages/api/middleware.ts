import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const validateToken = (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized', success:false });
  }

  try {
    const decoded: any = jwt.verify(token.replace('Bearer ', ''), 'tr@v3l'); 
    // req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

export default validateToken;
