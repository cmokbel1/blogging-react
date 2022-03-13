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
        <a className="navbar-brand mx-auto" href="/">
          <img src={logo} alt="logo" width="75" height="75"/>
          Welcome to Claude's Corner
          <img src={logo} alt="logo" width="75" height="75"/>
        </a>
        <LogOrReg />

    </nav>
    <main>
        <div className=" blogs row justify-content-center">
          This information will be postd blogs 
          <BlogContainer />
        </div>
    <aside>
      This is the far right section that should contain related articles based on tags and the like
    </aside>
    </main>
    <Footer />
    </>
  )
}

