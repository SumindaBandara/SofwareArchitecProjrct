import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-black text-white py-10 pl-16 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0 pl-100">
        {/* Logo and Contact */}
        <div>
          <h2 className="text-xl font-bold mb-100">SiteLogo</h2>
          <h3 className="mb-4 text-lg">Contact Us</h3>
          <p>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
          <p className="mt-2">support@figma.com</p>
          <p className="mt-2">+1 800 854-36-80</p>
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