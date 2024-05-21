import { Router } from 'express';
import { createArea, getAreas } from '../controller/area.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';
import { areaCreateValidator } from '../validators/area.validator';

const router = Router();
router.use(authTokenMiddleware);
router.get('/', catchAsync(getAreas));
router.post('/', catchAsync(createArea, areaCreateValidator));

export default router;
