import { Link } from 'react-router-dom';

import React from 'react';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl font-extrabold mb-2'>Sorry</h2>
      <p className='mb-20 mt-5 text-xl'>Page cannot be found</p>
      <Link
        className='my-5 p-4 rounded-lg bg-sky-500 hover:bg-sky-600 hover:text-sky-50 ease-in duration-150 shadow-md'
        to='/'
      >
        Back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
