"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post("/volunteers", async (req, res) => {
    const parsed = validators_1.CreateVolunteerApplicationBody.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: parsed.error.message });
        return;
    }
    const [application] = await db_1.db
        .insert(db_1.volunteerApplicationsTable)
        .values(parsed.data)
        .returning();
    res.status(201).json(validators_1.CreateVolunteerApplicationResponse.parse(application));
});
exports.default = router;
//# sourceMappingURL=volunteers.js.map