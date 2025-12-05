import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { WEEKLY_STATS, ACTIVITY_TYPES } from "../../utils/mockData";
import { Settings, ChevronLeft } from "lucide-react";

export function StatisticsScreen() {
  return (
    <div className="flex flex-col gap-6 pb-24 px-6 pt-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <button className="p-2 -ml-2 text-white/60 hover:text-white">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-medium text-white">Statistics</h1>
        <button className="p-2 -mr-2 text-white/60 hover:text-white">
          <Settings size={24} />
        </button>
      </div>

      {/* All Time Stats */}
      <div>
        <h2 className="text-white/80 text-sm mb-4 font-medium">All Time</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#23232C] rounded-[24px] p-5 flex flex-col items-center justify-center aspect-square">
            <div className="h-12 w-12 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <span className="text-2xl font-semibold text-white mb-1">23</span>
            <span className="text-white/40 text-xs">Sessions</span>
          </div>
          <div className="bg-[#23232C] rounded-[24px] p-5 flex flex-col items-center justify-center aspect-square">
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span className="text-2xl font-semibold text-white mb-1">56</span>
            <span className="text-white/40 text-xs">Minutes</span>
          </div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-[#1C1C23] p-1 rounded-[32px]">
        <div className="flex justify-between items-end mb-6 px-2">
          <div>
            <h2 className="text-white/80 text-sm font-medium mb-1">This Week</h2>
            <p className="text-white/40 text-xs">Total time</p>
          </div>
          <span className="text-white font-medium text-lg">3h 34min</span>
        </div>
        
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={WEEKLY_STATS}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#52525B', fontSize: 12 }} 
                dy={10}
              />
              <Bar dataKey="minutes" radius={[4, 4, 4, 4]} barSize={8}>
                {WEEKLY_STATS.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={entry.minutes > 45 ? '#34D399' : (entry.minutes > 25 ? '#2DD4BF' : '#272730')} 
                    />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Types */}
      <div>
        <h2 className="text-white/80 text-sm mb-4 font-medium">Activity Types</h2>
        <div className="bg-[#23232C] rounded-[32px] p-6">
            <div className="h-[200px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={ACTIVITY_TYPES}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {ACTIVITY_TYPES.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-white">48</span>
                        <span className="text-white/40 text-xs">min</span>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 space-y-3">
                {ACTIVITY_TYPES.map((type, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: type.fill }} />
                            <span className="text-white/80 text-sm">{type.name}</span>
                        </div>
                        <span className="text-white font-medium text-sm">{type.value}%</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
