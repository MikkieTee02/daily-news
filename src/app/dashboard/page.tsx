'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { DashboardArticleCard } from "@/src/components/DashboardArticleCard";

interface Post {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const DashboardPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editingPost, setEditingPost] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/post");
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingPost) {
      await fetch(`/api/post/${editingPost}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, imageUrl }),
      });
      setEditingPost(null);
    } else {
      await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, imageUrl }),
      });
    }
    setTitle("");
    setDescription("");
    setImageUrl("");
    fetchPosts();
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post._id);
    setTitle(post.title);
    setDescription(post.description);
    setImageUrl(post.imageUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });
    fetchPosts();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingPost ? "Edit Post" : "Create Post"}</CardTitle>
          <CardDescription>
            {editingPost
              ? "Update the details of your post."
              : "Fill out the form to create a new post."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Post description"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="imageUrl">Image URL</label>
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <Button type="submit">
              {editingPost ? "Update Post" : "Create Post"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Existing Posts</h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: Post) => (
              <DashboardArticleCard 
                key={post._id} 
                article={{
                  ...post,
                  slug: post.title.toLowerCase().replace(/\s+/g, '-'), // Create a slug from the title
                  category: 'News', // Assign a default category
                  date: new Date().toLocaleDateString(), // Use current date as a placeholder
                }}
                onEdit={() => handleEdit(post)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No posts found. Create one to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
