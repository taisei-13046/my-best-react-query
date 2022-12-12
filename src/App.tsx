import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostListPage } from "./pages/PostList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostListPage />
    </QueryClientProvider>
  );
}

export default App;
