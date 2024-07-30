import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import logoDesktop from './assets/logoDesktop.png';
import logoMobile from './assets/logoMobile.png';

const Navbar = () => {
  const [active, setActive] = useState('My Booking');
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
              <div className="bg-white p-1 rounded">
                {isMobile ? (
                  <img src={logoMobile} alt="Logo" style={{ width: '25px' }} />
                ) : (
                  <img src={logoDesktop} alt="Logo" style={{ width: '150px' }} />
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-sm text-sm font-medium ${
                      active === item
                        ? 'text-turbo-blue border-b-4 border-turbo-blue'
                        : 'text-gray hover:text-gray'
                    }`}
                  >
                    {item}
                  </button>
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
