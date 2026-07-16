import { Router } from "express";
import healthRouter from "./health";
import statsRouter from "./stats";
import membershipRouter from "./membership";
import volunteersRouter from "./volunteers";
import contactRouter from "./contact";
import newsletterRouter from "./newsletter";

const router = Router();

router.use(healthRouter);
router.use(statsRouter);
router.use(membershipRouter);
router.use(volunteersRouter);
router.use(contactRouter);
router.use(newsletterRouter);

export default router;
