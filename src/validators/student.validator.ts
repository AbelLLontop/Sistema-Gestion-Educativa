import Joi from 'joi';
import { IStudentCreate } from '../interfaces/IStudent.interface';
import { JoiSchema } from '../utils/validator';

export const studentCreateValidator: JoiSchema<IStudentCreate> = {
  surnames: Joi.string().required(),
  names: Joi.string().required(),
};

export const studentUpdateValidator: JoiSchema<IStudentCreate> = {
  surnames: Joi.string().optional(),
  names: Joi.string().optional(),
};
