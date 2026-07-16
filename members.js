"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../db");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
function generateMembershipNumber() {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `WPEI-${year}-${random}`;
}
router.post("/members", async (req, res) => {
    const parsed = validators_1.CreateMembershipApplicationBody.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: parsed.error.message });
        return;
    }
    const membershipNumber = generateMembershipNumber();
    const [application] = await db_1.db
        .insert(db_1.membershipApplicationsTable)
        .values({ ...parsed.data, membershipNumber })
        .returning();
    res.status(201).json(validators_1.CreateMembershipApplicationResponse.parse(application));
});
router.get("/members/lookup", async (req, res) => {
    const query = validators_1.LookupMembershipQueryParams.safeParse(req.query);
    if (!query.success) {
        res.status(400).json({ error: query.error.message });
        return;
    }
    const [application] = await db_1.db
        .select()
        .from(db_1.membershipApplicationsTable)
        .where((0, drizzle_orm_1.eq)(db_1.membershipApplicationsTable.membershipNumber, query.data.membershipNumber));
    if (!application) {
        res.status(404).json({ error: "Membership application not found" });
        return;
    }
    res.json(validators_1.LookupMembershipResponse.parse(application));
});
exports.default = router;
//# sourceMappingURL=membership.js.map