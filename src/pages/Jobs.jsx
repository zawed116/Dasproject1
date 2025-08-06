import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobPage = () => {
  const navigate = useNavigate();

  // Companies data for scrolling marquee
  const companies = [
    { name: 'Tech Mahindra', logo: 'https://logo.clearbit.com/techmahindra.com', category: 'IT Services' },
    { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com', category: 'E-commerce' },
    { name: 'bigbasket', logo: 'https://logo.clearbit.com/bigbasket.com', category: 'Grocery' },
    { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com', category: 'IT Services' },
    { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com', category: 'IT Services' },
    { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com', category: 'IT Services' },
    { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com', category: 'IT Services' },
    { name: 'Reliance', logo: 'https://logo.clearbit.com/ril.com', category: 'Conglomerate' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', category: 'E-commerce' },
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com', category: 'Technology' },
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com', category: 'Technology' }
  ];

  // Duplicate for seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">INDIA'S #1 JOB PLATFORM</h1>
        <p className="text-xl text-gray-700 mb-2">Your job search ends here</p>
        <p className="text-lg text-gray-600 mb-8">Discover 50 lakh+ career opportunities</p>
        
        {/* Search Form */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search jobs by 'title'</label>
              <input 
                type="text" 
                placeholder="Job title, keywords" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Experience</option>
                <option>Fresher</option>
                <option>1-3 years</option>
                <option>4-6 years</option>
                <option>7+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input 
                type="text" 
                placeholder="Search for an area or..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Search jobs
          </button>
        </div>
      </section>

      {/* Proud to Support Section */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Proud to Support</h2>
        <div className="flex justify-center space-x-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xl font-bold">PINT</div>
            <span className="text-gray-600">PINT</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xl font-bold">DIGIT</div>
            <span className="text-gray-600">DIGIT</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xl font-bold">HAPPY</div>
            <span className="text-gray-600">HAPPY</span>
          </div>
        </div>
      </section>

      {/* Scrolling Companies Marquee */}
      <section className="mb-16 overflow-hidden">
        <h3 className="text-center text-lg font-medium text-gray-600 mb-8">
          Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
        </h3>
        
        <div className="relative w-full overflow-hidden h-32">
          <div className="absolute flex items-center space-x-12 animate-marquee whitespace-nowrap">
            {duplicatedCompanies.map((company, index) => (
              <div key={index} className="inline-flex flex-col items-center min-w-max">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-16 w-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/150?text=" + company.name.substring(0, 3);
                    e.target.className = "h-16 w-16 object-contain bg-gray-200 rounded-full p-2 flex items-center justify-center text-xs font-bold";
                  }}
                />
                <span className="mt-2 text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-xl font-bold mb-2">Tech Mahindra</div>
            <div className="text-gray-500">IT Services</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-xl font-bold mb-2">Mapufermava</div>
            <div className="text-gray-500">Manufacturing</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-xl font-bold mb-2">Flipkart</div>
            <div className="text-gray-500">E-commerce</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-xl font-bold mb-2">bigbasket</div>
            <div className="text-gray-500">Grocery</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-8">Get in Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email us</p>
                  <p className="text-gray-600">support@jobplatform.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Call us</p>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Visit us</p>
                  <p className="text-gray-600">123 Business Park, Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Send us a message</h4>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>




        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">Popular Searches on Apna</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Part Time Jobs */}
    <div className="border border-gray-100 rounded-md p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500">TRENDING AT #3</span>
        <button className="text-blue-500 text-xs font-medium flex items-center">
          View all <span className="ml-1">&gt;</span>
        </button>
      </div>
      <div className="flex items-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/4a90e2/part-time-job.png" 
          alt="Part time" 
          className="w-10 h-10 mr-3"
        />
        <h3 className="text-base font-semibold text-gray-800">Part time Jobs</h3>
      </div>
    </div>

    {/* Jobs for Freshers */}
    <div className="border border-gray-100 rounded-md p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500">TRENDING AT #1</span>
        <button className="text-blue-500 text-xs font-medium flex items-center">
          View all <span className="ml-1">&gt;</span>
        </button>
      </div>
      <div className="flex items-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/4a90e2/graduation-cap.png" 
          alt="Freshers" 
          className="w-10 h-10 mr-3"
        />
        <h3 className="text-base font-semibold text-gray-800">Jobs for Freshers</h3>
      </div>
    </div>

    {/* Jobs for Women */}
    <div className="border border-gray-100 rounded-md p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500">TRENDING AT #4</span>
        <button className="text-blue-500 text-xs font-medium flex items-center">
          View all <span className="ml-1">&gt;</span>
        </button>
      </div>
      <div className="flex items-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/4a90e2/women-s-group.png" 
          alt="Women jobs" 
          className="w-10 h-10 mr-3"
        />
        <h3 className="text-base font-semibold text-gray-800">Jobs for Women</h3>
      </div>
    </div>

    {/* Work from Home */}
    <div className="border border-gray-100 rounded-md p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500">TRENDING AT #2</span>
        <button className="text-blue-500 text-xs font-medium flex items-center">
          View all <span className="ml-1">&gt;</span>
        </button>
      </div>
      <div className="flex items-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/4a90e2/work-from-home.png" 
          alt="WFH" 
          className="w-10 h-10 mr-3"
        />
        <h3 className="text-base font-semibold text-gray-800">Work from home Jobs</h3>
      </div>
    </div>

    {/* Full Time Jobs */}
    <div className="border border-gray-100 rounded-md p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500">TRENDING AT #5</span>
        <button className="text-blue-500 text-xs font-medium flex items-center">
          View all <span className="ml-1">&gt;</span>
        </button>
      </div>
      <div className="flex items-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/4a90e2/business.png" 
          alt="Full time" 
          className="w-10 h-10 mr-3"
        />
        <h3 className="text-base font-semibold text-gray-800">Full time Jobs</h3>
      </div>
    </div>

    {/* Contact Support */}
    <div className="border border-gray-100 rounded-md p-4 bg-blue-50 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-blue-600">NEED HELP?</span>
      </div>
      <div className="flex items-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/4a90e2/headset.png" 
          alt="Support" 
          className="w-10 h-10 mr-3"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-800">Contact Support</h3>
          <p className="text-xs text-gray-500">We're available 24/7</p>
        </div>
      </div>
    </div>
  </div>
</div>

        
      </section>

      {/* Marquee Animation CSS */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default JobPage;