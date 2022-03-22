import { useState, useEffect } from 'react';
import './blog.css';
import Blog from './blog';
const axios = require('axios');


const BlogContainer = (props) => {
  // creates a blogstate that queries the database for all the blog posts
  const [blogs, setBlogs] = useState([
    {
      title: 'Blog one',
      body: 'Can you tell that I am elated to have solved this issue?'
   },
   {
    title: 'Blog Two',
    body: " And it was on this day that we realized we still had a long way to go!"
   }
  ])

  useEffect(() => {
    function getBlogs() {
      axios.get('/api/blogs').then(res => {
        console.log(res)
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


