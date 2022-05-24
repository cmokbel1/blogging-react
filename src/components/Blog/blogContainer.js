import { useState, useEffect } from 'react';
import './blog.css';
import Blogs from './Blogs.js';
import { Pagination } from '../Pagination';
const axios = require('axios');


const BlogContainer = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3);
  // creates a blogstate that queries the database for all the blog posts
  const [blogs, setBlogs] = useState([
    {
      title: '',
      body: '',
      id: ''
    }
  ]);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const res = await axios.get('/api/blogs');
      setBlogs(res.data.reverse());
      setLoading(false);
    }
    getBlogs();
  }, [])


  // Get Current Posts
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);


  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
      <Blogs loading={loading} blogs={currentBlogs} />
      <Pagination blogsPerPage={blogsPerPage} totalBlogs={blogs.length} paginate={paginate} />
    </>
  )
}

export default BlogContainer;