import Joi from 'joi';
import { JoiSchema } from '../utils/validator';
import { AuthLoginDTO, AuthRegisterDTO} from '../model/dto/AuthDto';

export const credentialsLoginValidator: JoiSchema<AuthLoginDTO> = {
  email: Joi.string().email().required(),
  password: Joi.string().required()
};

export const credentialsRegisterValidator: JoiSchema<AuthRegisterDTO> = {
  apellidos:Joi.string().required(),
  correo:Joi.string().email().required(),
  fecha_nacimiento:Joi.date().iso(),
  password:Joi.string().required(),
  nombres:Joi.string().required(),
  nro_documento:Joi.string().required(),
  confirm_password:Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only":"Las contraseñas deben coincidir"
  })
};
