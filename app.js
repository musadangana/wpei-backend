"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// CORS — allow your frontend origin, or * for open access
const corsOrigin = process.env.CORS_ORIGIN ?? "*";
app.use((0, cors_1.default)({ origin: corsOrigin }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// All API routes are prefixed with /api
app.use("/api", routes_1.default);
// Global error handler
app.use((err, _req, res, _next) => {
    console.error("[WPEI API Error]", err.message);
    res.status(500).json({ error: "Internal server error" });
});
exports.default = app;
//# sourceMappingURL=app.js.map