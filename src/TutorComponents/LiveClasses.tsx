import React from "react";

interface Session {
  id: number;
  title: string;
  time: string;
  students: number;
  live: boolean;
}

const sessions: Session[] = [
  { id: 1, title: "Algebra - Grade 10", time: "Today, 3:00 PM", students: 12, live: false },
  { id: 2, title: "React Basics", time: "Tomorrow, 6:00 PM", students: 28, live: false },
];

const LiveClasses: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Upcoming Live Classes</h3>
        <button className="text-sm text-[var(--primary)] border border-[var(--primary)] px-3 py-1 rounded">
          View Calendar
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-between p-3 border rounded hover:shadow-sm"
          >
            <div>
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-gray-500">
                {s.time} • {s.students} students
              </div>
            </div>

            <button className="bg-[var(--primary)] text-white px-3 py-1 rounded-md">
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveClasses;
