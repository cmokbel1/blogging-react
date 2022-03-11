import { useState } from 'react';
import Blog from './blog'
const axios = require('axios');

const BlogContainer = (props) => {
  const [blogState, setBlogState] = useState({})
  axios.get('/api/blogs').then(res => {
    setBlogState({blog: res.data})
  })
  return (
    <Blog blog={blogState} />
  )
}

export default BlogContainer;