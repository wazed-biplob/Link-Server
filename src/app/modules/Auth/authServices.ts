import { User } from "../Users/UserModel";

const login = async (loginData: { email: string; password: string }) => {
  const result = await User.find({ email: loginData.email });
  return result;
};

export const authServices = { login };
