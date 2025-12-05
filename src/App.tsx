import { useState } from "react";
import { BottomNav } from "./components/BottomNav";
import { HomeScreen } from "./components/screens/HomeScreen";
import { StatsScreen } from "./components/screens/StatsScreen";
import { ActivityScreen } from "./components/screens/ActivityScreen";
import { PlayerScreen } from "./components/screens/PlayerScreen";
import { User } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  // "player" is a special state that overrides tabs
  const [showPlayer, setShowPlayer] = useState(false);

  const renderScreen = () => {
    if (showPlayer) {
      return <PlayerScreen onBack={() => setShowPlayer(false)} />;
    }

    switch (currentTab) {
      case "home":
        return <HomeScreen onNavigate={(screen) => {
          if (screen === "player") setShowPlayer(true);
        }} />;
      case "stats":
        return <StatsScreen />;
      case "activity":
        return <ActivityScreen />;
      case "profile":
        return (
          <div className="p-6 text-white flex flex-col items-center justify-center h-full min-h-screen">
             <div className="w-24 h-24 rounded-full bg-[#1c1c1e] flex items-center justify-center mb-4 border border-white/10">
                <User size={40} className="text-gray-400" />
             </div>
             <h2 className="text-2xl font-serif mb-2">Guest User</h2>
             <p className="text-gray-500 text-center max-w-xs">
               Sign up to track your progress and save your favorite meditations.
             </p>
             <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-medium">
               Create Account
             </button>
          </div>
        );
      default:
        return <HomeScreen onNavigate={() => {}} />;
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full text-white font-sans overflow-x-hidden">
      {/* Mobile Container Wrapper */}
      <div className="mx-auto max-w-md bg-[#0a0a0a] min-h-screen relative shadow-2xl">
        {renderScreen()}
        
        {!showPlayer && (
          <BottomNav 
            currentTab={currentTab} 
            onTabChange={setCurrentTab} 
          />
        )}
      </div>
    </div>
  );
}
