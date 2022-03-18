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
          <BlogContainer/>
        </div>
    <aside>
      This is the far right section that should contain related articles based on tags and the like
    </aside>
    </main>
    <Footer />
    </>
  )
}

