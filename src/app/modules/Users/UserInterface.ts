import { Model } from "mongoose";

export interface IUser {
  userName: string;
  email: string;
  password: string;
  profilePicture: string;
  bio: string;
}

export interface UserModel extends Model<IUser> {
  userExistsByEmail(email: string): Promise<IUser>;
  passwordMatch(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
