import mongoose, { Schema, model, models } from "mongoose";

const articleSchema = new Schema(
  {
    id: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String },
    content: { type: String },
    imageUrl: { type: String },

category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: false }],


    author: {
      name: { type: String, required: true },
      avatarUrl: { type: String },
    },

   date: { type: Date, default: Date.now },
  },
  {
    timestamps: true, 
  }
);


const Article = models.Article || model("Article", articleSchema);

export default Article;
