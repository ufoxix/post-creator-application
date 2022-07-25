import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create, title}) => {
    const [post, setPost] = useState({title: '', description: ''});

    const addNewPost = () => {
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({title: '', description: ''});
    }

    return (
        <div>
            <h1>{title}</h1>
            <form>
                <MyInput
                    type="text"
                    placeholder='Post Name'
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                />
                <MyInput
                    type="text"
                    placeholder='Post Description'
                    value={post.description}
                    onChange={event => setPost({...post, description: event.target.value})}
                />
                <MyButton
                    type='button'
                    name={'Create Post'}
                    onClick={addNewPost}
                />
            </form>
        </div>
    );
};

export default PostForm;
