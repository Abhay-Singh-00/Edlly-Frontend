import React from "react";

const LearnerHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-20">
      <div>
        <h2 className="text-xl font-semibold">Welcome back</h2>
        <p className="text-sm text-gray-500">Keep learning, you're doing great!</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Notifications</div>
        <div className="w-10 h-10 rounded-full bg-gray-200" />
      </div>
    </header>
  );
};

export default LearnerHeader;
