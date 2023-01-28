import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";

const SinglePostPage = () => {

    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)));

    if (!post) {
        return (
            <section>
                <h2>Post not found 😪</h2>
            </section>
        )
    }

    return (
        <article className="flex flex-col gap-3 w-full bg-gray-100 p-2 text-gray-800 rounded-md cursor-pointer" >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="break-words">{post.body}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage