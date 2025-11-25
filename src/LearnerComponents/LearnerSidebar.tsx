import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const LearnerSidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>
          Edlly Learner
        </div>
        <div className="text-xs text-gray-500 mt-1">Dashboard</div>
      </div>

      <div className="p-6 flex flex-col gap-2">
        <NavLink to='/learner' className="flex gap-2"> <HomeIcon className="w-5 h-5 text-gray-500" /><span>Dashboard</span></NavLink>
        {/* <NavLink to='/learner' icon={} label="My Courses" /><BookOpenIcon className="w-5 h-5 text-gray-500" ></NavLink>
        <NavLink to='/' icon={<ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-gray-500" />} label="Ask Doubts" />
        <NavLink to='/' icon={<AcademicCapIcon className="w-5 h-5 text-gray-500" />} label="My Progress" /> */}
        <NavLink to='/learner/posts'  className="flex gap-2" ><UserCircleIcon className="w-5 h-5 text-gray-500" /><span>Post</span></NavLink>
        <NavLink to='/learner/profile'  className="flex gap-2" ><UserCircleIcon className="w-5 h-5 text-gray-500" /><span>Profile</span></NavLink>
      </div>
    </aside>
  );
};

export default LearnerSidebar;
