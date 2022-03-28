import { useState } from 'react'
import './blog.css';
import {HandleNoteModal} from '../NoteModal/notemodal'

const Blog = (props) => {
  const { blog } = props

  
  const [showModal, setShowModal] = useState(null)

   function handleModalSwitch()  {
    setShowModal(true)
    console.log(showModal)
   }

  if (showModal) {
    return (
      <HandleNoteModal />
    )
  }

  return (
    <>
      <div className="blogBox">
        <h4>{blog.title}</h4>
        <hr />
        <p>{blog.body}</p>
        <hr />
        <p id="postedBy">Posted By: Claude @ {blog.createdAt}</p>
        <hr />
        <button className="btn btn-info" onClick={handleModalSwitch}>Comment</button>
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