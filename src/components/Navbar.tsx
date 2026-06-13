import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
      const [menuOpen, setMenuOpen] = React.useState(false);
      const navigate = useNavigate();

    return (
         <>
         <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b text-white border-slate-800">
            <Link to="/" className="flex text-2xl font-bold bg-gradient-to-r from-[#CB52D4] to-indigo-600 bg-clip-text text-transparent">
                <img src='/src/assets/logo.png' alt="MorpSpark Logo" className="h-8 w-8 mr-2" />
                MorpSpark
            </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500">
            <Link to="/" className="hover:text-slate-300 transition">Home</Link>
            <Link to="/projects" className="hover:text-slate-300 transition">My Projects</Link>
            <Link to="/community" className="hover:text-slate-300 transition">Community</Link>
            <Link to="/pricing" className="hover:text-slate-300 transition">Pricing</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            
            <button onClick={() => navigate('/auth/signin')} className="px-6 py-2 bg-indigo-600 active:scale-95 hover:bg-indigo-700 transition rounded">
              Get started
            </button>
          </div>

          <button id="open-menu" className="md:hidden active:scale-90 transition" onClick={() => setMenuOpen(true)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          </button>
        </nav>

         {menuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300">

            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>My Projects</Link>
            <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <div className="md:flex items-center gap-3">
            
            <button onClick={() => navigate('/auth/signin')} className="px-6 py-2 bg-indigo-600 active:scale-95 hover:bg-indigo-700 transition rounded">
              Get started
            </button>
          </div>
            <button className="px-13 py-2 bg-red-600 active:scale-95 hover:bg-red-700 transition rounded" onClick={() => setMenuOpen(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        )}
                  <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />
         </>
      )   
};

export default Navbar;