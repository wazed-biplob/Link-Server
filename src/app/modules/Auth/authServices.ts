import { User } from "../Users/UserModel";

const login = async (loginData: { email: string; password: string }) => {
  const user = await User.userExistsByEmail(loginData.email);
  if (!user) {
    throw new Error("No User Found!");
  }
  return user;
};

export const authServices = { login };
