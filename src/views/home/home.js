import logo from './Stachecurlssticker.png'
import { BlogContainer, Footer, LogOrReg  } from '../../components'



export function Home(props) {
  return (
    //  dead navbar with login button on the right side
    // login button displays a modal with inputs
    // modal displays login button inside which queries the database
    // logging in closes the modal and thanks the user for logging in
    <>
    
        <nav className="navbar navbar-dark bg-dark">
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
          Register
        </button>
        <RegisterModal /> */}
        <a className="navbar-brand mx-auto" href="/">
          
          <img src={logo} alt="logo" width="75" height="75"/>
          Welcome to Claude's Corner
          <img src={logo} alt="logo" width="75" height="75"/>
        </a>
        <LogOrReg />

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

