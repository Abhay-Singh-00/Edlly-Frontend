import React from "react";

interface QuestionRow {
  id: number;
  title: string;
  student: string;
  date: string;
  status: "Pending" | "Answered";
}

const data: QuestionRow[] = [
  { id: 101, title: "Explain Newton's 2nd law", student: "Ravi", date: "2025-11-10", status: "Pending" },
  { id: 102, title: "Solve integration problem", student: "Anika", date: "2025-11-09", status: "Pending" },
  { id: 103, title: "How to optimize queries?", student: "Karan", date: "2025-11-08", status: "Answered" },
];

const QuestionQueue: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Student Questions Queue</h3>
        <div className="text-sm text-gray-500">Auto-synced • Saved to history</div>
      </div>

      <table className="w-full mt-4 table-auto">
        <thead className="text-left text-xs text-gray-500 border-b">
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">Question</th>
            <th className="py-2">Student</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="py-3 text-sm">{row.id}</td>
              <td className="py-3 text-sm font-medium">{row.title}</td>
              <td className="py-3 text-sm">{row.student}</td>
              <td className="py-3 text-sm">{row.date}</td>

              <td className="py-3 text-sm">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    row.status === "Answered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>

              <td className="py-3 text-sm">
                <button className="text-[var(--primary)] font-medium">Answer</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default QuestionQueue;
