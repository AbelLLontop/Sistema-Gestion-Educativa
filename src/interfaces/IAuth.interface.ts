import { ICredentials } from "./ICredentials";

export interface ICredentialsRegister {
  document: string;
  type_document: string;
  email: string;
  password: string;
}

export interface ICredentialsLogin extends Partial<ICredentials>{
  
}

export interface LoginResponse {
  token: string;
}
