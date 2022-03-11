import { useState } from 'react';
const axios = require('axios');

const BlogContainer = (props) => {
  const [blogState, setBlogState] = useState({})
  axios.get('/api/blogs').then(res => {
    setBlogState({blog: res.data})
  })
  return (
    <div id='blog'>
      <h2>{blogState.title}</h2>
    </div>
  )
}

export default BlogContainer;