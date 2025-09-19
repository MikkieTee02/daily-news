import { NextResponse } from "next/server";
import post from "@/src/models/post";
import { connectMongoDB } from "@/src/lib/mongodb";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    try {
        await connectMongoDB();
        const postDoc = await post.findById(params.id);
        return new NextResponse(JSON.stringify(postDoc), { status: 200 });
    } catch (error) {
        return new NextResponse("Error fetching post", { status: 500 });
    }
};

export const PUT = async (request: Request, { params }: { params: { id: string } }) => {
    try {
        const { title, description, imageUrl } = await request.json();
        await connectMongoDB();
        await post.findByIdAndUpdate(params.id, { title, description, imageUrl });
        return new NextResponse("Post updated successfully", { status: 200 });
    } catch (error) {
        return new NextResponse("Error updating post", { status: 500 });
    }
};

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    try {
        await connectMongoDB();
        await post.findByIdAndDelete(params.id);
        return new NextResponse("Post deleted successfully", { status: 200 });
    } catch (error) {
        return new NextResponse("Error deleting post", { status: 500 });
    }
};
