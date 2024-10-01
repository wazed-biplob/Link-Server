import bcrypt from "bcrypt";
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

userSchema.statics.passwordMatch = async function (
  plainPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const User = model<IUser, UserModel>("User", userSchema);
