import React from 'react';

const SimpleAppointmentCard = ({ appointment }) => {
  const getCardColor = (title) => {
    if (title.includes("Health")) return "bg-indigo-100";
    if (title.includes("Ophthalmologist")) return "bg-purple-100";
    if (title.includes("Cardiologist")) return "bg-red-100";
    if (title.includes("Neurologist")) return "bg-blue-100";
    return "bg-gray-100";
  };

  return (
    <div className={`p-3 rounded-lg ${getCardColor(appointment.title)}`}>
      <div className="flex items-start justify-between mb-2">
        <span className="text-lg">{appointment.icon}</span>
      </div>
      <h5 className="font-medium text-sm text-gray-800 mb-1">{appointment.title}</h5>
      <p className="text-xs text-gray-600">{appointment.time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;