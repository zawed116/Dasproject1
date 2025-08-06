import React from 'react';

const BlogPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10 flex items-center">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="mx-2">/</span>
        <span className="text-blue-700 font-medium">Hiring Platform</span>
      </div>

      {/* Hero Section with Image Left and Content Right */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="../../public/logo/blog.jpg" // Replace with your image path
            alt="Recruitment Intelligence"
            className="w-full h-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <article className="-mt-9">
            <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
              Trends From Early AI<br />
              Adoption in Recruitment<br />
              Industry
            </h3>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              From writing computer code to creating jokes, it seems like each day there is a new way to use AI. While some apps are...
            </p>
            <div className="flex items-center text-gray-500">
              <span className="font-medium text-gray-700">Apna</span>
              <span className="mx-2">-</span>
              <span className="text-gray-500">March 25, 2024</span>
            </div>
          </article>
        </div>
      </div>

      {/* New Featured Articles Section */}
      <section className="mb-20">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src="../../public/logo/Ai-Requriment.jpg" 
              alt="AI in Recruitment" 
              className="w-full h-50 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How AI is Transforming Recruitment</h3>
              <p className="text-gray-600 mb-4">Exploring the impact of artificial intelligence on modern hiring practices.</p>
              <div className="flex items-center text-sm text-gray-500">
              
              </div>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src="../../public/logo/Candidate-Experience.jpg" 
              alt="Candidate Experience" 
              className="w-full h-50 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Improving Candidate Experience</h3>
              <p className="text-gray-600 mb-4">Best practices to enhance your hiring process and attract top talent.</p>
              <div className="flex items-center text-sm text-gray-500">

              </div>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src="../../public/logo/Remote-Work.jpg" 
              alt="Remote Work" 
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Future of Remote Hiring</h3>
              <p className="text-gray-600 mb-4">How companies are adapting their recruitment strategies for remote work.</p>
              <div className="flex items-center text-sm text-gray-500">
             
              
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          
        </div>



        

        <div className="max-w-7xl mx-auto px-5 py-10 font-sans text-gray-800">
  {/* Main Horizontal Container */}
  <div className="flex flex-col md:flex-row gap-8">
    
    {/* Left Column - apna India */}
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        {/* <h1 className="text-2xl font-bold text-blue-500 mb-4">apna Advantage</h1> */}
        {/* <h2 className="text-xl font-semibold mb-6">The apna Advantage</h2>   */}
        
        <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src="https://apna.co/career-central/wp-content/uploads/2024/01/apna-1024x574.png" 
            alt="apna India" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="font-bold text-lg mb-2">Hiring Advisor</h3>
        <h3 className="font-bold text-blue-600 mb-4">apna India</h3>
        
        <h4 className="text-xl font-semibold text-blue-600 mb-2">
          Apna App's Hiring Solution
        </h4>
        <p className="mb-4">
          Apna is a social platform for skilled and semiskilled job seekers that provides real job opportunities and professional networking opportunities to job seekers, as...
          We deliver the best hiring solutions through our job posting platform to recruiters, businesseattract talent by following a few simple steps and can avail of the following services 
        </p>
      
      </div>
    </div>

    {/* Middle Column - Hiring Platform */}
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        {/* <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Step by Step Tutorial
        </h2> */}
        
        <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src="https://apna.co/career-central/wp-content/uploads/2024/03/shutterstock_1431767984-4-1024x697.jpg" 
            alt="Hiring Platform" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="font-bold text-blue-600 mb-4">Hiring Platform</h3>
        
        <h4 className="text-xl font-semibold text-blue-600 mb-2">
          Revolutionize Your Hiring Process with apna
        </h4>
        <p className="mb-4">
          Are you tired of sifting through stacks of resumes and spending countless hours on the hiring process? In a world where every click matters...
          In a world where traditional recruitment methods often leave employers navigating a maze of resumes and endless interviews, every recruiter dreams of having a magic wand to unlock unparalleled opportunities. Well, we’ve got something better than magic: enter apna.co
        </p>
       
      </div>
    </div>

    {/* Right Column - Value Proposition */}
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src="https://blogs.apna.co/content/images/size/w1000/2023/08/shutterstock_2139960475.jpg" 
            alt="Value Proposition" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h4 className="text-xl font-semibold text-blue-600 mb-2">
          apna's Value Proposition for Employers
        </h4>
        <p className="mb-4">
          In a world where traditional recruitment methods often leave employers navigating a maze of resumes and endless interviews, every recruiter dreams of having a...In a world where traditional recruitment methods often leave employers navigating a maze of resumes and endless interviews, every recruiter dreams of having a magic wand to unlock unparalleled opportunities. Well, we’ve got something better than magic: enter apna.co
        </p>
        
        
        {/* Contact Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
         
          <div className="space-y-2">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>









<div className="max-w-7xl mx-auto px-5 py-10 font-sans text-gray-800">
  {/* Main Horizontal Container */}
  <div className="flex flex-col md:flex-row gap-2">
    
    {/* Left Column - apna India */}
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        {/* <h1 className="text-2xl font-bold text-blue-500 mb-4">apna Advantage</h1> */}
        {/* <h2 className="text-xl font-semibold mb-6">The apna Advantage</h2>   */}
        
        <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src="https://blogs.apna.co/content/images/size/w1000/2023/08/shutterstock_2166736049.jpg  " 
            alt="apna India" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* <h3 className="font-bold text-lg mb-2">Hiring Advisor</h3>
        <h3 className="font-bold text-blue-600 mb-4">apna India</h3> */}
        
        <h4 className="text-xl font-semibold text-blue-600 mb-2">
        Choosing a Hiring Partner? Top Considerations for a Made in Heaven Collaboration (Part 2)
        </h4>
        <p className="mb-4">
        In the fast-paced world of HR recruitment, finding your perfect hiring partner is like searching for that elusive ‘made in heaven’ connection. It's not...
        </p>
      
      </div>
    </div>

    {/* Middle Column - Hiring Platform */}
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        {/* <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Step by Step Tutorial
        </h2> */}
        
        <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src="https://blogs.apna.co/content/images/size/w1000/2023/08/businessman-blurred-background-with-people-connection-icon-business-leadership-chart.jpg" 
            alt="Hiring Platform" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="font-bold text-blue-600 mb-4">Hiring Platform</h3>
        
        <h4 className="text-xl font-semibold text-blue-600 mb-2">
        Choosing a Hiring Partner? Top Considerations for a Made in Heaven Collaboration (Part 1)
        </h4>
        <p className="mb-4">
        In the intricate dance of recruitment, finding the perfect partner to tango with your hiring needs is very crucial. It's akin to seeking a..
        </p>
       
      </div>
    </div>

    {/* Right Column - Value Proposition */}
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src="https://blogs.apna.co/content/images/size/w1000/2023/08/shutterstock_2290265199.jpg" 
            alt="Value Proposition" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h4 className="text-xl font-semibold text-blue-600 mb-2">
        From Searching to Snaring: Converting Candidates on Job Portals
        </h4>
        <p className="mb-4">
        Recruiters would agree that navigating the virtual corridors of job portals in search of the perfect candidate is akin to exploring a captivating labyrinth....
        </p>
        
        
        {/* Contact Section */}
        <div>
         
          <div className="space-y-2">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






      </section>
      

      {/* Additional content can be added here */}
    </div>
  );
};

export default BlogPage;