import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({ isVisible, onClose }) {
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
      onClose();
      window.location.reload();
    });
  };
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      id='wrapper'
      className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-none flex justify-center items-center'
      onClick={handleClose}
    >
      <div className='w-[600px] bg-white py-8 px-8 rounded-xl'>
        <div className='w-100 flex justify-end'>
          <button
            className='text-gray-700 text-2xl mb-6'
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
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
    </div>
  );
}

export default Modal;
