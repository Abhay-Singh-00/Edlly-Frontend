import React from "react";
import Sidebar from "../TutorComponents/Sidebar";
import Header from "../TutorComponents/Header";
import StatCard from "../TutorComponents/StatCard";
import LiveClasses from "../TutorComponents/LiveClasses";
import QuestionQueue from "../TutorComponents/QuestionQueue";
import Earnings from "../TutorComponents/Earnings";
import AIAssistant from "../TutorComponents/AiAssistant";

const TutorDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 overflow-auto">

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatCard title="Classes Conducted" value="42" color="blue" />
            <StatCard title="Questions Answered" value="187" color="green" />
            <StatCard title="Rank Level" value="Gold" color="yellow" />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <LiveClasses />
              <Earnings />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <QuestionQueue />
              <AIAssistant />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TutorDashboard;
