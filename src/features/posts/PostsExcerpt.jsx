import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="flex flex-col gap-3 w-full bg-gray-100 p-2 text-gray-800 rounded-md cursor-pointer" >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="break-words">{post.body.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>)
}

export default PostsExcerpt