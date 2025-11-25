import React from "react";

interface Props {
  title: string;
  value: string | number;
  color?: "blue" | "green" | "yellow";
}

const LearnerStatCard: React.FC<Props> = ({ title, value, color = "blue" }) => {
  const colorClass =
    color === "blue"
      ? "text-blue-600"
      : color === "green"
      ? "text-green-600"
      : "text-yellow-600";

  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
    </div>
  );
};

export default LearnerStatCard;
