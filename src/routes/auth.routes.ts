import { Router } from 'express';
import { login, register } from '../controller/auth.controller';
import { catchAsync } from '../utils/catchAsync';
import { credentialsLoginValidator, credentialsRegisterValidator } from '../validators/auth.validator';
const router = Router();
router.post('/login', catchAsync(login, credentialsLoginValidator));
router.post('/register', catchAsync(register, credentialsRegisterValidator));

export default router;
