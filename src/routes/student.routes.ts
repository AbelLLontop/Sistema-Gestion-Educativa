import { Router } from 'express';
import { createStudent, deleteStudent, getStudents, updateStudent } from '../controller/student.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getStudents));
router.post('/', catchAsync(createStudent));
router.put('/:id', catchAsync(updateStudent));
router.delete('/:id', catchAsync(deleteStudent));

export default router;
