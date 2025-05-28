import React from 'react';

const HealthStatusCard = ({ icon, title, status, color }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium text-blue-800">{title}</h4>
        <p className="text-xs text-gray-500">{status}</p>
      </div>
      <div className={`w-2 h-8 rounded-full ${color}`}></div>
    </div>
  );
};

export default HealthStatusCard;