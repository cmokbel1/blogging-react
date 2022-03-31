import { useState } from 'react'
import './blog.css';
import { HandleNoteModal } from '../NoteModal/notemodal'

const Blog = (props) => {
  const { blog, idx, id } = props


  const [open, setOpen] = useState({});
  const handleOpen = id => setOpen(prev => ({ ...prev, [id]: true }));
  const handleClose = id => setOpen(prev => ({ ...prev, [id]: false }));


  if (open === true) {
    return (
      <HandleNoteModal open={open(id)} key={id} onClose={() => handleClose(id)} />
    )
  }

  return (
    <>
      <div className="blogBox"id={id} key={idx}>
        <h4>{blog.title}</h4>
        <hr />
        <p>{blog.body}</p>
        <hr />
        <p id="postedBy">Posted By: Claude @ {blog.createdAt}</p>
        <hr />
        <button className="btn btn-info" onClick={() => handleOpen(id)}>Comment</button>
        <hr />
        <div className="comment Section">
          <span>User 1:</span>
          <span> Comment one</span>
          <br />
          <span>User 2:</span>
          <span> Comment two</span>
        </div>
      </div>
    </>
  )

}



export default Blog;