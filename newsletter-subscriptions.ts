import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const newsletterSubscriptionsTable = pgTable(
  "newsletter_subscriptions",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
);

export type NewsletterSubscriptionRow =
  typeof newsletterSubscriptionsTable.$inferSelect;
