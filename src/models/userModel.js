import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: {
        values: ["user", "admin", "superAdmin"],
        message: "{VALUES} is not supported",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
