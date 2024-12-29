import { IPost } from "./Post.interface";
import { POST } from "./Post.model";

const createPost = async (postData: IPost) => {
  const result = await POST.create(postData);
  return result;
};

const updatePost = async (postId: string, postData: IPost) => {
  const result = await POST.findOneAndUpdate(
    { _id: postId },
    { $set: postData },
    { new: true }
  );
  return result;
};

const getPost = async (postId: string) => {
  const result = await POST.findOne({ _id: postId });
  return result;
};
const getPosts = async (userId: string) => {
  const result = await POST.find({ userId: userId }).sort({ createdAt: -1 });
  return result;
};

const getAllPost = async () => {
  const result = await POST.find().sort({ createdAt: -1 });
  return result;
};

const deletePost = async (postId: string) => {
  const result = await POST.deleteOne({ _id: postId });
  return result;
};

export const postServices = {
  createPost,
  getPosts,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
};
