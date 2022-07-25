import React, {useState} from 'react';
import '../src/styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([]);

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPostList = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost} title={'Create New Post'}/>
        <MySelect
            value={selectedSort}
            onChange={sortPostList}
            defaultValue='Sorted by'
            options={[
                {value: 'title', name: 'By Title'},
                {value: 'description', name: 'By Description'}
            ]}
        />
        {
            posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={'Posts List'}/>
                : <></>
        }
    </div>
  );
}

export default App;
