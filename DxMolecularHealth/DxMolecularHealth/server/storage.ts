import { type BlogPost, type TestResult, type ContactMessage, type InsertBlogPost, type InsertTestResult, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  // Blog posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Test results
  getTestResults(patientId: string): Promise<TestResult[]>;
  createTestResult(result: InsertTestResult): Promise<TestResult>;
  
  // Contact messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private blogPosts: Map<number, BlogPost>;
  private testResults: Map<number, TestResult>;
  private contactMessages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.blogPosts = new Map();
    this.testResults = new Map();
    this.contactMessages = new Map();
    this.currentId = 1;

    // Add some sample blog posts
    this.createBlogPost({
      title: "Advances in Molecular Diagnostics",
      content: "Recent advances in molecular diagnostics have revolutionized...",
      summary: "Learn about the latest developments in molecular testing",
      publishedAt: new Date(),
    });
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentId++;
    const blogPost: BlogPost = { ...post, id };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getTestResults(patientId: string): Promise<TestResult[]> {
    return Array.from(this.testResults.values()).filter(
      (result) => result.patientId === patientId
    );
  }

  async createTestResult(result: InsertTestResult): Promise<TestResult> {
    const id = this.currentId++;
    const testResult: TestResult = { ...result, id };
    this.testResults.set(id, testResult);
    return testResult;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const contactMessage: ContactMessage = { ...message, id };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
