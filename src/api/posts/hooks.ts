import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./queryFn";
import { postsKeys } from "./queryKey";

export const usePostsQuery = () => {
  return useQuery(postsKeys.all, getPosts);
};
