import { default as LoginCompiler } from '../../helpers/loginHelpers/loginCompiler'

const Login = (props) => {

  return (
    <>
      <div className="mb-3 row">
    <label htmlFor="inputUsername" class="col-sm-2 col-form-label">username</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control" id="inputUsername" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
      <br />
    </div>
    <button id="loginbutton" onClick={LoginCompiler} className="btn-primary">Login</button>
  </div>
  </>
  )
}

export default Login