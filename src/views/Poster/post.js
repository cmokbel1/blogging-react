import { useState } from 'react'
import { Footer, NavBar } from '../../components'
import './post.css'
const axios = require('axios')

export function Poster() {
  const [blogPost, setBlogPost] = useState({
    title: '',
    body: '',
    user: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setBlogPost({ ...blogPost, [name]: value });
  }

  const handlePostBlog = (event) => {
    event.preventDefault()
    if (localStorage.getItem('username') === 'Claude') {
      let newPost = {
        title: blogPost.title,
        body: blogPost.body,
        user: ''
      }
      axios.post('/api/blogs', newPost, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          console.log(res)
          window.location = '/'
          blogPost.title = ''
          blogPost.body = ''
        })
    } else {
      alert('Oops, you\'re not allowed to post.')
    }
  }

  return (
    <>
      <NavBar />
      <main>
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input type="text" name="title" className="form-control formTitle" placeholder="Sample Blog Title" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">Body:</label>
              <textarea name="body" className="form-control formBody" placeholder="Enter Blog Post Here" onChange={handleInputChange} required />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handlePostBlog}>Post</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}