import { connectMongoDB } from "@/src/lib/mongodb";
import Category from "@/src/models/Category";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongoDB();
  try {
    const category = await Category.findById(params.id);
    if (!category) return NextResponse.json({ message: "Category not found" }, { status: 404 });
    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch category" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongoDB();
  try {
    const updateData = await req.json();
    const updatedCategory = await Category.findByIdAndUpdate(params.id, updateData, { new: true });
    if (!updatedCategory) return NextResponse.json({ message: "Category not found" }, { status: 404 });
    return NextResponse.json(updatedCategory);
  } catch (err) {
    return NextResponse.json({ message: "Failed to update category" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectMongoDB();
  try {
    const deletedCategory = await Category.findByIdAndDelete(params.id);
    if (!deletedCategory) return NextResponse.json({ message: "Category not found" }, { status: 404 });
    return NextResponse.json({ message: "Category deleted" });
  } catch (err) {
    return NextResponse.json({ message: "Failed to delete category" }, { status: 500 });
  }
}
