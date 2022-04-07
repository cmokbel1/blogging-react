import { useState } from 'react'
import './blog.css';

const Blog = (props) => {
  const { blog, idx, id } = props

  const [noteState, setNoteState] = useState({
    user: '',
    note: ''
  });

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
        <label htmlFor="comment" className="col-sm-2 col-form-label">Leave a Comment:</label>
          <textarea type="text" className="form-control"  name="comment" onChange={handleInputChange}  placeholder=" " />
          <br />
        <button className="btn btn-info" >Comment</button>
        <hr />
        <div className="comment Section">
        </div>
      </div>
    </>
  )

}



export default Blog;