import { Router } from "express";
import { GetStatsSummaryResponse } from "../validators";

const router = Router();

router.get("/stats/summary", (_req, res) => {
  const data = GetStatsSummaryResponse.parse({
    registeredMembers: 1500,
    wardsCovered: 11,
    pilotProjectWomen: 55,
    commitmentPercent: 100,
  });
  res.json(data);
});

export default router;
