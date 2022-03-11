import logo from './Stachecurlssticker.png'
import { BlogContainer, Footer } from '../../components'



export const Home = (props) => {
  
  return (
    //  dead navbar with login button on the right side
    // login button displays a modal with inputs
    // modal displays login button inside which queries the database
    // logging in closes the modal and thanks the user for logging in
    <>
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand mx-auto" href="/">
          <img src={logo} alt="logo" width="75" height="75"/>
          Welcome to Claude's Corner
          <img src={logo} alt="logo" width="75" height="75"/>
        </a>
    </nav>
    <div className="blog-container">
      beep boop
        <div className="row justify-content-center">
          <BlogContainer />
        </div>
        <Footer/>
    </div>
    </>
  )
}

