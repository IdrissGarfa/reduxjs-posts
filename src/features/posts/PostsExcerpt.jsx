import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="flex flex-col gap-3 w-full bg-gray-100 p-2 text-gray-800 rounded-md" >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="break-words">{post.body.substring(0, 75)}...</p>
            <p className="flex gap-3 flex-wrap">
                <Link className="underline" to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>)
}

export default PostsExcerpt