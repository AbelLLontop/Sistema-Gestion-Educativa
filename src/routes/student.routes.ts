import { Router } from 'express';
import { getStudents, createStudent } from '../controller/student.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';
import { studentCreateValidator } from '../validators/student.validator';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getStudents));
router.post('/', catchAsync(createStudent,studentCreateValidator));

export default router;
