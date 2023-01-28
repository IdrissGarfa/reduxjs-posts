import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="flex justify-between flex-col gap-3 w-[400px] min-h-[200px] bg-gray-100 p-2 text-gray-800 rounded-md" >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="break-words">{post.body.substring(0, 75)}...</p>
            <div>
                <p className="flex gap-3 flex-wrap my-2">
                    <Link className="underline" to={`post/${post.id}`}>View Post</Link>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
            </div>
        </article>)
}

export default PostsExcerpt