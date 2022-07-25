import React from 'react';
import PostItem from "./PostItem";
import '../styles/PostsList.css'

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} id={index +1} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;
