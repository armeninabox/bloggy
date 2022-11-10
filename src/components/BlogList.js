import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {
  return (
    <div>
      <h2 className='text-3xl font-semibold mb-8'>{title}</h2>
      {blogs.map((blog) => (
        <div
          className='py-3 px-4 hover:shadow-md my-3 rounded-lg border border-gray-300 bg-gray-100 ease-in duration-100'
          key={blog.id}
        >
          <Link to={`blogs/${blog.id}`}>
            <h2 className='text-2xl font-semibold mb-2'>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
