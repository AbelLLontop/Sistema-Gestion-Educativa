import { AuthLoginDTO, AuthRegisterDTO } from '../model/dto/AuthDto';
import User from '../model/User.model';
import ApplicationError from '../utils/CustomError';
import encrypt from '../utils/encrypt';
import { jwtSignToken } from '../utils/jwt';

class AuthService {
  async login(auth: AuthLoginDTO) {
    const foundUser = await User.findOne({
      status: true,
      'credentials.email': auth.email
    });
    if (!foundUser) {
      throw new ApplicationError(`No se encontró una cuenta asociada a este correo ${auth.email} `);
    }
    const isValidPassword = await encrypt.compareEncrypt(auth.password, foundUser.credentials.password);
    if (!isValidPassword) {
      throw new ApplicationError('Contraseña incorrecta. Por favor, verifica tu contraseña e intenta nuevamente.');
    }

    return jwtSignToken({ _id: foundUser._id }, { expiresIn: '1h' });
  }
  async register(auth: AuthRegisterDTO) {
    const foundUser = await User.findOne({
      status: true,
      $or: [{ 'credentials.email': auth.correo }, { nro_documento: auth.nro_documento }]
    });
    if (foundUser) {
      throw new ApplicationError('Ya existe una cuenta asociada a este correo o número de documento. Por favor, intenta con otro correo o número de documento.');
    }
    const encryptPassword = await encrypt.encrypt(auth.password);
    const new_user = new User({
      ...auth,
      credentials: {
        email: auth.correo,
        password: encryptPassword
      }
    });
    const user = await new_user.save();
    return jwtSignToken({ _id: user._id }, { expiresIn: '1h' });
  }
}

export default new AuthService();
