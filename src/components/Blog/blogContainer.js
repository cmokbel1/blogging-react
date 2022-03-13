import { useState } from 'react';
import Blog from './blog'
const axios = require('axios');

const BlogContainer = (props) => {
  // creates a blogstate that queries the database for all the blog posts
  const [blogState, setBlogState] = useState({
    title: '',
    body: ''
  })
  axios.get('/api/blogs').then(res => {

    setBlogState({blogs: res.data})
  })
  return (
    // <Blog blog={blogState} />
    <></>
  )
}

export default BlogContainer;