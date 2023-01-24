import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";

import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const users = useSelector(selectAllUsers); 
    
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle("");
            setContent("");
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId); 

    const userOptions = users.map(user => (
        <option className="text-gray-900" key={user.id} value={user.id}>{user.name}</option>
    ))

    return (
        <div>
            <section className="p-3 md:p-6">
                <h2 className="text-semibold text-3xl my-8">New Post</h2>
                <form>
                    <div className="my-3 flex flex-col gap-3 w-full lg:w-1/3">
                        <label htmlFor="postTitle">Title </label>
                        <input type="text"
                            placeholder="Title"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                            className="bg-transparent border rounded-md py-3 px-3 ring-0 outline-none"
                        />
                    </div>
                    <div className="my-3 flex flex-col gap-3 w-full lg:w-1/3">
                        <label htmlFor="postAuthor">Author </label>
                        <select 
                            name="postAuthor"
                            value={userId}
                            id="postAuthor"
                            onChange={onAuthorChanged}
                            className="block bg-transparent border rounded-md py-3 px-3 ring-0"
                        >
                            {userOptions}    
                        </select>
                    </div>
                    <div className="my-3 flex flex-col gap-3 w-full lg:w-1/3">
                        <label htmlFor="postContent">Content </label>
                        <textarea
                            placeholder="Content"
                            name="postContent"
                            id="postContent"
                            value={content}
                            onChange={onContentChanged}
                            className="bg-transparent border rounded-md py-3 px-3 ring-0 outline-none resize-none"
                        />
                    </div>
                    <div className="my-6">
                        <button
                            type="button"
                            className="bg-white rounded-md px-4 py-2 text-sm text-gray-900 font-semibold cursor-pointer"
                            onClick={onSavePostClicked}
                            disabled={!canSave}
                        >
                            Save Post
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddPostForm