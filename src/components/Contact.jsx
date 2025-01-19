import React from 'react';

function Contact() {
  return (
    <div className='w-full max-w-4xl mx-auto py-12 px-1 lg:px-4'>
      <h1 className='text-4xl font-bold text-white text-center mb-6'>Contact Us</h1>
      <form action="" className='bg-[#222222] p-6 rounded-lg shadow-lg'>
        <div className='flex flex-col gap-6'>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Enter your Name' 
            className='p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE]'
            required 
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter your Email' 
            className='p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE]'
            required 
          />
          <textarea 
            name="message" 
            id="message" 
            placeholder='Enter your Message' 
            className='p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE] h-32' 
            required 
          />
          <button 
            type="submit" 
            className='w-full p-3 mt-4 text-white bg-[#6200EE] rounded-full hover:bg-[#7B1EFF] transition-all duration-300'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
