import Joi from 'joi';
export const idValidator = Joi.string();
export const emailValidator = Joi.string().email();
export const typeDocumentValidator = Joi.string().valid('DNI', 'PASSPORT');
