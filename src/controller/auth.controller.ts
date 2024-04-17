import { RequestBody, ResponseEntity } from '../utils/Http';
import { ICredentialsLogin, ICredentialsRegister } from '../interfaces/IAuth.interface';
import authService from '../services/auth.service';

export async function login(req: RequestBody<ICredentialsLogin>, res: ResponseEntity) {
  const token = await authService.login(req.body);
  res.json(token);
}
export async function register(req: RequestBody<ICredentialsRegister>, res: ResponseEntity) {
  const token = await authService.register(req.body);
  res.json(token);
}

