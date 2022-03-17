import { useState, useEffect } from 'react';
import Blog from './blog'
const axios = require('axios');

const BlogContainer = (props) => {
  // creates a blogstate that queries the database for all the blog posts
  const [blogState, setBlogState] = useState({
    title: '',
    body: ''
  })
  
  useEffect(() => {
    function getBlogs() {
      axios.get('/api/blogs').then(res => {
        console.log(res)
        setBlogState({ blogs: res.data })
      }).catch(err => {
        console.log(err)
      })
    }
    getBlogs();
  }, [])

  console.log(blogState)

  return (
    '!'
    // <Blog blog={blogState} />
  )
}

export default BlogContainer;


//  REMOVED FROM BLOGS API // NOT NEEDED
// {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// }