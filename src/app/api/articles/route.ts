import { connectMongoDB } from "@/src/lib/mongodb";
import Article from "@/src/models/Article";
import Category from "@/src/models/Category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectMongoDB();
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get('category');

    let query = {};
    if (categorySlug) {
      const category = await Category.findOne({ slug: categorySlug });
      if (category) {
        query = { category: { $in: [category._id] } };
      } else {
        return NextResponse.json({ message: "Category not found" }, { status: 404 });
      }
    }

    const articles = await Article.find(query).populate("category");
    return NextResponse.json(articles);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch articles" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectMongoDB();
  try {
    const { slug, title, content, imageUrl, categoryIds, author } = await req.json();

    if (!slug || !title || !content || !categoryIds?.length || !author?.name) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const validCategories = await Category.find({ _id: { $in: categoryIds } });
    if (!validCategories.length) return NextResponse.json({ message: "Invalid category IDs" }, { status: 400 });

    const newArticle = new Article({
      slug,
      title,
      content,
      imageUrl,
      category: validCategories.map(c => c._id),
      author,
    });

    await newArticle.save();
    await newArticle.populate("category");

    return NextResponse.json(newArticle, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to create article" }, { status: 500 });
  }
}
