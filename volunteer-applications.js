"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volunteerApplicationsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.volunteerApplicationsTable = (0, pg_core_1.pgTable)("volunteer_applications", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    fullName: (0, pg_core_1.text)("full_name").notNull(),
    phone: (0, pg_core_1.text)("phone").notNull(),
    email: (0, pg_core_1.text)("email").notNull(),
    skills: (0, pg_core_1.text)("skills").notNull(),
    experience: (0, pg_core_1.text)("experience"),
    availability: (0, pg_core_1.text)("availability").notNull(),
    status: (0, pg_core_1.text)("status").notNull().default("pending"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
//# sourceMappingURL=volunteer-applications.js.map