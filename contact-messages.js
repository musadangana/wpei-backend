"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post("/contact-messages", async (req, res) => {
    const parsed = validators_1.CreateContactMessageBody.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: parsed.error.message });
        return;
    }
    const [message] = await db_1.db
        .insert(db_1.contactMessagesTable)
        .values(parsed.data)
        .returning();
    res.status(201).json(validators_1.CreateContactMessageResponse.parse(message));
});
exports.default = router;
//# sourceMappingURL=contact.js.map