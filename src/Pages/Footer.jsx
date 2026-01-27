import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 flex ">
        <div className="container mx-auto font-sans-serif font-thin text-2xl flex ">
            <p className="text-sm">&copy; {new Date().getFullYear()}  Jasmine Zuri - All rights reserved.</p>
            <p className="ml-auto text-sm">
                <ul className="flex gap-4">
                    <a href="contactpage" className="hover:underline mr-4">Contact Me</a>
                   
                </ul>
            </p>
             <a href="Navbar" className="ml-10 text-sm hover:underline">Back to Top</a>
        </div>
        
    </footer>
  )
}

export default Footer