import { BlogContainer, NavBar, Footer } from '../../components'
import { Poster } from '../Poster/index'



export function Home(props) {
  if (localStorage.getItem('token') && localStorage.getItem('username') === 'Claude') {
    return (
      <Poster />
    )
  } else {
    return (
      <>
        <NavBar />
        <main>
          <div className=" blogs row justify-content-center">
            <BlogContainer className="blogContainer" />
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
