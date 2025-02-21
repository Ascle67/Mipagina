import { pgTable, text, serial, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  publishedAt: timestamp("published_at").notNull(),
});

export const testResults = pgTable("test_results", {
  id: serial("id").primaryKey(),
  patientId: text("patient_id").notNull(),
  testType: text("test_type").notNull(),
  resultDate: date("result_date").notNull(),
  status: text("status").notNull(),
  pdfUrl: text("pdf_url").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true });
export const insertTestResultSchema = createInsertSchema(testResults).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true });

export type BlogPost = typeof blogPosts.$inferSelect;
export type TestResult = typeof testResults.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertTestResult = z.infer<typeof insertTestResultSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
