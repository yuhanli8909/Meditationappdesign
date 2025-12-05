import { Heart, ChevronLeft, Play } from "lucide-react";
import { NEW_RELEASES } from "../../utils/mockData";

interface DetailScreenProps {
  onBack: () => void;
}

export function DetailScreen({ onBack }: DetailScreenProps) {
  return (
    <div className="bg-[#0F0F13] min-h-full relative pb-24">
      {/* Header Image Area */}
      <div className="relative h-[45vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1763136524650-376409b665a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FsbSUyMHBlYWNlJTIwZGFya3xlbnwxfHx8fDE3NjQwODEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Meditation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0F0F13]" />
        
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center z-10">
          <button onClick={onBack} className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
            <ChevronLeft size={24} />
          </button>
          <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
            <Heart size={20} />
          </button>
        </div>

        {/* Title Content */}
        <div className="absolute bottom-8 left-6 right-6">
          <h1 className="text-4xl font-medium text-white mb-2">Inner Peace</h1>
          <p className="text-white/70 text-sm">7 days of meditation</p>
        </div>
        
        {/* Floating Play Button */}
        <div className="absolute bottom-6 right-6 h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-lg shadow-violet-900/20 cursor-pointer hover:scale-105 transition-transform">
           <Play size={24} fill="currentColor" className="ml-1 text-violet-900" />
        </div>
      </div>

      {/* Content Tabs */}
      <div className="px-6 -mt-4 relative z-10">
        <div className="flex flex-col gap-2">
           {/* Expanded Tab */}
           <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-[24px] p-6">
              <h3 className="text-violet-900 font-medium text-lg mb-2">Details</h3>
              <p className="text-violet-900/70 text-sm leading-relaxed">
                This session is designed to help you find inner peace and clarity. Focus on your breath and let go of stress.
              </p>
           </div>
           
           {/* Collapsed Tabs */}
           <div className="bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-[24px] p-5 flex justify-between items-center">
              <h3 className="text-violet-900 font-medium text-lg">Days</h3>
              <ChevronLeft className="rotate-[-90deg] text-violet-900/50" />
           </div>
        </div>

        {/* More Classes Section */}
        <div className="mt-8">
          <h3 className="text-white font-medium text-lg mb-4">More Classes</h3>
          
          <div className="relative h-[160px] rounded-[24px] overflow-hidden group">
            <img 
              src={NEW_RELEASES[1].image}
              alt="Stay Focused"
              className="absolute inset-0 w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 mix-blend-multiply" />
             
             <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <h4 className="text-2xl text-white font-medium w-1/2 leading-tight">Stay Focused</h4>
                <span className="mt-3 px-3 py-1 rounded-full bg-white/20 self-start text-xs text-white backdrop-blur-md border border-white/10">Yoga</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
