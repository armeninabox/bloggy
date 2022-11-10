import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

import React from 'react';

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className=''>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className='text-3xl font-extrabold mb-2'>{blog.title}</h2>
          <hr className='my-5' />
          <p className='my-2 font-semibold'>Written by {blog.author}</p>
          <p className='text-lg font-medium'>{blog.body}</p>
          <button
            className='my-5 p-4 rounded-lg bg-sky-500 hover:bg-sky-600 hover:text-sky-50 ease-in duration-150 shadow-md'
            onClick={handleClick}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
