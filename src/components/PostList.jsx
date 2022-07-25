import React from 'react';
import PostItem from "./PostItem";
import '../styles/PostsList.scss'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return;
    }
    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post"
                    >
                        <PostItem remove={remove} id={index +1} post={post} key={post.id} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
