import { Router } from "express";
import { eq } from "drizzle-orm";
import { db, membershipApplicationsTable } from "../db";
import {
  CreateMembershipApplicationBody,
  CreateMembershipApplicationResponse,
  LookupMembershipQueryParams,
  LookupMembershipResponse,
} from "../validators";

const router = Router();

function generateMembershipNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `WPEI-${year}-${random}`;
}

router.post("/members", async (req, res): Promise<void> => {
  const parsed = CreateMembershipApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const membershipNumber = generateMembershipNumber();

  const [application] = await db
    .insert(membershipApplicationsTable)
    .values({ ...parsed.data, membershipNumber })
    .returning();

  res.status(201).json(CreateMembershipApplicationResponse.parse(application));
});

router.get("/members/lookup", async (req, res): Promise<void> => {
  const query = LookupMembershipQueryParams.safeParse(req.query);
  if (!query.success) {
    res.status(400).json({ error: query.error.message });
    return;
  }

  const [application] = await db
    .select()
    .from(membershipApplicationsTable)
    .where(
      eq(
        membershipApplicationsTable.membershipNumber,
        query.data.membershipNumber,
      ),
    );

  if (!application) {
    res.status(404).json({ error: "Membership application not found" });
    return;
  }

  res.json(LookupMembershipResponse.parse(application));
});

export default router;
