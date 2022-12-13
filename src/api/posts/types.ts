interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsGetResponse = Posts[];
