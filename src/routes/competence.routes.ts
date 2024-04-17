import { Router } from 'express';
import { createCompetence, deleteCompetence, getCompetences, updateCompetence } from '../controller/competence.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getCompetences));
router.post('/', catchAsync(createCompetence));
router.put('/:id', catchAsync(updateCompetence));
router.delete('/:id', catchAsync(deleteCompetence));

export default router;
