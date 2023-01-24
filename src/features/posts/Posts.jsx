import { useSelector } from "react-redux"

import { selectAllPosts } from "./postsSlice";

const Posts = () => {
    const posts = useSelector(selectAllPosts);

    const rendredPosts = posts.map(post => (
        <article className="flex flex-col gap-3 w-full bg-gray-100 p-2 text-gray-800 rounded-md cursor-pointer" key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p className="break-words">{post.content.substring(0, 100)}</p>
        </article>
    ))
    return (
        <section className="p-3 py-6 md:p-6">
            <h2 className="text-semibold text-3xl">Posts</h2>
            <div className="my-4 flex flex-col gap-2 lg:w-1/3">
                {rendredPosts}
            </div>
        </section>
    )
}

export default Posts