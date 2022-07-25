import React, {useMemo, useState} from 'react';
import '../src/styles/App.scss'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortedPosts = useMemo(() => {
        return filter.sort
            ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            : posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts]);

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
