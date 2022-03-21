import { BlogContainer, Footer, NavBar } from '../../components'



export function Home(props) {
  return (
    //  dead navbar with login button on the right side
    // login button displays a modal with inputs
    // modal displays login button inside which queries the database
    // logging in closes the modal and thanks the user for logging in
    <>
    <NavBar />
    <main>
        <div className=" blogs row justify-content-center">
          <BlogContainer className="blogContainer"/>
          <aside>
            This is the far right section that should contain related articles based on tags and the like
            blah blah blah lorem ipsum. text here is meant to display the true size of the div and make it fit to the page bter.
          </aside>
          </div>
    </main>
    <Footer />
    </>
  )
}

