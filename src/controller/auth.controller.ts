import { AuthLoginDTO, AuthRegisterDTO } from '../model/dto/AuthDto';
import authService from '../services/auth.service';
import { Request, Response } from '../utils/Http';

export async function login(req: Request<AuthLoginDTO>, res: Response) {
  const token = await authService.login(req.body);
  res.json({token});
}
export async function register(req: Request<AuthRegisterDTO>, res: Response) {
  const token = await authService.register(req.body);
  res.json({token});
}
