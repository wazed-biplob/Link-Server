import { model, Schema } from "mongoose";
import { IUser } from "./UserInterface";

const UserSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  bio: { type: String },
});

export const User = model<IUser>("User", UserSchema);
