import { Router } from 'express';
import { createQualification, deleteQualification, getQualifications, updateQualification } from '../controller/qualification.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getQualifications));
router.post('/', catchAsync(createQualification));
router.put('/:id', catchAsync(updateQualification));
router.delete('/:id', catchAsync(deleteQualification));

export default router;
