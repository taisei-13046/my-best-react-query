import { axiosClient } from "../../lib/axios-client";
import { PostsResponse } from "./types";

/**
 * GET /posts
 */
export const getPosts = async () => {
  const { data } = await axiosClient.request<PostsResponse>({
    url: "/posts",
    method: "GET",
  });
  return data;
};
