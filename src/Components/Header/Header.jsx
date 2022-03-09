import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Header({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  useEffect(() => {
    // if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    //   document.body.classList.add("dark");
      
    // } else {
    //   document.body.classList.remove("dark");
      
    // }

    if (darkMode) {
      localStorage.theme = "dark";
      document.body.classList.add("dark");
  
    } else {
      localStorage.theme = "light";
      document.body.classList.remove("dark");
    }

    // Whenever the user explicitly chooses dark mode
  }, [darkMode]);

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className='sticky top-0 bg-primary  z-10 shadow-elevated '>
      <div className='px-4 sm:px-6 lg:px-8 '>
        <div className='flex items-center justify-between h-16 -mb-px'>
          {/* Header: Left side */}
          <div className='flex'>
            {/* Hamburger button */}
            <button
              className='text-slate-500 hover:text-slate-600 lg:hidden'
              aria-controls='sidebar'
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className='sr-only'>Open sidebar</span>
              <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <rect x='4' y='5' width='16' height='2' />
                <rect x='4' y='11' width='16' height='2' />
                <rect x='4' y='17' width='16' height='2' />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className='flex items-center space-x-3'>
            <div className={`scale-75 mr-4`}>
              <input type='checkbox' checked = {darkMode} className='checkbox' id='checkbox' onChange={() => setDarkMode(!darkMode)} />
              <label htmlFor='checkbox' className='label'>
                <div className='ball'></div>
              </label>
            </div>
            <hr className='w-px h-6 bg-slate-200 mx-3' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
