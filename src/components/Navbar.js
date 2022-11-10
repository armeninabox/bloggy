import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from './Modal';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className='h-25 bg-sky-500 p-5 flex items-center my-0 mx-auto rounded-b-lg shadow-md'>
      <Link to='/'>
        <img className='h-20 w-20' src='/images/logo.png' alt='Bloggy logo' />
      </Link>
      <div className='flex items-center ml-auto'>
        <Link className='ml-4 no-underline p-1' to='/'>
          <HomeIcon className='text-white' fontSize='large' />
        </Link>
        <Link
          className='ml-4 no-underline p-1'
          onClick={() => {
            setShowModal(true);
          }}
        >
          <AddCircleOutlineIcon className='text-white' fontSize='large' />
        </Link>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </nav>
  );
}

export default Navbar;
