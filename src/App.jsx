import PostsList from "./features/posts/Posts";
import AddPostForm from "./features/posts/AddPostForm";

function App() {

  return (
    <div className="w-full min-h-screen h-full bg-gray-800 text-white">
      <AddPostForm />
      <PostsList />
    </div>
  )
}

export default App
