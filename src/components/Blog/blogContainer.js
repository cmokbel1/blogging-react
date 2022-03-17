import { useState } from 'react';
import Blog from './blog'
const axios = require('axios');

async function BlogContainer(props) {
  // creates a blogstate that queries the database for all the blog posts
  const [blogState, setBlogState] = useState({
    title: '',
    body: ''
  })
  
   await axios.get('/api/blogs', {headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }}).then(res => {
    console.log(res)
    setBlogState({blogs: res.data})
  }).catch(err => {
    console.log(err)
  })

  return (
    '!'
    // <Blog blog={blogState} />
  )
}

export default BlogContainer;