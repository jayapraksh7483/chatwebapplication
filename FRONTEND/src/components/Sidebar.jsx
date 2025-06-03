// Sidebar.jsx
import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-gray-800 sm:border-r-0 sm:border-b sm:border-b-slate-500">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;