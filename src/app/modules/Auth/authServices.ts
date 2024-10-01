import { User } from "../Users/UserModel";
import { ILogin } from "./authInterface";

const login = async (loginData: ILogin) => {
  const user = await User.userExistsByEmail(loginData.email);
  if (!user) {
    throw new Error("No User Found!");
  }
  const passwordMatch = await User.passwordMatch(
    loginData.password,
    user?.password
  );
  if (!passwordMatch) {
    throw new Error("Password Incorrect!");
  }

  return user;
};

export const authServices = { login };
