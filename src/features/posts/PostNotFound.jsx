import React from 'react'
import { Link } from 'react-router-dom'

const PostNotFound = () => {
    return (
        <section className="flex justify-center mt-[calc(25vh)]">
            <div className="flex flex-col gap-3">
                <h2 className="text-lg font-medium">Post not found 😪</h2>
                <p className='text-lg'>visit all <Link to="/" className="underline">posts</Link> page</p>
            </div>
        </section>)
}

export default PostNotFound