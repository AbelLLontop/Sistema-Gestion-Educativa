import { Router } from 'express';
import { createPeriodo, deletePeriodo, getPeriodos, updatePeriodo } from '../controller/periodo.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getPeriodos));
router.post('/', catchAsync(createPeriodo));
router.put('/:id', catchAsync(updatePeriodo));
router.delete('/:id', catchAsync(deletePeriodo));

export default router;
