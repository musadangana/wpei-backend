"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post("/newsletter-subscriptions", async (req, res) => {
    const parsed = validators_1.CreateNewsletterSubscriptionBody.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: parsed.error.message });
        return;
    }
    const [subscription] = await db_1.db
        .insert(db_1.newsletterSubscriptionsTable)
        .values(parsed.data)
        .onConflictDoUpdate({
        target: db_1.newsletterSubscriptionsTable.email,
        set: { email: parsed.data.email },
    })
        .returning();
    res
        .status(201)
        .json(validators_1.CreateNewsletterSubscriptionResponse.parse(subscription));
});
exports.default = router;
//# sourceMappingURL=newsletter.js.map