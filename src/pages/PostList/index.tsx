import { usePostList } from "./usePostList";

/**
 * 投稿の一覧を表示させるページ
 */
export const PostListPage = () => {
  const { postsList, isPostsListLoading } = usePostList();

  if (isPostsListLoading) {
    return <></>;
  }

  return (
    <div>
      {postsList?.map(({ title, body }) => (
        <div>
          <p>title: {title}</p>
          <p>body: {body}</p>
        </div>
      ))}
    </div>
  );
};
