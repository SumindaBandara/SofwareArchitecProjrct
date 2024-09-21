import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-black text-white py-10 pl-16 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0 pl-100">
        {/* Logo and Contact */}
        <div className='space-x-100'>
          <h2 className="text-xl font-bold mb-100">SiteLogo</h2>
          <h3 className="mb-4 text-lg text-left">   Contact Us</h3>

          <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
          <p >Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
          </div>
        
          <div class="flex items-center space-x-2 leading-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <p className="mt-2">support@figma.com</p>
          </div>

          <div class="flex items-center space-x-2 leading-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <p className="mt-2">+1 800 854-36-80</p>
          </div>
          
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fab fa-telegram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Landing Page</a></li>
            <li><a href="#" className="hover:underline">Popup Builder</a></li>
            <li><a href="#" className="hover:underline">Web-design</a></li>
            <li><a href="#" className="hover:underline">Content</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Academy</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Themes</a></li>
            <li><a href="#" className="hover:underline">Hosting</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Teams</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="flex justify-end mt-8 pr-4">
        <button className="bg-white text-black rounded-full p-2">
          &uarr;
        </button>
      </div>
    </footer>
    </div>
  )
}

export default Footer