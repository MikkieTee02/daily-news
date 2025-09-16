// seed.ts
import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";
import { articles, categories } from "../src/lib/data.ts"; 
import type { Article, Category } from "../src/types"; // adjust path

dotenv.config();

// Category schema
const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
});

// Article schema
const articleSchema = new Schema<Article>({
  id: { type: String, required: true },
  slug: { type: String, required: true },
  title: String,
  excerpt: String,
  content: String,
  imageUrl: String,
  category: Schema.Types.Mixed, // can be string | string[]
  author: {
    name: String,
    avatarUrl: String,
  },
  date: String,
});

// Models
const CategoryModel = mongoose.model<Category>("Category", categorySchema);
const ArticleModel = mongoose.model<Article>("Article", articleSchema);

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    console.log("Connected to MongoDB Atlas");

    // clear existing
    await CategoryModel.deleteMany({} as any);
    await ArticleModel.deleteMany({});

    // insert fresh data
    await CategoryModel.insertMany(categories);
    await ArticleModel.insertMany(articles);

    console.log("Data seeded successfully!");
  } catch (err) {
    console.error(" Error seeding database:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
