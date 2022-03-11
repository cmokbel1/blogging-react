import { useState } from 'react'
const axios = require('axios');

export function LogOrReg(props) {
  const [loginState, setLoginState] = useState(true);
  
  async function loginFunc(user) {
    try {
      const { data } = await axios.post('/api/users/login', user)
      return data


    } catch (err) {
      alert('Something Went Wrong. Please Try Again')
    }
  }

  if (localStorage.getItem('token')) {
    setLoginState(true)
  }

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setLoginState(false)
  }

  const handleLogin = (event) => {
    event.preventDefault()

    const { username, token } =  loginFunc({
      username: document.getElementById('inputUsername').value,
      password: document.getElementById('inputPassword').value,

    })
    console.log({ username, token })

    if(token) {
      localStorage.setItem('username', username)
      localStorage.setItem('token', token)
      window.location = '/'
    }
  }

  const handleRegisterModal = () => {

  }
  if (loginState) {
    return (
      <button type="button" className="btn btn-warning" onClick={handleLogOut}>Logout</button>
    )
  }

  if(!loginState) {
    return (
      <>
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#loginModal">
  Login
</button>
      <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">User Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label htmlFor="inputUsername" className="col-sm-2 col-form-label">username</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputUsername" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" />
                  <br />
                </div>
                <button id="loginbutton" onClick={handleLogin} className="btn-primary">Login</button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleRegisterModal}>Register</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

}