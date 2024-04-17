import { ICredentialsLogin, ICredentialsRegister, LoginResponse } from '../interfaces/IAuth.interface';
import { jwtSignToken } from '../utils/jwt';

class AuthService {
  async login(credentials: ICredentialsLogin): Promise<LoginResponse> {
    const token = jwtSignToken({
      email: credentials.email
    },{
      expiresIn: '1h'
    });
    return {
      token
    };
  }
  async register(credentials: ICredentialsRegister): Promise<LoginResponse> {
    const token = jwtSignToken({
      email: credentials.email
    },{
      expiresIn: '1h'
    });
    return {
      token
    };
  }
}

export default new AuthService();
