import React from 'react'

export const pagination = ({blogsPerPage, totalBlogs}) => {
    const pageNumbers =  [];
    for (let i =1;  i<Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(page => (<li key={page} className="page-item"><a href="!#" className="page-link">{page}</a></li> ))}
        </ul>
    </nav>
  )
}
