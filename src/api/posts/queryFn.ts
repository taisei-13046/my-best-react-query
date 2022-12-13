import { axiosClient } from "../../lib/axios-client";
import { PostsGetResponse } from "./types";

/**
 * GET /posts
 */
export const fetchPosts = async () => {
  const { data } = await axiosClient.request<PostsGetResponse>({
    url: "/posts",
    method: "GET",
  });
  return data;
};
