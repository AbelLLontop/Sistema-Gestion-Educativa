import Joi, { Schema } from 'joi';

export type JoiSchema<T> = {
  [K in keyof T]: Schema;
};

export const validator = (req: JoiSchema<any>) => {
  return Joi.object(req).options({
    stripUnknown: true
  });
};
