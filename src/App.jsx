import { useEffect, useState } from 'react'
import './App.css'
import { fetchPosts, updatePost, deletePost, createPost } from './services/apiService';

function App() {

  const [posts, setPost] = useState([]);
  //fetch data
  useEffect(() =>{
    const getPosts = async () => {
      const postData = await fetchPosts();
      setPost(postData);
    };

    getPosts();
  }, []);
  //update post
  const handleUpdatePost = async (id) => {
    const updatePosts = {
      title: 'Updated Post',
      body: `This is an Updated Post ${Date.now()}`,
      userId: 1,
    };

    const post = await updatePost(id, updatePosts);
    // console.log(post);
    setPost(posts.map((p) => p.id === id ? post : p));
  };
  //delete post
  const handleDeletePost = async(id) => {
    await deletePost(id);
    setPost(posts.filter((p) => p.id !== id));
  };
  //create post
  const handleCreatePost = async () => {
    const newPost = {
      title: 'New Post',
      body: `This is a new post. ${Date.now()}`,
      userId: 1,
    };
    const post = await createPost(newPost);
    setPost([post, ...posts]);
  };



  return (
    <>
      <div className="app">
        <div className="app-container flex flex-col items-center justify-center">
          <h1 className="app-header text-4xl font-bold text-center mb-2">Post</h1>
          <button className='bg-green-500 rounded-md p-2 text-white border-none
               hover:bg-green-300 cursor-pointer' onClick={handleCreatePost}>Create</button>
          {posts.map(post => (
            <div className="post bg-gray-300 w-[900px] p-2 my-2 rounded-md " key={post.id}>
              <h2 className="post-title text-3xl text-blue-400">{post.title}</h2>
              <p className="post-content text-gray-500">{post.body}</p>
              <button className='button  bg-blue-500 rounded-md p-2 text-white border-none
               hover:bg-blue-300 cursor-pointer m-1' onClick={() => handleUpdatePost(post.id)}>Update</button>
              <button className='button bg-red-500 rounded-md p-2 text-white border-none
               hover:bg-red-300 cursor-pointer m-1  ' onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
