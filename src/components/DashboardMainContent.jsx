import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <AnatomySection />
        </div>
        <div className="col-span-4">
          <CalendarView />
        </div>
        <div className="col-span-8">
          <UpcomingSchedule />
        </div>
        <div className="col-span-4">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;