import { model, Schema } from "mongoose";
import { IPost } from "./Post.interface";

const postSchema = new Schema<IPost>({
  userId: { type: String },
  ContentURL: { type: String },
  caption: { type: String },
  CreatedAt: { type: Date },
});

export const POST = model<IPost>("Post", postSchema);
