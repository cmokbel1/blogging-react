import logo from './Stachecurlssticker.png';
import { Profile } from '../Profile/profile'
import { LogOrReg } from '../LoginRegister/logOrReg'

export function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand mx-auto" href="/">
        <img src={logo} alt="logo" width="75" height="75" />
        Welcome to Claude's Corner
        <img src={logo} alt="logo" width="75" height="75" />
      </a>
      <Profile />
      <LogOrReg />
    </nav>
  )
}