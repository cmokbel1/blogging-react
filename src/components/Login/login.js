import loginFunc from '../../helpers/loginFunc'

const Login = (props) => {
  return (
    <>
      <div className="mb-3 row">
    <label htmlFor="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control-plaintext" id="inputEmail" value="email@example.com" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
    <button id="loginbutton" onClick={loginFunc} className="btn-primary">Login</button>
  </div>
  </>
  )
}

export default Login