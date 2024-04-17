import { Router } from 'express';
import { createAsignation, deleteAsignation, getAsignations, updateAsignation } from '../controller/asignation.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getAsignations));
router.post('/', catchAsync(createAsignation));
router.put('/:id', catchAsync(updateAsignation));
router.delete('/:id', catchAsync(deleteAsignation));

export default router;
