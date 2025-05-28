import React from 'react';
import {
  LayoutDashboard,
  Clock,
  Calendar,
  Users,
  BarChart3,
  MessageCircle,
  HelpCircle,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Clock, label: "History" },
    { icon: Calendar, label: "Calendar" },
    { icon: Users, label: "Appointments" },
    { icon: BarChart3, label: "Statistics" },
    { icon: BarChart3, label: "Tests" },
    { icon: MessageCircle, label: "Chat" },
    { icon: HelpCircle, label: "Support" },
    { icon: Settings, label: "Setting" }
  ];

  return (
    <aside className="bg-white w-64 h-screen border-r border-gray-100 p-6">
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-4">GENERAL</h3>
        <nav className="space-y-1">
          {menuItems.map(({ icon: Icon, label, active }, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                active 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
