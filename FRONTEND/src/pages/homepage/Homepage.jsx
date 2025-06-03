// src/pages/homepage/Homepage.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import MessagesContainer from '../../components/Messages/MessagesContainer';

const Homepage = () => {
  return (
    <div className="flex flex-row h-[calc(100vh-2rem)] w-full max-w-[1200px] mx-auto bg-gray-900 border border-blue-400 rounded-lg shadow-lg">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Homepage;