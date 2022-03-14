import logo from '../home/Stachecurlssticker.png'
import { Footer, NavBar } from '../../components'

export function Poster() {
  return (
    <>
    <NavBar />
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