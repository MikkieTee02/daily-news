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