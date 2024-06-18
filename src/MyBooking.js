import React, { useState } from 'react';

const MyBooking = () => {
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const bookings = [
    {
      id: 'VIE-012GH012478D',
      status: 'PREPARE',
      updated: 'Nov 16, 2021 07:28 PM',
      origin: 'Ho Chi Minh City, Vietnam',
      destination: 'Salernitana Port City, Italy',
      arrival: 'November 20, 2021',
      category: 'Import'
    },
    {
      id: 'FRA-022D4356FD6X',
      status: 'ON THE WAY',
      updated: 'Nov 17, 2021 08:45 PM',
      origin: 'Le Parisiens Port, France',
      destination: 'Ho Chi Minh City, Vietnam',
      arrival: 'November 21, 2021',
      category: 'Import',
      extra: 'Store Door - Container Yard',
      voyage: 'Alexander Williamson (13378)'
    },
    {
      id: 'CHI-0145FG6DC65N',
      status: 'PREPARE',
      updated: 'Nov 18, 2021 09:32 PM',
      origin: 'Guangzhou Port, Chinese',
      destination: 'Tokyo City Airport, Japan',
      arrival: 'November 22, 2021',
      category: 'Import'
    },
    {
      id: 'VIE-016FCV6789FD',
      status: 'PREPARE',
      updated: 'Nov 19, 2021 09:48 PM',
      origin: 'Ho Chi Minh City, Vietnam',
      destination: 'Guangzhou Port, Chinese',
      arrival: 'November 23, 2021',
      category: 'Import'
    }
  ];

  const toggleExpand = (index) => {
    setExpandedBooking(expandedBooking === index ? null : index);
    setSelectedBooking(index);
  };

  return (
    <div className="font-sans bg-light-gray min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold text-black">My Booking</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything here"
                className="pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-turbo-blue font-thin"
              />
              <div className="absolute left-3 top-2.5 text-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a7 7 0 111.42-1.42l4.99 4.99a1 1 0 01-1.42 1.42l-4.99-4.99zM14 7a5 5 0 11-10 0 5 5 0 0110 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <button className="text-white font-thin p-3 bg-turbo-blue rounded-md flex items-center">
              On Progress
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 15z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          {bookings.map((booking, index) => (
            <div
              key={index}
              onClick={() => toggleExpand(index)}
              className={`cursor-pointer bg-white rounded-lg p-6 mb-6 ${selectedBooking === index ? 'border-2 border-turbo-blue' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold text-gray-700">{booking.id}</div>
                  <div
                    className={`px-3 py-1 w-28 rounded-full text-sm font-medium ${booking.status === 'PREPARE' ? 'bg-yellow text-white' : 'bg-turbo-blue text-white'}`}
                  >
                    {booking.status}
                  </div>
                  <div className="text-gray text-sm mt-2">Last update: {booking.updated}</div>
                </div>
                <div className="grid grid-cols-4 gap-4 flex-grow ml-4">
                  <div>
                    <div className="text-dark-gray font-normal text-sm">PORT OF LOADING (ORIGIN)</div>
                    <div className="text-black font-medium">{booking.origin}</div>
                  </div>
                  <div>
                    <div className="text-dark-gray font-normal text-sm">PORT OF DESTINATION</div>
                    <div className="text-black font-medium">{booking.destination}</div>
                  </div>
                  <div>
                    <div className="text-gray font-normal text-sm">ARRIVED DATE</div>
                    <div className="text-black font-medium">{booking.arrival}</div>
                  </div>
                  <div>
                    <div className="text-gray font-normal text-sm">CATEGORY</div>
                    <div className="text-black font-medium">{booking.category}</div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-turbo-blue border border-turbo-blue p-2 rounded-md font-semibold flex items-center"
                  >
                    VIEW DETAIL
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d={expandedBooking === index ? 'M5 10a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z' : 'M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z'}
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {expandedBooking === index && booking.extra && (
                <div className="text-sm text-turbo-blue mb-4">{booking.extra}</div>
              )}
              {expandedBooking === index && booking.voyage && (
                <div className="text-sm text-gray">Voyage Name: {booking.voyage}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
