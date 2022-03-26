import logo from './Stachecurlssticker.png';
import { LogOrReg } from '../LoginRegister/logOrReg';
import { Poster } from '../../views/Poster/index';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'

export function NavBar() {
  <Router>
    <Routes>
      <Route path="/post" element={<Poster />}></Route>
    </Routes>
    <Link to="/post">Blog</Link>
  </Router>
  if (localStorage.getItem('token') && localStorage.getItem('username') === 'Claude') {
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
      </>
    )
  } else {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand mx-auto" href="/">
          <img src={logo} alt="logo" width="75" height="75" />
          Welcome to Claude's Corner
          <img src={logo} alt="logo" width="75" height="75" />
        </a>
        <LogOrReg />
      </nav>
    )
  }
}