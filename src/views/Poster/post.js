import logo from '../home/Stachecurlssticker.png'
import { Footer, LogOrReg } from '../../components'

export function Poster() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand mx-auto" href="/">
        <img src={logo} alt="logo" width="75" height="75" />
        Welcome to Claude's Corner
        <img src={logo} alt="logo" width="75" height="75" />
      </a>
      <LogOrReg />
    </nav>
    <main>
    <div>
        <form action="/api/blogs" method="POST">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input type="text" name="title" className="form-control" placeholder="Sample Blog Title" />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Body:</label>
            <textarea name="body" className="form-control" placeholder="Enter Blog Post Here" />
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
    </div>
    </main>
    <Footer/> 
    </>
  )
}