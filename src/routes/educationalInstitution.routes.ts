import { Router } from 'express';
import { createEducationalInstitution, deleteEducationalInstitution, getEducationalInstitutions, updateEducationalInstitution } from '../controller/educationalInstitution.controller';
import { catchAsync } from '../utils/catchAsync';
import { authTokenMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authTokenMiddleware);

router.get('/', catchAsync(getEducationalInstitutions));
router.post('/', catchAsync(createEducationalInstitution));
router.put('/:id', catchAsync(updateEducationalInstitution));
router.delete('/:id', catchAsync(deleteEducationalInstitution));

export default router;
