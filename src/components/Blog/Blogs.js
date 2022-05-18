import './blog.css';
import Blog from './Blog.js'

const Blogs = ({loading, blogs}) => {
  if (loading) {
    return <h3>loading...</h3>;
  }

  return  <>{blogs.map((blog, idx, id) => { return <Blog blog={blog} key={idx} id={id} /> })}</>
    

}


export default Blogs;