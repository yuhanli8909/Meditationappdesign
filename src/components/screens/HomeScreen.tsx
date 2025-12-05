import { Search, Bell, Cloud, Wind, Sun, Moon, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="p-6 pb-24 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
           <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
             <Search size={20} className="text-gray-300" />
           </button>
        </div>
        <div className="flex gap-3">
           <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
             <Bell size={20} className="text-gray-300" />
           </button>
        </div>
      </div>

      {/* Hero Card */}
      <div 
        className="relative overflow-hidden rounded-[32px] aspect-[4/5] group cursor-pointer bg-[#1a1a2e]"
        onClick={() => onNavigate("player")}
      >
        {/* Super Saturated Background Blobs - Opacity 100% */}
        <div className="absolute top-[0%] right-[-10%] w-[100%] h-[80%] bg-[#7c3aed] rounded-full blur-[80px] opacity-100 mix-blend-normal" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[90%] h-[70%] bg-[#2dd4bf] rounded-full blur-[80px] opacity-100 mix-blend-normal" />
        
        {/* Stronger dark gradient on the left to ensure text readability against fully opaque background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f11] via-[#0f0f11]/50 to-transparent z-0" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
          <div>
            <h1 className="text-4xl font-serif text-white leading-tight mb-2 drop-shadow-md">
              Guided<br />Meditation
            </h1>
            <p className="text-gray-200 font-medium">7 min</p>
          </div>

          <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black transition-transform group-hover:scale-110 shadow-lg shadow-black/20">
            <Play size={24} fill="black" className="ml-1" />
          </button>
        </div>
      </div>

      {/* New Releases */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-gray-400 text-sm uppercase tracking-wider font-medium">New Releases</h2>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl h-32 bg-[#1c1c1e] border border-white/5 flex items-center p-4 gap-4">
           <div className="absolute -left-4 top-0 bottom-0 w-2/3 bg-gradient-to-r from-[#a855f7]/50 to-transparent blur-2xl" />
           <div className="z-10 flex-1">
             <h3 className="text-2xl font-serif text-white mb-1">Relieve<br/>Stress</h3>
           </div>
           <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 z-10 flex-shrink-0 border-2 border-white/10">
             <ImageWithFallback 
               src="https://images.unsplash.com/photo-1730567008274-cf8e051902f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwc3VubGlnaHQlMjBuYXR1cmUlMjBjYWxtfGVufDF8fHx8MTc2NDA4MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
               alt="User"
               className="w-full h-full object-cover"
             />
           </div>
        </div>
      </div>

      {/* Category Icons Row */}
      <div className="flex justify-between px-2">
         {[
           { icon: Cloud, label: "Wind", color: "text-sky-400" },
           { icon: Wind, label: "Breathe", color: "text-teal-400" },
           { icon: Sun, label: "Meditate", color: "text-orange-400" },
           { icon: Moon, label: "Sleep", color: "text-indigo-400" },
         ].map((item, i) => (
           <div key={i} className="flex flex-col items-center gap-2">
             <div className="w-14 h-14 rounded-2xl bg-[#1c1c1e] flex items-center justify-center border border-white/5 shadow-lg">
               <item.icon className={item.color} size={24} />
             </div>
             <span className="text-xs text-gray-500">{item.label}</span>
           </div>
         ))}
      </div>

      {/* Categories Large Cards */}
      <div className="flex flex-col">
        <div className="h-40 rounded-tl-[32px] rounded-tr-[80px] bg-gradient-to-r from-[#d8b4fe] to-[#a855f7] p-6 relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-3xl font-serif text-[#2e1065]">Morning<br/>Meditations</h3>
           </div>
           <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
             <Sun size={120} className="text-white" />
           </div>
        </div>

        <div className="h-40 rounded-bl-[32px] rounded-br-[32px] rounded-tr-[80px] bg-gradient-to-r from-[#6ee7b7] to-[#2dd4bf] p-6 relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-3xl font-serif text-[#022c22]">Evening<br/>Meditations</h3>
           </div>
           <div className="absolute right-4 bottom-4 w-32 h-32 opacity-20">
             <Moon size={120} className="text-white" />
           </div>
        </div>
      </div>

      {/* Journeys */}
      <div>
        <h2 className="text-2xl font-serif text-white mb-4">Journeys</h2>
        <div className="relative h-64 rounded-[32px] overflow-hidden group cursor-pointer" onClick={() => onNavigate("player")}>
           <ImageWithFallback 
             src="https://images.unsplash.com/photo-1761077206505-857f082160a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMGNhbG0lMjBldmVuaW5nfGVufDF8fHx8MTc2NDA4MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
             alt="Journey"
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
           <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl text-white font-serif mb-1">Inner Peace</h3>
              <p className="text-gray-300 text-sm">Start your journey to calmness</p>
           </div>
        </div>
      </div>

      {/* Daily Inspiration */}
      <div className="relative overflow-hidden rounded-[32px] bg-[#0f0f11] border border-white/5 p-8 text-center min-h-[400px] flex flex-col justify-center items-center">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#fde68a]/20 rounded-full blur-[60px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#a855f7]/20 rounded-full blur-[80px]" />
         </div>
         <div className="relative z-10 max-w-xs mx-auto">
            <h3 className="text-3xl font-serif text-white/90 leading-relaxed">
              "It's all about progress, not perfection."
            </h3>
            <div className="mt-8 flex justify-center">
              <span className="text-gray-500 text-sm">75%</span>
            </div>
         </div>
      </div>
    </div>
  );
}
