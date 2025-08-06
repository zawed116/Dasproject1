import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2">
          <div className="text-center md:text-left mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Join over 7 Lakhs+ employers.</h1>
            <p className="text-lg text-gray-600">We're happy to help.</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 mb-8">
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li>Submit this simple form.</li>
              <li>A dedicated talent executive will get back to you shortly.</li>
              <li>We'll partner with you to talk through your business needs and see how apna can help.</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white p-4 rounded shadow-sm">
              <span className="font-medium">Teleperformance</span>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="font-medium">Tech</div>
              <div className="font-medium">Mahindra</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <span className="font-medium">Flipkart</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Get in touch with us</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name*</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Email*</label>
                <input
                  type="email"
                  placeholder="jsmegbdesign.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number*</label>
                <input
                  type="tel"
                  placeholder="Enter 10 digit mobile number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  pattern="[0-9]{10}"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your role*</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">Select...</option>
                  <option value="hr">HR/Recruiter</option>
                  <option value="manager">Hiring Manager</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company name*</label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company size*</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">Select...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 mt-2"
              >
                Submit
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By clicking "Submit" I agree to the Terms of Use and the Privacy Statement.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;