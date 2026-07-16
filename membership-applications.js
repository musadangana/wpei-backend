"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membershipApplicationsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.membershipApplicationsTable = (0, pg_core_1.pgTable)("membership_applications", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    membershipNumber: (0, pg_core_1.text)("membership_number").notNull().unique(),
    fullName: (0, pg_core_1.text)("full_name").notNull(),
    gender: (0, pg_core_1.text)("gender").notNull(),
    phone: (0, pg_core_1.text)("phone").notNull(),
    email: (0, pg_core_1.text)("email").notNull(),
    state: (0, pg_core_1.text)("state").notNull(),
    lga: (0, pg_core_1.text)("lga").notNull(),
    ward: (0, pg_core_1.text)("ward").notNull(),
    occupation: (0, pg_core_1.text)("occupation").notNull(),
    status: (0, pg_core_1.text)("status").notNull().default("pending"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
//# sourceMappingURL=membership-applications.js.map