import { usePostsQuery } from "../../api/posts";

export const usePostList = () => {
  const { data: postsList, isLoading: isPostsListLoading } = usePostsQuery();

  return { postsList, isPostsListLoading };
};
