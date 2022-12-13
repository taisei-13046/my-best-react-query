import { PostsGetResponse, usePostsQuery } from "../../api/posts";

interface PostList {
  id: number;
  title: string;
  body: string;
}

const postListTranslator = (data: PostsGetResponse) =>
  data.map(({ id, title, body }) => ({
    id,
    title: title.toUpperCase(),
    body,
  }));

export const usePostList = () => {
  const { data: postsList, isLoading: isPostsListLoading } = usePostsQuery<
    PostList[]
  >({
    select: postListTranslator,
  });

  return { postsList, isPostsListLoading };
};
