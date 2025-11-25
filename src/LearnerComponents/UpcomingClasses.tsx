import React from "react";

const classes = [
  { id: 1, subject: "Algebra - Grade 10", time: "Today, 5:00 PM" },
  { id: 2, subject: "Science - Heat & Temperature", time: "Tomorrow, 4:30 PM" },
];

const UpcomingClasses: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <h3 className="text-lg font-semibold">Upcoming Classes</h3>

      <div className="mt-4 space-y-3">
        {classes.map(cls => (
          <div key={cls.id} className="flex justify-between p-3 border rounded hover:bg-gray-50">
            <div>
              <div className="font-medium">{cls.subject}</div>
              <div className="text-sm text-gray-500">{cls.time}</div>
            </div>
            <button className="text-[var(--primary)]">Join</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;
