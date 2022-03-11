const Register = () => {
  return (
    <>
<form action="/api/user/register" method="POST">
<div className="mb-3">
  <label htmlFor="username" className="form-label">Username:</label>
  <input type="text" name="username" className="form-control" placeholder=" " />
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label">Password:</label>
  <input type="password" name="password" className="form-control" placeholder=" "/>
</div>
<button type="submit" className="btn btn-primary">Register</button>
</form>
</>
  )
}

export default Register