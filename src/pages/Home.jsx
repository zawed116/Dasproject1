import { Link } from 'react-router-dom';

const Home = () => {
  // Company logos data
  const companies = [
    { name: 'Aditya Birla Capital', logo: 'https://logo.clearbit.com/adityabirlacapital.com' },
    { name: 'Shoppers Stop', logo: 'https://logo.clearbit.com/shoppersstop.com' },
    { name: 'Tech Mahindra', logo: 'https://logo.clearbit.com/techmahindra.com' },
    { name: 'Teleperformance', logo: 'https://logo.clearbit.com/teleperformance.com' },
    { name: 'Reliance', logo: 'https://logo.clearbit.com/ril.com' },
    { name: 'Tata', logo: 'https://logo.clearbit.com/tata.com' },
    { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
    { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com' },
    { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com' },
    { name: 'ICICI Bank', logo: 'https://logo.clearbit.com/icicibank.com' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.in' },
    { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
    { name: 'Zomato', logo: 'https://logo.clearbit.com/zomato.com' },
    { name: 'Swiggy', logo: 'https://logo.clearbit.com/swiggy.com' },
    { name: 'Byju\'s', logo: 'https://logo.clearbit.com/byjus.com' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hire top talent in 48 hours with apna.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your recruitment with AI-driven precision. Single solution from Fresher to experienced hiring.
              </p>
              <button className="flex items-center text-blue-600 font-medium">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch video
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's get started</h2>
              <p className="text-gray-600 mb-6">Hire top talent faster with apna</p>
              
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter 10 digit mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 mb-4">
                Continue
              </button>
              
              <div className="text-center mb-4">
                <span className="text-gray-500">OR</span>
              </div>
              
              <Link to="/enterprise-login" className="text-blue-600 font-medium block text-center">
                Click here for Enterprise login
              </Link>
              
              <p className="text-xs text-gray-500 mt-6 text-center">
                By clicking continue, you agree to the apna <Link to="/terms" className="text-blue-600">Terms of service</Link> & <Link to="/privacy" className="text-blue-600">Privacy policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for hiring
            </h2>
            <p className="text-lg text-gray-600">
              A single platform for your hiring needs
            </p>
          </div>

          {/* Scrolling Company Logos */}
          <div className="relative overflow-hidden py-4">
            <div className="flex space-x-10 animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center">
                  <div className="h-16 w-40 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      title={company.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">6 Crores+</h3>
              <p className="text-gray-600">Qualified candidates</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">7 Lakhs+</h3>
              <p className="text-gray-600">Employers use apna</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">900+</h3>
              <p className="text-gray-600">Available cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Job Posting Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SMART JOB POSTING</h2>
            <p className="text-xl text-gray-600">
              Get applications from relevant, high-intent candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Job Filters & Assessments</h3>
              <p className="text-gray-600">
                Use advanced filters and automated assessments to attract the most relevant candidates.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart AI Lead Management</h3>
              <p className="text-gray-600">
                Our AI system prioritizes and manages leads efficiently for better conversion.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inbound Calls & WhatsApp Alerts</h3>
              <p className="text-gray-600">
                Instant notifications and communication channels for quick candidate engagement.
              </p>
            </div>
          </div>

          {/* Job Listing Example */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Software developer</h3>
                <div className="flex items-center mt-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Active
                  </span>
                  <span className="ml-3 text-gray-600">Raj Residency, Bengaluru, Karnataka</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">Posted on Nov 30, 2023</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">45,456</p>
                <p className="text-gray-600">Database Matches</p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="text-blue-600 font-medium hover:text-blue-800">
                View Details
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
                Contact Candidates
              </button>
            </div>
          </div>
        </div>
        
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Unlock opportunities, <span className="text-blue-600">one challenge at a time</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Transform your hiring process with our comprehensive solutions
      </p>
    </div>

    {/* Three Column Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Attract Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Attract</h2>
        </div>
        <p className="text-gray-600">
          Showcase your culture and values through a dedicated microsite. Reach 20 Mn+ college students across 22K+ colleges with apna.
        </p>
        <div className="mt-6">
          <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Evaluate Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Evaluate</h2>
        </div>
        <p className="text-gray-600">
          Advanced assessment tools to identify the best candidates. Our AI-powered system evaluates skills, culture fit, and potential.
        </p>
        <div className="mt-6">
          <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hire Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Hire</h2>
        </div>
        <p className="text-gray-600">
          Streamlined hiring process with automated interviews, document verification, and offer management. Hire faster with confidence.
        </p>
        <div className="mt-6">
          <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
      {/* Left Column - Features List */}
      <div className="mb-12 lg:mb-0">
        <div className="space-y-8">
          {/* Feature Item 1 */}
          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">View org hiring reports</h3>
              <p className="text-blue-200">Track and analyze your organization's hiring performance</p>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Check if you have sufficient credits</h3>
              <p className="text-blue-200">Monitor your credit balance and usage in real-time</p>
            </div>
          </div>

          {/* Feature Item 3 */}
          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Configure usage limits</h3>
              <p className="text-blue-200">Set and manage spending limits for your team</p>
            </div>
          </div>

          {/* Feature Item 4 */}
          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">When you add your team</h3>
              <p className="text-blue-200">Collaborate seamlessly with your entire organization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Enterprise Info */}
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
        <div className="mb-6">
          <span className="inline-block bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            APNA ENTERPRISE
          </span>
          <h2 className="text-3xl font-bold mb-4">Performance and productivity for every level of your enterprise</h2>
          <p className="text-blue-100 text-lg">
            Unleash your full potential with tailor-made Enterprise-grade features that help you stay secure, compliant, and on-brand.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
            Contact sales
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why hire from <span className="text-blue-600">apna</span>?
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From startups to SMEs to established enterprises, Apna revolutionizes the way businesses find high-quality talent quickly & effortlessly.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Stat 1 - New Candidates */}
      <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl font-bold text-blue-600 mb-3">
          <span className="counter">5</span> Lakhs+
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">New candidates join apna every month</h3>
      </div>

      {/* Stat 2 - Job Categories */}
      <div className="bg-indigo-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl font-bold text-indigo-600 mb-3">
          <span className="counter">200</span> +
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Job categories to publish your job</h3>
      </div>

      {/* Stat 3 - Walk-ins */}
      <div className="bg-purple-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl font-bold text-purple-600 mb-3">
          Upto <span className="counter">5</span> X
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">More walk-ins than competitors</h3>
      </div>

      {/* Stat 4 - Qualified Candidates */}
      <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl font-bold text-green-600 mb-3">
          <span className="counter">80</span> %
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Businesses get qualified candidates within 24 hrs</h3>
      </div>
    </div>
  </div>
</div>





<div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Logo Column */}
      <div className="col-span-2 md:col-span-1">
        <div className="text-2xl font-bold mb-4">apna</div>
      </div>

      {/* Product Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">PRODUCT</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Job posting</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contests</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Database</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Enterprise</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
        </ul>
      </div>

      {/* Get to Know Us Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">GET TO KNOW US</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact support</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact sales</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Job seekers</a></li>
        </ul>
      </div>

      {/* Resources Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Apna help center</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Border */}
    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-400 text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} apna. All rights reserved.
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">Facebook</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">Instagram</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">Twitter</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>


      </section>

      {/* Add this to your global CSS or index.css */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default Home;