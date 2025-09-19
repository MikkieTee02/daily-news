// src/lib/api.ts
import { Article, Category } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${BASE_URL}/articles`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function getArticlesByCategory(slug: string): Promise<Article[]> {
  const res = await fetch(`${BASE_URL}/articles?category=${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch articles by category");
  return res.json();
}


export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

