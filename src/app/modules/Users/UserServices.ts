import config from "../../config";
import { IUser } from "./UserInterface";
import { User } from "./UserModel";
import bcrypt from "bcrypt";

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const createUser = async (userData: IUser) => {
  const plainPassword = userData.password;
  const hashedpassword = await bcrypt.hash(
    plainPassword,
    Number(config.salt_rounds)
  );
  userData.password = hashedpassword;
  const result = await User.create(userData);
  return result;
};

export const userServices = {
  getAllUser,
  createUser,
};
