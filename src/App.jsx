import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;