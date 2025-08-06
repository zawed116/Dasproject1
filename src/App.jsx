import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Enterprise from './pages/Enterprise';
import Blogs from './pages/Blogs'; // Make sure this matches exactly
import Pricing from './pages/Pricing';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/blogs" element={<Blogs />} /> {/* This should match the import */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;