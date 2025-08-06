import React from 'react';

const EnterpriseHiring = () => {
  const contacts = [
    { name: "Himuri Steph", role: "Start executive", exp: "3 yrs exp" },
    { name: "Shenrii", rating: "0.8" },
    { name: "Rahul Kumar Sharma", role: "Customer associate", exp: "3 yrs exp" },
    { name: "Graphic designer", location: "Okin'shawl, Hyderabad" },
    { status: "Active", review: "20 To Review" }
  ];

  const brands = [
    "Comory", "ZOMAato", "Suoprers", "Fiahindra", "Himali", 
    "Sportist", "Sivarifat", "Orapric", "TechMinds", "InnoWave",
    "GreenSolutions", "UrbanBuild", "FoodieBay", "HealthPlus", "EduSmart"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            apna enterprise hiring solutions.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get closer to your target filtrate! Hire from a pool of <span className="font-semibold text-blue-600">50M+ jobseekers</span> in <span className="font-semibold">200+ industries</span> across <span className="font-semibold">900+ cities</span> in India
          </p>
          
          <div className="mt-10 transition-transform hover:scale-105">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto border-t border-gray-200 my-8"></div>

      {/* Contact Sales Section */}
      <section className="relative py-16 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-sm max-w-5xl mx-4 sm:mx-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Contact our sales team
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contacts.map((contact, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {contact.name && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.name}</h3>
                )}
                {contact.status && (
                  <div className="flex items-center mb-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    <h3 className="text-xl font-semibold text-gray-900">{contact.status}</h3>
                  </div>
                )}
                {contact.role && (
                  <p className="text-gray-600">{contact.role} <span className="text-blue-500">+ {contact.exp}</span></p>
                )}
                {contact.rating && (
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-lg mr-1">★</span>
                    <span className="text-gray-600 font-medium">{contact.rating}</span>
                  </div>
                )}
                {contact.location && (
                  <p className="text-gray-600 flex items-center mt-2">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {contact.location}
                  </p>
                )}
                {contact.review && (
                  <p className="text-gray-600 mt-2">{contact.review}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Trusted by <span className="text-blue-600">innovative brands</span> across industries
          </h2>
          
          {/* Scrolling brands */}
          <div className="relative overflow-hidden py-6">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-indigo-50 to-transparent z-10"></div>
            
            <div className="flex overflow-x-auto py-4 hide-scrollbar">
              <div className="flex space-x-8 px-4 animate-scroll">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <p className="text-lg font-medium text-gray-800">{brand}</p>
                  </div>
                ))}
                {/* Duplicate for infinite scroll */}
                {brands.map((brand, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex-shrink-0 bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <p className="text-lg font-medium text-gray-800">{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-gray-600">Industries</div>
            </div>
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-blue-600 mb-2">900+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>





        <div class="bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-blue-900/90 py-16 px-4 sm:px-6 lg:px-8">
  {/* <!-- Main Features --> */}
  <div class="mb-16">
    <h2 class="text-3xl font-bold text-center mb-6 text-white">Hiring which scales with your needs</h2>
    <p class="text-xl text-center text-blue-100 mb-12">Everything your business needs with our Enterprise-available features</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Feature 1 --> */}
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300">
        <h3 class="text-xl font-bold text-blue-800 mb-4">Employee branding</h3>
        <p class="text-blue-700">Being your company and becomes an employer of choice!</p>
      </div>
      
      {/* <!-- Feature 2 --> */}
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300">
        <h3 class="text-xl font-bold text-blue-800 mb-4">Team management</h3>
        <p class="text-blue-700">One begins to pour entire recruitment team. Specify account and range participants!</p>
      </div>
{/*       
      <!-- Feature 3 --> */}
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300">
        <h3 class="text-xl font-bold text-blue-800 mb-4">ATS Integrations</h3>
        <p class="text-blue-700">Connect with you ATS, google-wheels or GPS, right out of the line.</p>
      </div>
{/*       
      <!-- Feature 4 --> */}
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300">
        <h3 class="text-xl font-bold text-blue-800 mb-4">Reports</h3>
        <p class="text-blue-700">Everything your business needs with our Enterprise-available features.</p>
      </div>
      
      {/* <!-- Feature 5 --> */}
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300">
        <h3 class="text-xl font-bold text-blue-800 mb-4">Power features to optimise hiring</h3>
        <p class="text-blue-700">Whacking minds, AI lead management, Job Boosting, templates</p>
      </div>
      
      {/* <!-- Feature 6 --> */}
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300">
        <h3 class="text-xl font-bold text-blue-800 mb-4">Dedicated Customer Support</h3>
        <p class="text-blue-700">Our team will help you connect and solve issues to improve hiring outcomes.</p>
      </div>
    </div>
  </div>

  {/* <!-- Plus Features --> */}
  <div class="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
    <h3 class="text-2xl font-bold text-center mb-8 text-blue-900">Plus you will get:</h3>
    
    <div class="space-y-6">
      {/* <!-- Plus Feature 1 --> */}
      <div class="bg-blue-50/70 p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300">
        <h4 class="font-bold text-lg text-blue-800 mb-2">Smart Inbound hiring</h4>
        <p class="text-blue-700">Our Inbound Applications from High-Inosit, Renewal Corridorline</p>
      </div>
{/*       
      <!-- Plus Feature 2 --> */}
      <div class="bg-blue-50/70 p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300">
        <h4 class="font-bold text-lg text-blue-800 mb-2">AI-Powered Database Search</h4>
        <p class="text-blue-700">Quickly connect with user size relevant, active jobmakers around your office.</p>
      </div>
      
      {/* <!-- Plus Feature 3 --> */}
      <div class="bg-blue-50/70 p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300">
        <h4 class="font-bold text-lg text-blue-800 mb-2">Walk-ins</h4>
        <p class="text-blue-700">Publish Walk-in details and get upto $5 more walk-ins compared to competitive.</p>
      </div>
    </div>
  </div>
</div>




      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-4">apna enterprise</h3>
              <p className="text-gray-400">Your premier hiring solution connecting employers with top talent across India.</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Sales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <a 
                href="https://employer.apna.co/contact-us" 
                className="text-blue-400 hover:text-blue-300 transition block mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                employer.apna.co/contact-us
              </a>
              <div className="mt-6 p-4 bg-gray-800 rounded-lg flex flex-wrap justify-center items-center gap-4">
                <span className="font-medium">Graphic designer</span>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span className="text-green-400 font-medium flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Active
                </span>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span className="font-medium">20 To Review</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            © {new Date().getFullYear()} apna enterprise. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EnterpriseHiring;