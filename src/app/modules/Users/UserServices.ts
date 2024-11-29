import config from "../../config";
import { IUser } from "./UserInterface";
import { User } from "./UserModel";
import bcrypt from "bcrypt";

const getAllUser = async () => {
  const result = await User.find().select("-password");
  return result;
};

const createUser = async (userData: IUser) => {
  const plainPassword = userData.password;
  const hashedpassword = await bcrypt.hash(
    plainPassword,
    Number(config.salt_rounds)
  );

  userData.password = hashedpassword;
  const user = await User.userExistsByEmail(userData.email);
  if (user) {
    throw new Error("This email has already been registered.");
  }
  const result = await User.create(userData);

  return result;
};

const postProfilePicture = async (userData: IUser) => {
  const user = await User.userExistsByEmail(userData.email);
  if (!user) {
    throw new Error("User Doesn't exist!");
  }
  const result = await User.updateOne(
    { email: user.email },
    { $set: { imgURL: userData.imgURL } },
    { upsert: true }
  );
  return result;
};

export const userServices = {
  getAllUser,
  createUser,
  postProfilePicture,
};
