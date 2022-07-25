import React from 'react';
import '../styles/PostItem.scss'
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.id}. {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__btns">
                <MyButton type='button'
                          name={'Remove Post'}
                          onClick={() => props.remove(props.post)}
                />
            </div>
        </div>
    );
};

export default PostItem;
