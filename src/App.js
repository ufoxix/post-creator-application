import React, {useState} from 'react';
import '../src/styles/App.scss'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

  return (
    <div className="App">
        <MyButton
            name={'Create Post'}
            style={{marginTop: 30}}
            onClick={() => setModal(true)}
        />
        <MyModal
            visible={modal}
            setVisible={setModal}
        >
            <PostForm create={createPost} title={'Create New Post'}/>
        </MyModal>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts List'}/>
    </div>
  );
}

export default App;
