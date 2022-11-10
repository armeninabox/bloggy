import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('John');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate('/');
    });
  };

  return (
    <div className=''>
      <h2 className='text-3xl font-semibold'>Add A New Blog</h2>
      <form className='px-0 my-12 max-w-3xl mx-auto' onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className='text-2xl'>Blog title</label>
          <input
            className='border border-gray-400 block py-2 px-2 w-full rounded focus:outline-none focus:border-sky-500 mt-2 shadow'
            type='text'
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='my-5'>
          <label className='text-2xl'>Blog body</label>
          <textarea
            className='border border-gray-400 block py-2 px-2 w-full rounded focus:outline-none focus:border-sky-500 mt-2 shadow'
            type='text'
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <div className='my-5'>
          <label className='text-2xl'>Blog author</label>
          <select
            className='border border-gray-400 block py-2 px-2 w-full rounded focus:outline-none focus:border-sky-500 mt-2 shadow'
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value='John'>John</option>
            <option value='Frank'>Frank</option>
          </select>
        </div>
        {!isPending && (
          <button className='my-5 p-4 rounded-lg bg-sky-500 hover:bg-sky-600 hover:text-sky-50 ease-in duration-150 shadow-md'>
            Add blog
          </button>
        )}
        {isPending && (
          <button
            className='my-5 p-4 rounded-lg bg-sky-500 hover:bg-sky-600 hover:text-sky-50 ease-in duration-150 shadow-md'
            disabled
          >
            Adding blog...
          </button>
        )}
      </form>
    </div>
  );
}

export default Create;
