"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_1 = __importDefault(require("./health"));
const stats_1 = __importDefault(require("./stats"));
const membership_1 = __importDefault(require("./membership"));
const volunteers_1 = __importDefault(require("./volunteers"));
const contact_1 = __importDefault(require("./contact"));
const newsletter_1 = __importDefault(require("./newsletter"));
const router = (0, express_1.Router)();
router.use(health_1.default);
router.use(stats_1.default);
router.use(membership_1.default);
router.use(volunteers_1.default);
router.use(contact_1.default);
router.use(newsletter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map