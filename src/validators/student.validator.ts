import Joi from 'joi';
import { IStudentCreate } from '../interfaces/IStudent';
import { typeDocumentValidator } from './globals.validator';
import { JoiSchema } from '../utils/validator';

export const studentCreateValidator: JoiSchema<IStudentCreate> = {
  surnames: Joi.string().required(),
  document: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  names: Joi.string().required(),
  type_document: typeDocumentValidator.required()
};

export const studentUpdateValidator: JoiSchema<IStudentCreate> = {
  surnames: Joi.string().optional(),
  document: Joi.string().optional(),
  dateOfBirth: Joi.date().optional(),
  names: Joi.string().optional(),
  type_document: typeDocumentValidator.optional()
};
