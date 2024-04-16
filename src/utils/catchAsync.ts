import { NextFunction, Request, Response } from 'express';
import { JoiSchema, validator } from './validator';
export type ParamsFunc = (req: Request<any,any,any,any>, res: Response, next: NextFunction) => Promise<void>;

export const catchAsync = <T>(
  func: ParamsFunc,
  reqBodyValidator?: JoiSchema<any>,
  reqQueryValidator?: JoiSchema<any>
): ParamsFunc => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (reqBodyValidator) {
        const body = await validator(reqBodyValidator).validateAsync(req.body);
        req.body = body;
      }
      if (reqQueryValidator) {
        const query = await validator(reqQueryValidator).validateAsync(req.body);
        req.query = query;
      }
      const ress = await func(req, res, next);
      return ress;
    } catch (e) {
      next(e);
    }
  };
};
