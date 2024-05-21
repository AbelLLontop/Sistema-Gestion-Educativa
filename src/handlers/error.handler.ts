import { NextFunction, Request, Response } from 'express';
import ApplicationError from '../utils/CustomError';

export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err?.isJoi) {
    console.log('ERROR DE VALIDACION: ', err?.message);
    return res
      .status(422)
      .send({ error: true, type: 'VALIDATION SCHEMA', message: err?.message, original: err?._original });
  }
  if (err instanceof ApplicationError) {
    console.log('ERROR DE APLICACION: ', err?.message);
    return res.status(400).send({ error: true, type: 'APPLICATION ERROR', message: err?.message });
  }
  console.log('ERROR DE SISTEMA: ', err);
  return res.status(500).send({
    error: true,
    type: 'INTERNAL SERVER ERROR',
    message: err?.message
  });
};
