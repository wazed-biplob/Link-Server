import { IPost } from "./Post.interface";
import { POST } from "./Post.model";

const createPost = async (postData: IPost) => {
  const result = await POST.create(postData);
  return result;
};

export const postServices = {
  createPost,
};
