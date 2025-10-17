
import { pgTable, varchar, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import blogs from "./blog.model";
import tags from "./tag.model";

const tagBlogs = pgTable("tagBlogs", {
  tagId: varchar("tag_id").notNull().references(() => tags.id, { onDelete: "cascade" }),
  blogId: varchar("blog_id").notNull().references(() => blogs.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.tagId, table.blogId] }),
}));

export const tagBlogsRelations = relations(tagBlogs, ({ one }) => ({
  blog: one(blogs, {
    fields: [tagBlogs.blogId],
    references: [blogs.id],
  }),
  tag: one(tags, {
    fields: [tagBlogs.tagId],
    references: [tags.id],
  }),
}));

export type TagBlog = typeof tagBlogs.$inferSelect;
export type NewTagBlog = typeof tagBlogs.$inferInsert;

export default tagBlogs;