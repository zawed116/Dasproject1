import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  // Company logos data with online image URLs
  const companies = [
    { name: 'Capital', logo: 'https://logo.clearbit.com/capital.com' },
    { name: 'Shoppers Stop', logo: 'https://logo.clearbit.com/shoppersstop.com' },
    { name: 'Tech Mahindra', logo: 'https://logo.clearbit.com/techmahindra.com' },
    { name: 'Teleperformance', logo: 'https://logo.clearbit.com/teleperformance.com' },
    { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
    { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
    { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com' },
    { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com' },
    { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com' },
    { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
    { name: 'Reliance', logo: 'https://logo.clearbit.com/ril.com' }
  ];

  // Duplicate for seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  // Testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "HR Manager, Tech Solutions",
      content: "The 3-month plan was perfect for our hiring needs. We filled 5 positions within 2 months and the quality of candidates was outstanding.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Talent Acquisition Lead",
      content: "The personalized plan with dedicated account manager helped us scale our hiring process efficiently. Highly recommended!",
      rating: 4
    },
    {
      name: "Amit Patel",
      position: "Startup Founder",
      content: "As a small business, the 1-month plan gave us flexibility without breaking the bank. Will definitely use again.",
      rating: 5
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Pricing Plans Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Plan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 Month Plan */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">1 Month</h2>
            <p className="text-gray-600 mb-4">Ideal for small teams</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span>3 Job credits</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span>Use these credits in <strong>30 days</strong></span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" checked disabled />
                <span>Job will be active for 15 days</span>
              </li>
            </ul>
            
            <div className="mb-4">
              <span className="text-2xl font-bold">¥1799</span>
              <span className="text-gray-500 line-through ml-2">¥1950</span>
              <span className="text-green-600 ml-2">7% OFF</span>
            </div>
            
            <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          {/* 3 Months Plan */}
          <div className="border rounded-lg p-6 border-blue-600 relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs rounded-bl-md">
              Most Popular
            </div>
            <h2 className="text-xl font-bold mb-2">3 Months</h2>
            <p className="text-gray-600 mb-4">Perfect for growing businesses</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span>6 Job credits</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span>Use these credits in <strong>90 days</strong></span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" checked disabled />
                <span>Job will be active for 15 days</span>
              </li>
            </ul>
            
            <div className="mb-4">
              <span className="text-2xl font-bold">¥3399</span>
              <span className="text-gray-500 line-through ml-2">¥3900</span>
              <span className="text-green-600 ml-2">13% OFF</span>
            </div>
            
            <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          {/* 6 Months Plan */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">6 Months</h2>
            <p className="text-gray-600 mb-4">Best fit for larger hiring needs</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span>13 Job credits</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span>Use these credits in <strong>180 days</strong></span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" checked disabled />
                <span>Job will be active for 15 days</span>
              </li>
            </ul>
            
            <div className="mb-4">
              <span className="text-2xl font-bold">¥6599</span>
              <span className="text-gray-500 line-through ml-2">¥8450</span>
              <span className="text-green-600 ml-2">22% OFF</span>
            </div>
            
            <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Personalized Plan Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Want a personalised plan?</h2>
          <p className="text-gray-600 mb-6">
            Unlock limitless growth with advanced features and support. Contact our sales team for custom pricing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked disabled />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked disabled />
                  <span>Multimedia WhatsApp Invites</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  <span>ATS Integration</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked disabled />
                  <span>Multiple logins & Reports</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked disabled />
                  <span>Company branding & boosting</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked disabled />
                  <span>Valid up to <strong>360 days</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="my-16">
        <h2 className="text-2xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Contact sales</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Get in touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  ✉
                </span>
                <span>sales@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  📞
                </span>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  📍
                </span>
                <span>Company Headquarters, Mumbai</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-medium mb-3">Need immediate help?</h4>
            <button className="w-full py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Request a callback
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-medium mb-3">Schedule a meeting</h4>
            <button className="w-full py-2.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              Book a demo
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Hiring Section */}
      <section className="mt-16 bg-gray-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to take your hiring to the next level?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our advanced hiring solutions and tools designed to help you find the perfect candidates faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate('/advanced-hiring')}
            >
              View Advanced Hiring Solutions
            </button>
            <button 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
              onClick={() => navigate('/contact-sales')}
            >
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Candidate Matching</h3>
            <p className="text-gray-600">Our AI matches you with the most suitable candidates.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Bulk Hiring</h3>
            <p className="text-gray-600">Tools for hiring multiple candidates at once.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Track your hiring metrics and performance.</p>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-center text-lg font-medium text-gray-600 mb-8">
              Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
            </h3>
            
            {/* Logo Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex items-center">
                <div className="animate-marquee whitespace-nowrap">
                  {duplicatedCompanies.map((company, index) => (
                    <div key={index} className="inline-flex items-center justify-center mx-8">
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://via.placeholder.com/150?text=Logo+Not+Found";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;