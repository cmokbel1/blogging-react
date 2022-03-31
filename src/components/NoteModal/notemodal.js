import { useState } from 'react'

export function HandleNoteModal(props)  {
  const { handleClose } = props
  const [noteState, setNoteState] = useState({
    user: '',
    note: ''
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setNoteState({ ...noteState, [name]: value });
  };

  
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Leave a Comment</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="note" className="form-label">Comment:</label>
                <textarea name="note" className="form-control formBody" placeholder="Enter comment here" onChange={handleInputChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>

  )
}