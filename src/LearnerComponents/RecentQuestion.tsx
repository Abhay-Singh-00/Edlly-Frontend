import React from "react";

const questions = [
  { id: 101, question: "Why do we use zero in decimals?", status: "Answered" },
  { id: 102, question: "Explain Newton's 3rd law", status: "Pending" },
];

const RecentQuestions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <h3 className="text-lg font-semibold">Recently Asked</h3>

      <div className="mt-4 space-y-3">
        {questions.map(q => (
          <div key={q.id} className="flex justify-between p-3 border rounded hover:bg-gray-50">
            <div>{q.question}</div>
            <div
              className={`px-2 rounded text-xs ${
                q.status === "Answered"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {q.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQuestions;
