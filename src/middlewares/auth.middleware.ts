import { NextFunction, Request, Response } from 'express';
import { jwtVerifyToken } from '../utils/jwt';

export const authTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  try {
    const data = jwtVerifyToken(token);
    console.log(data);
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Invalid Token' });
  }
};
