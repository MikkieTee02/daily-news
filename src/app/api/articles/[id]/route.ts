
import { connectMongoDB } from "@/src/lib/mongodb";
import Article from "@/src/models/Article";
import Category from "@/src/models/Category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongoDB();
  try {
    const article = await Article.findById(params.id).populate("category");
    if (!article) return NextResponse.json({ message: "Article not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch article" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongoDB();
  try {
    const updateData = await req.json();

    if (updateData.categoryIds) {
      const validCategories = await Category.find({ _id: { $in: updateData.categoryIds } });
      updateData.category = validCategories.map(c => c._id);
      delete updateData.categoryIds;
    }

    const updatedArticle = await Article.findByIdAndUpdate(params.id, updateData, { new: true }).populate("category");
    if (!updatedArticle) return NextResponse.json({ message: "Article not found" }, { status: 404 });
    return NextResponse.json(updatedArticle);
  } catch (err) {
    return NextResponse.json({ message: "Failed to update article" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongoDB();
  try {
    const deletedArticle = await Article.findByIdAndDelete(params.id);
    if (!deletedArticle) return NextResponse.json({ message: "Article not found" }, { status: 404 });
    return NextResponse.json({ message: "Article deleted" });
  } catch (err) {
    return NextResponse.json({ message: "Failed to delete article" }, { status: 500 });
  }
}
