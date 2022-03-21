import { useState } from 'react'
import { Profile } from '../Profile/profile'
const axios = require('axios');


export function LogOrReg(props) {
  // STATES
  const [loginState, setLoginState] = useState(false);
  const [userState, setUserState] = useState({
    username: '',
    password: ''
  })

  const [registerState, setRegisterState] = useState({
    username: '',
    password: '',
    email: ''
  })
  // handle changes in inputs on forms
  const handleInputChangeLogin = ({ target: { name, value } }) => {
    setUserState({ ...userState, [name]: value });
  }
  const handleInputChangeRegister = ({ target: { name, value } }) => {
    setRegisterState({ ...registerState, [name]: value });

  }

  // button click response for register
  const handleRegisterClick = (event) => {
    event.preventDefault()

    axios.post('api/users/register', {
      username: registerState.username,
      password: registerState.password,
      email: registerState.email
    }).then(res => {
      console.log(res)
    })

  }

  //  when a user logs out
  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setLoginState(false)
  }
  // when a user clicks login
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('/api/users/login', {
      username: userState.username,
      password: userState.password
    }).then(token => {
      setLoginState(true)
      localStorage.setItem('username', userState.username);
      localStorage.setItem('token', token.data);
    

    }).catch(err => { console.log(err) })

    //  if the token is present we set the token and username in local storage
    //   if(token) {
    //     localStorage.setItem('username', username)
    //     // changing the login state if token is present
    //     setLoginState(true)
    //     window.location = '/'
    //   }
  }

  //  when the token is present and login state is set to true
  if (loginState) {
    return (
      <>
        <Profile />
        <button type="button" className="btn btn-warning" onClick={handleLogOut}>Logout</button>
      </>
    )
  }
  // if there is no token we display the login/ registration modal
  if (!loginState) {
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
                    <input type="text" className="form-control" id="inputUsername" name="username" onChange={handleInputChangeLogin} defaultValue={userState.username} placeholder=" " />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" name="password" onChange={handleInputChangeLogin} defaultValue={userState.password} placeholder=" " />
                    <br />
                    <button id="loginbutton" onClick={handleLogin} data-bs-dismiss="modal" className="btn btn-primary">Login</button>
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
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" name="username" id="registerUser" defaultValue={registerState.username} onChange={handleInputChangeRegister} className="form-control" placeholder=" " />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail:</label>
                    <input type="text" name="email" id="registerEmail" className="form-control" onChange={handleInputChangeRegister} defaultValue={registerState.email} placeholder=" " />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" name="password" id="registerPassword" className="form-control" onChange={handleInputChangeRegister} defaultValue={registerState.password} placeholder=" " />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={handleRegisterClick}>Register</button>
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
