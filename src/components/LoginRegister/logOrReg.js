import { useState } from 'react'
const axios = require('axios');

export function LogOrReg(props) {
  const [loginState, setLoginState] = useState(false);
  
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
    event.preventDefault();

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


  if (loginState) {
    return (
      <button type="button" className="btn btn-warning" onClick={handleLogOut}>Logout</button>
    )
  }

  if(!loginState) {
    return (
      <>
        <div className="modal fade" id="loginModal" aria-hidden="true" aria-labelledby="loginModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">User Login</h5>
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
                    <button id="loginbutton" onClick={handleLogin} className="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" data-bs-target="#registerModal" data-bs-toggle="modal">Register</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="registerModal" aria-hidden="true" aria-labelledby="registerModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="registerModalLabel">Register Account</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="/api/users/register" method="POST">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" name="username" className="form-control" placeholder=" " />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail:</label>
                    <input type="text" name="email" className="form-control" placeholder=" " />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" name="password" className="form-control" placeholder=" " />
                  </div>
                  <button type="submit" className="btn btn-primary">Register</button>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" data-bs-target="#loginModal" data-bs-toggle="modal">Login</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <a className="btn btn-warning" data-bs-toggle="modal" href="#loginModal" role="button">Login</a>
       </>
    )
  }

}
