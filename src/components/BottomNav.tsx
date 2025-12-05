import { Home, BarChart2, PieChart, User, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ currentTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "stats", icon: BarChart2, label: "Stats" },
    { id: "activity", icon: PieChart, label: "Activity" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1c1c1e]/90 backdrop-blur-md border-t border-white/10 px-6 py-4 z-50 pb-8">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
                isActive ? "text-[#a855f7]" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <tab.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="w-1 h-1 rounded-full bg-[#a855f7] mt-1"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
