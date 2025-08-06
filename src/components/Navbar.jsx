import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">Apna</Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <div className="flex items-center cursor-pointer">
                <span className="text-gray-700 hover:text-gray-900 font-medium">Product</span>
                <span className="ml-1 text-gray-500">~</span>
              </div>
              
              {isProductOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <Link to="/product/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Features</Link>
                  <Link to="/product/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Solutions</Link>
                </div>
              )}
            </div>
            
            <Link to="/enterprise" className="text-gray-700 hover:text-gray-900 font-medium">Enterprise</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-gray-900 font-medium">Blogs</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">Pricing</Link>
          </div>

          {/* Right Side Links */}
          <div className="flex items-center space-x-6">
            <Link to="/jobs" className="text-gray-700 hover:text-gray-900 font-medium">Looking for a job</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact us</Link>
            <div className="flex space-x-2">
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link to="/signup" className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar