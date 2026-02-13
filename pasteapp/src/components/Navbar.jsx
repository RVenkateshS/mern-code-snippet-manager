import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  
  // This styles the active link vs the inactive link
  const navbarStyles = ({ isActive }) => {
    return `font-medium text-lg transition-all duration-300 relative group ${
      isActive 
        ? "text-blue-400"  // Color when active
        : "text-gray-300 hover:text-white" // Color when inactive
    }`;
  };

  return (
    <div className='w-full h-[65px] bg-gray-900 shadow-xl flex justify-between items-center px-10 border-b border-gray-800 sticky top-0 z-50'>
        
        {/* --- 1. THE LOGO SECTION --- */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
            {/* Unique SVG Logo: "Code-Board" */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <path d="m9 14 2 2 4-4"/>
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                </svg>
            </div>
            {/* Logo Text */}
            <h1 className='text-2xl font-bold tracking-wide text-white'>
                Paste<span className='text-blue-500'>App</span>
            </h1>
        </div>

        {/* --- 2. THE NAVIGATION LINKS --- */}
        <div className='flex gap-8'>
            <NavLink to="/" className={navbarStyles}>
                {({ isActive }) => (
                    <>
                        Home
                        {/* Underline Animation */}
                        <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-400 rounded-full transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                    </>
                )}
            </NavLink>

            <NavLink to="/pastes" className={navbarStyles}>
                 {({ isActive }) => (
                    <>
                        All Pastes
                         {/* Underline Animation */}
                        <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-400 rounded-full transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                    </>
                )}
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar