import { Router } from 'express';
import { createArea, deleteArea, getAreas, updateArea } from '../controller/area.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getAreas));
router.post('/', catchAsync(createArea));
router.put('/:id', catchAsync(updateArea));
router.delete('/:id', catchAsync(deleteArea));

export default router;
