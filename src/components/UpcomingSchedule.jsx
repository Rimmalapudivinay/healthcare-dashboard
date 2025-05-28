import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { mockData } from '../data/mockData';

const UpcomingSchedule = () => {
  const thursdayAppts = mockData.appointments.filter(apt => apt.day === "Thursday");
  const saturdayAppts = mockData.appointments.filter(apt => apt.day === "Saturday");
  
  return (
    <div className="bg-red rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 mb-6">The Upcoming Schedule</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm text-yellow-600 mb-3">On Thursday</h4>
          <div className="grid grid-cols-2 gap-3">
            {thursdayAppts.map(appointment => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm text-gray-600 mb-3">On Saturday</h4>
          <div className="grid grid-cols-2 gap-3">
            {saturdayAppts.map(appointment => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;