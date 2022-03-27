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
          <aside>
            This is the far right section that should contain related articles based on tags and the like blah blah blah lorem ipsum. text here is meant to display the true size of the div and make it fit to the page better. This is the far right section that should contain related articles based on tags and the like blah blah blah lorem ipsum. text here is meant to display the true size of the div and make it fit to the page better. This is the far right section that should contain related articles based on tags and the like blah blah blah lorem ipsum. text here is meant to display the true size of the div and make it fit to the page better. This is the far right section that should contain related articles based on tags and the like blah blah blah lorem ipsum. text here is meant to display the true size of the div and make it fit to the page better.
          </aside>
        </main>
        <Footer />
      </>
    )
  }
}
