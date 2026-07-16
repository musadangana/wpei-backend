"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.get("/stats/summary", (_req, res) => {
    const data = validators_1.GetStatsSummaryResponse.parse({
        registeredMembers: 1500,
        wardsCovered: 11,
        pilotProjectWomen: 55,
        commitmentPercent: 100,
    });
    res.json(data);
});
exports.default = router;
//# sourceMappingURL=stats.js.map