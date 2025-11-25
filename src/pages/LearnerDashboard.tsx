import React from "react";
import LearnerSidebar from "../LearnerComponents/LearnerSidebar";
import LearnerHeader from "../LearnerComponents/LearnerHeader";
import LearnerStatCard from "../LearnerComponents/LearnerStatCards";
import UpcomingClasses from "../LearnerComponents/UpcomingClasses";
import LearningPath from "../LearnerComponents/LearningPath";
import RecentQuestions from "../LearnerComponents/RecentQuestion";
import AIAssistant from "../TutorComponents/AiAssistant";

const LearnerDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">

        <main className="p-6 overflow-hidden">
          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <LearnerStatCard title="Lessons Completed" value="28" color="blue" />
            <LearnerStatCard title="XP Earned" value="2,340" color="green" />
            <LearnerStatCard title="Rank" value="Silver" color="yellow" />
          </section>

          {/* Main UI */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <UpcomingClasses />
              <LearningPath />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <RecentQuestions />
              <AIAssistant />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LearnerDashboard;
