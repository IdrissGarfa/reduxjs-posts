import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";

import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {

            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap();

                setTitle("");
                setContent("");
                setUserId("");

            } catch (error) {
                console.error('Failed to save the post', error);
            } finally {
                setAddRequestStatus("idle");
            }
        }

    }


    const userOptions = users.map(user => (
        <option className="text-gray-900" key={user.id} value={user.id}>{user.name}</option>
    ))

    return (
        <div className="bg-slate-50 w-full h-[calc(100vh-64px)] p-6 flex lg:justify-center">
            <section className="bg-white h-fit w-full p-6 rounded-lg lg:w-1/3">
                <h2 className="font-semibold text-3xl">New Post</h2>
                <form className="my-8 flex flex-col gap-4 justify-center">
                    <div className="flex flex-col gap-3 w-full">
                        <label className="font-medium" htmlFor="postTitle">Title </label>
                        <input type="text"
                            placeholder="Title"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                            className="bg-transparent border rounded-md py-3 px-3 ring-0 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label className="font-medium" htmlFor="postAuthor">Author </label>
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
                    <div className="flex flex-col gap-3 w-full">
                        <label className="font-medium" htmlFor="postContent">Content </label>
                        <textarea
                            placeholder="Content"
                            name="postContent"
                            id="postContent"
                            value={content}
                            onChange={onContentChanged}
                            className="bg-transparent border rounded-md py-3 px-3 ring-0 outline-none resize-none min-h-[140px]"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm font-semibold cursor-pointer"
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