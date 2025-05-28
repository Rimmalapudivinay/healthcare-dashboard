import React from 'react';
import HealthStatusCard from './HealthStatusCard';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        <span className="text-sm text-gray-500">This Week</span>
      </div>
      
      <div className="flex items-start space-x-8">
        <div className="relative">
          <div className="w-48 h-80 bg-gradient-to-b from-orange-100 to-green-100 rounded-full flex items-center justify-center">
            <div className="w-32 h-64 bg-gradient-to-b from-red-300 to-pink-400 rounded-full relative">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                ❤️ Healthy Heart
              </div>
              <div className="absolute bottom-16 -left-8 bg-cyan-400 text-white px-2 py-1 rounded text-xs">
                Healthy Log
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 flex-1">
          <HealthStatusCard 
            icon="🫁" 
            title="Lungs" 
            status="Check 16 Oct, 2021" 
            color="bg-red-500" 
          />
          <HealthStatusCard 
            icon="🦷" 
            title="Teeth" 
            status="Check 16 Oct, 2021" 
            color="bg-green-500" 
          />
          <HealthStatusCard 
            icon="🦴" 
            title="Bone" 
            status="Check 16 Oct, 2021" 
            color="bg-orange-500" 
          />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;