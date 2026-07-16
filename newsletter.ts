import { Router } from "express";
import { db, newsletterSubscriptionsTable } from "../db";
import {
  CreateNewsletterSubscriptionBody,
  CreateNewsletterSubscriptionResponse,
} from "../validators";

const router = Router();

router.post("/newsletter-subscriptions", async (req, res): Promise<void> => {
  const parsed = CreateNewsletterSubscriptionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [subscription] = await db
    .insert(newsletterSubscriptionsTable)
    .values(parsed.data)
    .onConflictDoUpdate({
      target: newsletterSubscriptionsTable.email,
      set: { email: parsed.data.email },
    })
    .returning();

  res
    .status(201)
    .json(CreateNewsletterSubscriptionResponse.parse(subscription));
});

export default router;
