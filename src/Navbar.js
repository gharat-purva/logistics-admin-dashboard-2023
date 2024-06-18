import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [active, setActive] = useState('My Booking');

  const handleNavClick = (navItem) => {
    setActive(navItem);
  };

  const navItems = [
    'Dashboard',
    'Manage Quote',
    'My Booking',
    'Tracking',
    'Report'
  ];

  return (
    <nav className="bg-white shadow font-sans">
      <div className="max-w-7xl p-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">
                <span className="text-turbo-blue">LOOGIS</span>
                <span className="text-orange">TICS</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-sm text-sm font-medium ${
                      active === item
                        ? 'text-turbo-blue border-b-4 border-turbo-blue'
                        : 'text-gray hover:text-gray'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <FontAwesomeIcon icon={faBell} className="text-gray text-xl" />
              <span className="absolute top-0 right-0 block h-2 w-2 bg-orange rounded-full ring-2 ring-white"></span>
            </div>
            <div className="ml-4 flex items-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://via.placeholder.com/32"
                alt="Profile"
              />
              <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-gray" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
