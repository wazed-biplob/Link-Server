import { Types } from "mongoose";

export interface IPost {
  userId: Types.ObjectId;
  postHeading: string;
  postContent: string;
  postPicture?: string;
  cratedAt: Date;
  updatedAt: Date;
}
