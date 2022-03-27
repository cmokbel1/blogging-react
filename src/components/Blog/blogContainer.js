import { useState, useEffect } from 'react';
import './blog.css';
import Blog from './blog';
const axios = require('axios');


const BlogContainer = (props) => {
  // creates a blogstate that queries the database for all the blog posts
  const [blogs, setBlogs] = useState([
    {
      title: '',
      body: ''
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


  return (
    blogs.map((blog, idx) => <Blog  key={idx} blog={blog}/> )
  )
}

export default BlogContainer;


