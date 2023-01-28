import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {

    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)));

    if (!post) {
        return (
            <section>
                <h2>Post not found 😪</h2>
            </section>
        )
    };

    return (
        <div className="bg-slate-50 w-full h-[calc(100vh-64px)] p-6">
            <article className="bg-white max-w-full p-3 min-h-[200px] flex flex-col justify-between gap-3  rounded-lg lg:w-1/2 lg:mx-auto">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="break-words">{post.body}</p>
                <div>
                    <p className="my-2 flex gap-3">
                        <Link className="underline" to={`/post/edit/${post.id}`}>Edit post</Link>
                        <PostAuthor userId={post.userId} />
                        <TimeAgo timestamp={post.date} />
                    </p>
                    <ReactionButtons post={post} />
                </div>
            </article>
        </div>
    )
}

export default SinglePostPage   