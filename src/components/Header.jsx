import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { mockData } from '../data/mockData';

const Header = () => {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-cyan-400">
          Health<span className="text-gray-800">care.</span>
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-black-50 rounded-lg w-64 text-sm focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-blue-600 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <img
            src={mockData.user.avatar}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <button className="bg-cyan-400 text-white p-2 rounded-lg">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;