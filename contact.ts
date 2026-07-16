import { Router } from "express";
import { db, contactMessagesTable } from "../db";
import {
  CreateContactMessageBody,
  CreateContactMessageResponse,
} from "../validators";

const router = Router();

router.post("/contact-messages", async (req, res): Promise<void> => {
  const parsed = CreateContactMessageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [message] = await db
    .insert(contactMessagesTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(CreateContactMessageResponse.parse(message));
});

export default router;
