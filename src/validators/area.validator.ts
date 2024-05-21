import Joi from 'joi';
import { JoiSchema } from '../utils/validator';
import { AreaCreateDto } from '../model/dto/AreaDto';

export const areaCreateValidator: JoiSchema<AreaCreateDto> = {
 nombre: Joi.string().required().max(60).min(3),
 competencias:Joi.array().items(
    Joi.object({
        descripcion: Joi.string().required().max(70).min(3)
    })
 )
};
