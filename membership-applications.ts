import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const membershipApplicationsTable = pgTable("membership_applications", {
  id: serial("id").primaryKey(),
  membershipNumber: text("membership_number").notNull().unique(),
  fullName: text("full_name").notNull(),
  gender: text("gender").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  state: text("state").notNull(),
  lga: text("lga").notNull(),
  ward: text("ward").notNull(),
  occupation: text("occupation").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type MembershipApplicationRow =
  typeof membershipApplicationsTable.$inferSelect;
