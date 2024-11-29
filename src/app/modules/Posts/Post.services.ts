import { IPost } from "./Post.interface";
import { POST } from "./Post.model";

const createPost = async (postData: IPost) => {
  const result = await POST.create(postData);
  return result;
};
const getPost = async () => {
  const result = await POST.find().sort({ createdAt: -1 });
  return result;
};

export const postServices = {
  createPost,
  getPost,
};
