import { ICredentials } from "./ICredentials";

export interface IUser{
    nombres:string,
    apellidos:string,
    nro_documento:string,
    correo:string,
    fecha_nacimiento:Date,
    credentials:ICredentials,
    status:boolean
}