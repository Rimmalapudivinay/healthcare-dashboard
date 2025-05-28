import React from 'react';

const ActivityFeed = () => {
  const chartData = [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 30 },
    { day: 'Thu', value: 60 },
    { day: 'Fri', value: 35 },
    { day: 'Sat', value: 50 },
    { day: 'Sun', value: 25 }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>
      
      <div className="flex items-end space-x-2 h-32">
        {chartData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-600 rounded-t"
              style={{ height: `${item.value}%` }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;