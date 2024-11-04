// NewsletterSignup.jsx
import React from 'react';

function NewsletterSignup() {
  return (
    <div className="text-center py-16">
    
     
      {/* Main Content */}
      <h2 className="text-4xl font-extrabold text-black mb-4">SIGN UP TO OUR NEWSLETTER</h2>
      <p className="text-lg text-gray-700 mb-8">Receive special offers and first look at new products.</p>

      {/* Email Input and Button */}
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="email@example.com"
          className="w-64 sm:w-80 md:w-96 py-3 px-4 border-2 border-black rounded-l-full outline-none"
        />
          <button 
          className="bg-white text-black  font-bold py-3 px-4 -mt-2 rounded-r-full border-2 border-black transition-all duration-200 ease-in-out transform hover:translate-y-1"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)', 
            transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)'}
        >
          
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default NewsletterSignup;
