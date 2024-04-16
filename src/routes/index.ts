import { Router } from "express";
import studentRouter from "./student.route";
import authRouter from "./auth.route";

const router = Router();

router.use('/auth', authRouter);
router.use('/student', studentRouter);
export default router;