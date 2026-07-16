"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsletterSubscriptionResponse = exports.CreateNewsletterSubscriptionBody = exports.CreateContactMessageResponse = exports.CreateContactMessageBody = exports.CreateVolunteerApplicationResponse = exports.CreateVolunteerApplicationBody = exports.LookupMembershipResponse = exports.LookupMembershipQueryParams = exports.CreateMembershipApplicationResponse = exports.CreateMembershipApplicationBody = exports.GetStatsSummaryResponse = void 0;
const zod_1 = require("zod");
// ── Stats ──────────────────────────────────────────────────────────────────
exports.GetStatsSummaryResponse = zod_1.z.object({
    registeredMembers: zod_1.z.number(),
    wardsCovered: zod_1.z.number(),
    pilotProjectWomen: zod_1.z.number(),
    commitmentPercent: zod_1.z.number(),
});
// ── Membership ─────────────────────────────────────────────────────────────
exports.CreateMembershipApplicationBody = zod_1.z.object({
    fullName: zod_1.z.string().min(1),
    gender: zod_1.z.string().min(1),
    phone: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    state: zod_1.z.string().min(1),
    lga: zod_1.z.string().min(1),
    ward: zod_1.z.string().min(1),
    occupation: zod_1.z.string().min(1),
});
exports.CreateMembershipApplicationResponse = zod_1.z.object({
    id: zod_1.z.number(),
    membershipNumber: zod_1.z.string(),
    fullName: zod_1.z.string(),
    gender: zod_1.z.string(),
    phone: zod_1.z.string(),
    email: zod_1.z.string(),
    state: zod_1.z.string(),
    lga: zod_1.z.string(),
    ward: zod_1.z.string(),
    occupation: zod_1.z.string(),
    status: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date(),
});
exports.LookupMembershipQueryParams = zod_1.z.object({
    membershipNumber: zod_1.z.string().min(1),
});
exports.LookupMembershipResponse = exports.CreateMembershipApplicationResponse;
// ── Volunteers ─────────────────────────────────────────────────────────────
exports.CreateVolunteerApplicationBody = zod_1.z.object({
    fullName: zod_1.z.string().min(1),
    phone: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    skills: zod_1.z.string().min(1),
    experience: zod_1.z.string().optional(),
    availability: zod_1.z.string().min(1),
});
exports.CreateVolunteerApplicationResponse = zod_1.z.object({
    id: zod_1.z.number(),
    fullName: zod_1.z.string(),
    phone: zod_1.z.string(),
    email: zod_1.z.string(),
    skills: zod_1.z.string(),
    experience: zod_1.z.string().nullish(),
    availability: zod_1.z.string(),
    status: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date(),
});
// ── Contact ────────────────────────────────────────────────────────────────
exports.CreateContactMessageBody = zod_1.z.object({
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().optional(),
    subject: zod_1.z.string().min(1),
    message: zod_1.z.string().min(1),
});
exports.CreateContactMessageResponse = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.string().nullish(),
    subject: zod_1.z.string(),
    message: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date(),
});
// ── Newsletter ─────────────────────────────────────────────────────────────
exports.CreateNewsletterSubscriptionBody = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.CreateNewsletterSubscriptionResponse = zod_1.z.object({
    id: zod_1.z.number(),
    email: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date(),
});
//# sourceMappingURL=index.js.map