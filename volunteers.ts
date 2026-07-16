import { Router } from "express";
import { db, volunteerApplicationsTable } from "../db";
import {
  CreateVolunteerApplicationBody,
  CreateVolunteerApplicationResponse,
} from "../validators";

const router = Router();

router.post("/volunteers", async (req, res): Promise<void> => {
  const parsed = CreateVolunteerApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [application] = await db
    .insert(volunteerApplicationsTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(CreateVolunteerApplicationResponse.parse(application));
});

export default router;
