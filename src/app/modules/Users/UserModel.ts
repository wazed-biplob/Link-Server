import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { IUser, UserModel } from "./UserInterface";
import { optional, string } from "zod";

const userSchema = new Schema<IUser, UserModel>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgURL: { type: String, required: optional },
  },

  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
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
