import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const volunteerApplicationsTable = pgTable("volunteer_applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  skills: text("skills").notNull(),
  experience: text("experience"),
  availability: text("availability").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type VolunteerApplicationRow =
  typeof volunteerApplicationsTable.$inferSelect;
