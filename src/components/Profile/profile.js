const axios = require('axios')

export function Profile() {
  // get user profile

    let currentUser 
    async function getProfile() {
      try {
        const { data: user } = await axios.get('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        currentUser.push(user)

      } catch (err) {
        console.log(err)
      }
    }
    getProfile()
  console.log(currentUser)
  return (
    // display user information
    <>
    <div className="modal" tabIndex="-1" id="profileModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <span className="col sm-2"><strong>username: </strong></span><span></span>
            <br />
            <span><strong>e-mail: </strong></span><span></span>
            <br />
            <button>Change Password</button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div >
    <a className="btn btn-success" data-bs-toggle="modal" href="#profileModal" role="button">Profile</a>
    </>
  )
}