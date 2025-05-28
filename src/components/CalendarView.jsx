import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mockData } from '../data/mockData';

const CalendarView = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">October 2021</h3>
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-4 h-4 text-gray-400 cursor-pointer" />
          <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map(day => (
          <div key={day} className="text-center text-xs text-gray-500 py-2">
            {day}
          </div>
        ))}
        {dates.map(date => (
          <div key={date} className="text-center p-2">
            <div className="text-sm font-medium">{date}</div>
            <div className="space-y-1 mt-1">
              {mockData.calendarData.appointments[date]?.map((time, index) => (
                <div key={index} className="text-xs bg-blue-100 text-blue-600 px-1 py-0.5 rounded">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <span>🦷</span>
            <span className="font-medium">Dentist</span>
          </div>
          <div className="text-sm">09:00-11:00</div>
          <div className="text-xs opacity-75">Dr. Cameron Williamson</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <span>💪</span>
            <span className="font-medium">Physiotherapy Appointment</span>
          </div>
          <div className="text-sm">11:00-12:00</div>
          <div className="text-xs text-gray-600">Dr. Kevin Djores</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;