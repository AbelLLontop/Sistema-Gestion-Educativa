import Joi from 'joi';
import { JoiSchema } from '../utils/validator';
import { AreaCreateDto } from '../dto/AreaDto';

export const areaCreateValidator: JoiSchema<AreaCreateDto> = {
  nombre: Joi.string().required().max(60).min(3).messages({
    'string.empty': 'El nombre no puede estar vacío',
    'string.min': 'El nombre debe tener al menos {#limit} caracteres',
    'string.max': 'El nombre no puede tener más de {#limit} caracteres'
  }),
  multiple: Joi.boolean().optional(),
  text:Joi.string().when('multiple', {
      is: true,
      then: Joi.required().messages({
         'any.required': 'El texto es requerido'
      }),
      otherwise: Joi.optional()
   })
};