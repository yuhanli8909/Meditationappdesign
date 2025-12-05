import { EXPLORE_CATEGORIES } from "../../utils/mockData";
import { Search } from "lucide-react";

export function ExploreScreen() {
  return (
    <div className="flex flex-col gap-6 pb-24 px-6 pt-6">
      {/* Search Header */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full bg-[#23232C] rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-violet-500 transition-all"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-4">
        {EXPLORE_CATEGORIES.map((category) => (
          <div 
            key={category.id}
            className={`relative h-[140px] rounded-[32px] overflow-hidden group cursor-pointer`}
          >
            {/* Image Background with Gradient Overlay */}
             <img 
                src={category.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-90 mix-blend-multiply`} />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex items-center">
              <h3 className="text-2xl font-medium text-white w-2/3 leading-tight">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Individual Item */}
      <div>
          <h3 className="text-white/80 font-medium mb-4">Recommended</h3>
          <div className="relative h-[240px] rounded-[32px] overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1763136524650-376409b665a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FsbSUyMHBlYWNlJTIwZGFya3xlbnwxfHx8fDE3NjQwODEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Inner Peace" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-medium">Inner Peace</h3>
                <p className="text-white/60 text-sm mt-1">10 min • Guided</p>
            </div>
          </div>
      </div>
    </div>
  );
}
