import { useState, useEffect } from 'react';
import './blog.css';
import Blog from './blog';
const axios = require('axios');


const BlogContainer = (props) => {
  // creates a blogstate that queries the database for all the blog posts
  const [blogs, setBlogs] = useState([
    {
      title: '',
      body: '',
      id: ''
   }
  ])

  useEffect(() => {
    function getBlogs() {
      axios.get('/api/blogs').then(res => {
        setBlogs(res.data.reverse())
      }).catch(err => {
        console.log(err)
      })
    }
    getBlogs();
  }, [])

  console.log(blogs)

  return (
    blogs.map((blog, idx, id) => <Blog id={blog._id} key={idx} blog={blog}/> )
  )
}

export default BlogContainer;


