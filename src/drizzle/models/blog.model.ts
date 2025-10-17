
import { pgTable, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import tagBlogs from "./tag-blog.model";

// Blog Table
const blogs = pgTable("blogs", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  slug: varchar("slug").notNull().unique(),
  title: varchar("title").notNull(),
  content: varchar("content").notNull(),
  image: varchar("image").notNull(),
  description: varchar("description").notNull(),
  views: integer("views").default(0),
  upvotes: integer("upvotes").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});


export const blogsRelations = relations(blogs, ({ many }) => ({
  tagBlogs: many(tagBlogs),
}));


export type Blog = typeof blogs.$inferSelect;
export type NewBlog = typeof blogs.$inferInsert;

export default blogs;