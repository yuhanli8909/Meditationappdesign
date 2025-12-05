import { Play, Heart, Share2, ChevronLeft, MoreHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface PlayerScreenProps {
  onBack: () => void;
}

export function PlayerScreen({ onBack }: PlayerScreenProps) {
  return (
    <div className="flex flex-col h-full relative overflow-hidden bg-[#0a0a0a] text-white pb-24">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
          <Heart size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1759597321264-d8fc1b3ae90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjBkYXJrJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDgxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Meditation" 
            className="w-full h-3/4 object-cover mask-image-b"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>

        {/* Title Section */}
        <div className="absolute top-1/2 left-0 right-0 px-6 z-10 transform -translate-y-1/2 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif mb-2 text-white"
          >
            Inner Peace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 mb-8"
          >
            7 days • 15 min
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <Play size={28} fill="currentColor" className="ml-1" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Sheet / Details */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="relative z-10 bg-[#1c1c1e] rounded-t-[32px] p-6 -mt-20 min-h-[300px]"
      >
        <div className="flex gap-6 mb-6 border-b border-white/10 pb-2">
          <button className="pb-2 border-b-2 border-[#f9a8d4] text-white font-medium">Details</button>
          <button className="pb-2 border-b-2 border-transparent text-gray-500">Days</button>
          <button className="pb-2 border-b-2 border-transparent text-gray-500">Reviews</button>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#a855f7]/20 to-[#2dd4bf]/20 border border-white/5 flex items-center justify-between">
             <div>
               <h3 className="font-medium text-lg">Morning Flow</h3>
               <p className="text-sm text-gray-400">Day 1 • 10 min</p>
             </div>
             <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
               <Play size={14} fill="currentColor" />
             </button>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
             <div>
               <h3 className="font-medium text-lg">Body Scan</h3>
               <p className="text-sm text-gray-400">Day 2 • 15 min</p>
             </div>
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <div className="w-4 h-4 rounded border-2 border-gray-600" />
             </div>
          </div>
        </div>
        
        <div className="mt-8">
           <h3 className="text-xl font-serif mb-4">More Classes</h3>
           <div className="relative h-32 rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1628002135197-8b371cb75d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMHNpbGhvdWV0dGUlMjBkYXJrfGVufDF8fHx8MTc2NDA4MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Yoga"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/80 to-transparent p-4 flex flex-col justify-center">
                <h4 className="font-serif text-xl mb-1">Stay Focused</h4>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs self-start">Yoga</span>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
