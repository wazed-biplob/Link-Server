import { Types } from "mongoose";

export interface IPost {
  userId: Types.ObjectId;
  ContentURL: string;
  caption: string;
  CreatedAt: Date;
}
