import axios from "axios";
import { useState } from "react";
import { MdOutlineSend } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";

const AiTutor = () => {
  const [Query, SetQuery] = useState<string>("");
  const [Response, SetResponse] = useState<string>("");

  const askAi = async () => {
    if (!Query.trim()) return;

    try {
      const res = await axios.get("http://localhost:8081/api/ai/ask", {
        params: { question: Query },
      });
      SetResponse(res.data);
    } catch (err) {
      console.error(err);
      SetResponse("❌ Sorry, I couldn’t connect to the AI tutor. Please try again.");
    }

    SetQuery("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-16">
      <div className="flex flex-col justify-between h-[90vh] w-full md:w-2/4 bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 transition-colors duration-300">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-6">
          AI Tutor
        </h1>

        {/* Response Section */}
        <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner transition-colors duration-300">
          {Response ? (
            <div className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed">
              <div className="flex items-center gap-2 mb-2">
                <FaRobot className="text-2xl text-blue-700 dark:text-blue-400" />
                <strong>AI says:</strong>
              </div>
              <p className="whitespace-pre-line">{Response}</p>
            </div>
          ) : (
            <p className="text-gray-400 dark:text-gray-300 text-center italic">
              Ask something to start chatting with your AI tutor...
            </p>
          )}
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-3 bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-full shadow-lg transition-colors duration-300">
          <textarea
            className="flex-grow bg-white dark:bg-gray-800 border-none rounded-full ps-4 py-2 text-lg resize-none focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            rows={1}
            placeholder="Ask me anything..."
            value={Query}
            onChange={(e) => SetQuery(e.target.value)}
          />
          <button
            onClick={askAi}
            className="text-3xl text-blue-800 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition"
          >
            <MdOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiTutor;
