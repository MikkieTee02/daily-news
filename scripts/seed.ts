import mongoose from "mongoose";
import dotenv from "dotenv";
import { articles, categories } from "../src/lib/data.ts";
import Article from "../src/models/Article";
import Category from "../src/models/Category";

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB Atlas");

    // Clear existing data
    await Category.deleteMany({});
    await Article.deleteMany({});

    // Insert categories
    const insertedCategories = await Category.insertMany(categories);

    // Create a name -> ObjectId map
    const categoryMap = insertedCategories.reduce((map, category) => {
      map[category.name as string] = category._id;
      return map;
    }, {} as Record<string, mongoose.Types.ObjectId>);

    // Map articles' category strings to ObjectId references
      const articlesWithRefs = articles.map((article) => {
      let categoryIds: mongoose.Types.ObjectId[] = [];

      if (Array.isArray(article.category)) {
        categoryIds = article.category
          .map((slug) => categoryMap[slug as string])
          .filter(Boolean);
      } else if (typeof article.category === "string") {
        const id = categoryMap[article.category as string];
        if (id) categoryIds = [id];
      }

      return {
        ...article,
        category: categoryIds, 
      };
    });

    // Insert articles
    await Article.insertMany(articlesWithRefs);

    console.log("Data seeded successfully with relationships!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();

