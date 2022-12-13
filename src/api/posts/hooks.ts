import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchPosts } from "./queryFn";
import { postsKeys } from "./queryKey";
import { PostsGetResponse } from "./types";

export const usePostsQuery = <TData = PostsGetResponse>(
  options?: Omit<
    UseQueryOptions<PostsGetResponse, AxiosError, TData, typeof postsKeys.all>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery(postsKeys.all, fetchPosts, { ...options });
};
