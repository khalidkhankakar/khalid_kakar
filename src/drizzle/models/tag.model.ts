
import { pgTable, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import tagBlogs from "./tag-blog.model";

const tags = pgTable("tags", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name").notNull().unique(),
  blogs: integer("blogs").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tagsRelations = relations(tags, ({ many }) => ({
  tagBlogs: many(tagBlogs),
}));



export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;

export default tags;
