import { model, Schema } from "mongoose";
import { IPost } from "./Post.interface";
import { User } from "../Users/UserModel";

const postSchema = new Schema<IPost>(
  {
    userId: { type: Schema.Types.ObjectId, ref: User },
    postHeading: { type: String },
    postContent: { type: String },
    postPicture: { type: String, required: false },
  },
  { timestamps: true }
);

export const POST = model<IPost>("Post", postSchema);
