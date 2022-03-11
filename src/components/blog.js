
const Blog = (props) => {
  const { blogState } = props
  return (
    blogState.map((blog, idx) => {
      return (
        <>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        </>
      )
    } )
  )
}



export default Blog;