import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, getPostStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";

import PostsExcerpt from "./PostsExcerpt";

const Posts = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle'){
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);


    let content;

    if (postStatus === 'loading'){
        content = <p>"Loading ... "</p>;
    }else if (postStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />);
    }else if(postStatus === 'failed'){
        content = <p>{error}</p>
    }


    return (
        <section className="p-3 py-6 md:p-6">
            <h2 className="text-semibold text-3xl">Posts</h2>
            <div className="my-4 flex flex-col gap-2 lg:w-1/3">
                {content}
            </div>
        </section>
    )
}

export default Posts