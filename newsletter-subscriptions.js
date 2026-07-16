"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsletterSubscriptionsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.newsletterSubscriptionsTable = (0, pg_core_1.pgTable)("newsletter_subscriptions", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
//# sourceMappingURL=newsletter-subscriptions.js.map