import { ICredentials } from "../interfaces/ICredentials";
import { IUser } from "../interfaces/IUser.interface";

export interface AuthLoginDTO extends ICredentials{
}

export interface AuthRegisterDTO extends Omit<IUser,"status"|"credentials">{
    password:string,
    confirm_password:string,
}