import logo from './Stachecurlssticker.png'
import { BlogContainer } from '../../components'



export const Home = (props) => {
  const { blogs } = props
  
  return (
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
    </div>
    </>
  )
}

