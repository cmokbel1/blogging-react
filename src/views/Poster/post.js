import logo from './Stachecurlssticker.png'
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
    <div> INSERT INPUT FIELDS FOR CREATING A BLOG POST HERE</div>
    <Footer/> 
    </>
  )
}