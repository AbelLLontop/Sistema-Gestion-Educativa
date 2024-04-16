import { Router } from 'express';
import { createStudent, deleteStudent, getStudents, updateStudent } from '../controller/student.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';
import { studentCreateValidator } from '../validators/student.validator';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getStudents));
router.post('/', catchAsync(createStudent, studentCreateValidator));
router.put('/:id', catchAsync(updateStudent));
router.delete('/:id', catchAsync(deleteStudent));

export default router;
