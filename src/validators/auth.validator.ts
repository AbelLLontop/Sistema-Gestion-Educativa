import Joi from 'joi';
import { emailValidator, typeDocumentValidator } from './globals.validator';
import { JoiSchema } from '../utils/validator';
import { ICredentialsLogin, ICredentialsRegister } from '../interfaces/IAuth.interface';

export const credentialsLoginValidator: JoiSchema<ICredentialsLogin> = {
  email: emailValidator.required(),
  password: Joi.string().required()
};

export const credentialsRegisterValidator: JoiSchema<ICredentialsRegister> = {
  document: Joi.string().required(),
  type_document: typeDocumentValidator.required(),
  email: emailValidator.required(),
  password: Joi.string().required()
};
