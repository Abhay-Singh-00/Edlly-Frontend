import React from "react";
import { 
  HomeIcon, 
  CalendarIcon, 
  CurrencyDollarIcon, 
  ChatBubbleBottomCenterTextIcon,
  CogIcon 
} from "@heroicons/react/24/outline";

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

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>
          Edlly Tutor
        </div>
        <div className="text-xs text-gray-500 mt-1">Professional Dashboard</div>
      </div>

      <div className="p-6 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="tutor"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">Abhay Singh</div>
            <div className="text-xs text-gray-500">Gold Tutor</div>
          </div>
        </div>

        <div className="mt-6">
          <MenuItem icon={<HomeIcon className="w-5 h-5 text-gray-500" />} label="Dashboard" />
          <MenuItem icon={<CalendarIcon className="w-5 h-5 text-gray-500" />} label="Live Classes" />
          <MenuItem icon={< ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-gray-500" />} label="Student Questions" />
          <MenuItem icon={<CurrencyDollarIcon className="w-5 h-5 text-gray-500" />} label="Earnings" />
          <MenuItem icon={<CogIcon className="w-5 h-5 text-gray-500" />} label="Settings" />
        </div>
      </div>

      <div className="mt-auto p-6 border-t border-gray-100">
        <button className="w-full bg-[var(--primary)] text-white py-2 rounded-md font-medium">
          Create New Session
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
