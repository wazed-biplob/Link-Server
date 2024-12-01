import { IPost } from "./Post.interface";
import { POST } from "./Post.model";

const createPost = async (postData: IPost) => {
  const result = await POST.create(postData);
  return result;
};
const getPost = async (userId: string) => {
  const result = await POST.find({ userId: userId }).sort({ createdAt: -1 });

  return result;
};

export const postServices = {
  createPost,
  getPost,
};
