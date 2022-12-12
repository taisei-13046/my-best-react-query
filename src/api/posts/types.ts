interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsResponse = Posts[];
