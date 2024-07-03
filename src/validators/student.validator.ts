import Joi from 'joi';
import { JoiSchema } from '../utils/validator';
import { StudentCreateDto } from '../model/dto/StudentDto';

export const studentCreateValidator: JoiSchema<StudentCreateDto> = {
  apellidos: Joi.string().required().max(50),
  nombres: Joi.string().required().max(50),
  codigo:Joi.string().required().max(10),
};
