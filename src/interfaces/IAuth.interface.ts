export interface ICredentialsRegister {
  document: string;
  type_document: string;
  email: string;
  password: string;
}

export interface ICredentialsLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
