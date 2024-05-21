import Joi from 'joi';
import { JoiSchema } from '../utils/validator';
import { AuthLoginDTO, AuthRegisterDTO} from '../model/dto/AuthDto';

export const credentialsLoginValidator: JoiSchema<AuthLoginDTO> = {
  email: Joi.string().email().max(100).required(),
  password: Joi.string().max(100).required()
};

export const credentialsRegisterValidator: JoiSchema<AuthRegisterDTO> = {
  apellidos:Joi.string().max(50).required(),
  correo:Joi.string().email().max(50).required(),
  fecha_nacimiento:Joi.date().max("now").required(),
  password:Joi.string().max(20).min(6).required(),
  nombres:Joi.string().max(50).required(),
  nro_documento:Joi.string().required(),
  confirm_password:Joi.string().valid(Joi.ref("password")).messages({
    "any.only":"Las contraseñas deben coincidir"
  }).required()
};
