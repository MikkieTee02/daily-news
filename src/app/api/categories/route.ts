import { connectMongoDB } from "@/src/lib/mongodb";
import Category from "@/src/models/Category";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectMongoDB();
  try {
    const { name, slug } = await req.json();
    if (!name || !slug) return NextResponse.json({ message: "Name and slug required" }, { status: 400 });

    const newCategory = new Category({ name, slug });
    await newCategory.save();
    return NextResponse.json(newCategory, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to create category" }, { status: 500 });
  }
}
