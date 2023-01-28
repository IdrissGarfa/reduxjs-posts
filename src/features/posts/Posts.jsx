import { useSelector } from "react-redux"
import { selectAllPosts, getPostStatus, getPostsError } from "./postsSlice";
import { useEffect } from "react";

import { FiSearch } from "react-icons/fi"

import PostsExcerpt from "./PostsExcerpt";

const Posts = () => {

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostStatus);
    const error = useSelector(getPostsError);

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
            <div className="my-10 flex items-center justify-center gap-4">
                <div className="bg-slate-50 rounded-lg p-3 w-full md:w-1/2 flex items-center gap-3">
                    <FiSearch className="text-gray-700 text-2xl" />
                    <input className="bg-transparent w-full border-none outline-none ring-0" type="text" placeholder="Search post" />
                </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 justify-center">
                {content}
            </div>
        </section>
    )
}

export default Posts