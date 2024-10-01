import { model, Schema } from "mongoose";
import { IPost } from "./Post.interface";
import { User } from "../Users/UserModel";

const postSchema = new Schema<IPost>({
  userId: { type: Schema.Types.ObjectId, ref: User },
  ContentURL: { type: String },
  caption: { type: String },
  CreatedAt: { type: Date },
});

export const POST = model<IPost>("Post", postSchema);
