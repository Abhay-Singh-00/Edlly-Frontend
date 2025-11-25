import React from "react";

const LearningPath: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <h3 className="text-lg font-semibold">Learning Path</h3>

      <ul className="mt-4 space-y-2 text-sm">
        <li>✔ Algebra Basics</li>
        <li>✔ Linear Equations</li>
        <li>➤ Quadratic Equations (Next)</li>
        <li>● Progressing to: Graphing</li>
      </ul>

      <p className="mt-4 text-gray-500 text-sm">
        Classes updated as per your performance and speed.
      </p>
    </div>
  );
};

export default LearningPath;
