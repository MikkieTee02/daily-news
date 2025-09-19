import { NextResponse } from "next/server";
import post from "@/src/models/post";
import { connectMongoDB } from "@/src/lib/mongodb";

export const GET = async (request:Request) => {
    try {
        await connectMongoDB();
        const posts = await post.find({})
        return new NextResponse(JSON.stringify(posts), {status:200})
    } catch (error) {
        return new NextResponse("Could not connect", {status:500})
    }
}

export const POST = async (request: Request) => {
    try {
        const { title, description, imageUrl } = await request.json();
        await connectMongoDB();
        await post.create({ title, description, imageUrl });
        return new NextResponse("Post created successfully", { status: 201 });
    } catch (error) {
        return new NextResponse("Error creating post", { status: 500 });
    }
};

export const DELETE = async (request: Request) => {
    try {
        const { id } = await request.json();
        await connectMongoDB();
        await post.findByIdAndDelete(id);
        return new NextResponse("Post deleted successfully", { status: 200 });
    } catch (error) {
        return new NextResponse("Error deleting post", { status: 500 });
    }
};
