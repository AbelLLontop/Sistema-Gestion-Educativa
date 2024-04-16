import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/constants';
export const jwtSignToken = (data: any, options?: jwt.SignOptions) => {
  return jwt.sign(data, JWT_KEY, options);
};

export const jwtVerifyToken = (token: string) => {
  return jwt.verify(token, JWT_KEY);
};
