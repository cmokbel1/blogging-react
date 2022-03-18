import './blog.css';

const Blog = (props) => {
  const { blog } = props
      return (
        <div className="blogBox">
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <button className="btn btn-info">Comment</button>
        </div>
      )
}



export default Blog;