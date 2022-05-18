import { useState, useEffect } from 'react';
import './blog.css';
import Blogs from './Blogs.js';
const axios = require('axios');


const BlogContainer = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  // creates a blogstate that queries the database for all the blog posts
  const [blogs, setBlogs] = useState([
    {
      title: '',
      body: '',
      id: ''
   }
  ]);

  useEffect(() => {
   const getBlogs = async () => {
     setLoading(true);
     console.log(loading)
     const res = await axios.get('/api/blogs');
    setBlogs(res.data.reverse());
    setLoading(false);
    }
    getBlogs();
  }, [])
  console.log(blogs)
 
  return (
    <Blogs loading={loading} blogs={blogs}/>
  )
}

export default BlogContainer;