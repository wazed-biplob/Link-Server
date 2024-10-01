import { model, Schema } from "mongoose";
import { IUser, UserModel } from "./UserInterface";

const userSchema = new Schema<IUser, UserModel>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
);

userSchema.statics.userExistsByEmail = async function (email: string) {
  return await User.findOne({ email: email });
};

export const User = model<IUser, UserModel>("User", userSchema);
