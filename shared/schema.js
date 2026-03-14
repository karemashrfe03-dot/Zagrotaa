import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users", {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});

export const makeupArtists = pgTable("makeup_artists", {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
    userId: varchar("user_id").references(() => users.id).notNull(),
    packagePrice: integer("package_price").notNull(),
    brandsUsed: text("brands_used").notNull(),
    hijabFriendly: boolean("hijab_friendly").notNull().default(false),
    yearsOfExperience: integer("years_of_experience").notNull(),
    instagramPortfolio: text("instagram_portfolio"),
});

export const insertMakeupArtistSchema = createInsertSchema(makeupArtists).omit({
    id: true,
});
