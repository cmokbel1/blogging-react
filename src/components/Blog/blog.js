import { useState } from 'react'
import './blog.css';
const axios = require('axios')

const Blog = (props) => {
  const { blog, idx, id } = props

  const [noteState, setNoteState] = useState({
    user: '',
    note: '',
    blog: blog.id
  });

  const addComment = (props) => {
   
    let data = {
      body: noteState.note,
      pid: noteState.blog,
    }
    console.log(data)

    let headers = {
      'Authorization': `Bearer ${localStorage.token}`
    }
  }

  const handleInputChange = ({ target: { name, value } }) => {
    setNoteState({ ...noteState, [name]: value });
  };


  return (
    <>
      <div className="blogBox" id={id} key={idx}>
        <h4>{blog.title}</h4>
        <hr />
        <p>{blog.body}</p>
        <hr />
        <p id="postedBy">Posted By: Claude @ {blog.createdAt}</p>
        <hr />
        <label htmlFor="comment" className=" col-form-label">Share Your Thoughts:</label>
          <textarea type="text" className="form-control"  name="note" onChange={handleInputChange}  placeholder=" " />
          <br />
        <button className="btn btn-info" onClick={addComment}>Comment</button>
        <hr />
        <div className="comment Section">
          <h5><strong>Comments</strong></h5>
          <hr />
        </div>
      </div>
    </>
  )

}



export default Blog;