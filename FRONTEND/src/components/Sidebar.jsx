// src/components/Sidebar.jsx
import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[40%] min-w-[120px] max-w-[200px] sm:w-[30%] md:w-[25%] lg:w-[20%] bg-gray-800 border-r border-slate-500 p-2 sm:p-4 overflow-y-auto">
      <SearchInput />
      <div className="divider px-2 sm:px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;