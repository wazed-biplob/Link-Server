import { IUser } from "./UserInterface";
import { User } from "./UserModel";

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const createUser = async (userData: IUser) => {
  const result = await User.create(userData);
  return result;
};

export const userServices = {
  getAllUser,
  createUser,
};
