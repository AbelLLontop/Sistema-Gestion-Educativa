import { Router } from "express";
import studentRouter from "./student.routes";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import areaRouter from "./area.routes";
import asignationRouter from "./asignation.routes";
import competenceRouter from "./competence.routes";
import educationalInstitutionRouter from "./educationalInstitution.routes";
import qualificationRouter from "./qualification.routes";

const router = Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/student', studentRouter);
router.use('/area', areaRouter);
router.use('/asignation', asignationRouter);
router.use('/competence', competenceRouter);
router.use('/educationalInstitution', educationalInstitutionRouter);
router.use('/qualification', qualificationRouter);
export default router;