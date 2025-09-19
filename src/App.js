import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home.js';
import Categories from './pages/Categories.js';
import Collections from './pages/Collections.js';
import Contact from './pages/Contact.js';
import CollectionsDetail from './pages/CollectionsDetail.js';

function App() {
  return (
    <div className="wrap">
      <Navbar />

      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/collections/:id' element={<CollectionsDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <footer className='site-footer'>
        <small>&copy; {new Date().getFullYear()} Petite ObjetLight</small>
      </footer>
    </div>
  );
}

export default App;
