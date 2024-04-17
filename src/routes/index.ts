import { Router } from "express";
import studentRouter from "./student.routes";
import authRouter from "./auth.routes";
import areaRouter from "./area.routes";
import asignationRouter from "./asignation.routes";
import competenceRouter from "./competence.routes";
import educationalInstitutionRouter from "./educationalInstitution.routes";
import periodoRouter from "./periodo.routes";
import qualificationRouter from "./qualification.routes";

const router = Router();

router.use('/auth', authRouter);
router.use('/student', studentRouter);
router.use('/area', areaRouter);
router.use('/asignation', asignationRouter);
router.use('/competence', competenceRouter);
router.use('/educationalInstitution', educationalInstitutionRouter);
router.use('/periodo', periodoRouter);
router.use('/qualification', qualificationRouter);
export default router;