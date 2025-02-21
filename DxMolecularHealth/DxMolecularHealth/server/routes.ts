import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Blog posts
  app.get("/api/blog", async (_req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get("/api/blog/:id", async (req, res) => {
    const post = await storage.getBlogPost(Number(req.params.id));
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.json(post);
  });

  // Test results
  app.get("/api/results/:patientId", async (req, res) => {
    const results = await storage.getTestResults(req.params.patientId);
    res.json(results);
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse({
        ...req.body,
        createdAt: new Date(),
      });
      const message = await storage.createContactMessage(data);
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
