import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import NotFound from './components/NotFound';
import BlogDetails from './components/BlogDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className='max-w-4xl mx-auto'>
        <Navbar />
        <div className='my-10 mx-auto p-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
