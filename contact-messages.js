"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactMessagesTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.contactMessagesTable = (0, pg_core_1.pgTable)("contact_messages", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").notNull(),
    phone: (0, pg_core_1.text)("phone"),
    subject: (0, pg_core_1.text)("subject").notNull(),
    message: (0, pg_core_1.text)("message").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
//# sourceMappingURL=contact-messages.js.map