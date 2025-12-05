import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import { Settings, ChevronLeft } from "lucide-react";

const data = [
  { name: "Sun", val: 30 },
  { name: "Mon", val: 45 },
  { name: "Tue", val: 25 },
  { name: "Wed", val: 60 },
  { name: "Thu", val: 80 },
  { name: "Fri", val: 55 },
  { name: "Sat", val: 40 },
];

export function StatsScreen() {
  return (
    <div className="p-6 pb-24 min-h-screen flex flex-col text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <ChevronLeft size={24} className="text-gray-400" />
        <h1 className="text-lg font-medium">Statistics</h1>
        <Settings size={24} className="text-gray-400" />
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-gray-400 mb-4">All Time</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1c1c1e] rounded-3xl p-6 flex flex-col items-center justify-center gap-2 border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 flex flex-col items-center">
                 <span className="text-3xl mb-1">🧘</span>
                 <span className="text-2xl font-bold">23</span>
                 <span className="text-xs text-gray-400">sessions</span>
               </div>
            </div>
            <div className="bg-[#1c1c1e] rounded-3xl p-6 flex flex-col items-center justify-center gap-2 border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#2dd4bf]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 flex flex-col items-center">
                 <span className="text-3xl mb-1">⏱️</span>
                 <span className="text-2xl font-bold">56</span>
                 <span className="text-xs text-gray-400">minutes</span>
               </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-gray-400 mb-4">This Week</h2>
          <div className="bg-[#1c1c1e] rounded-[32px] p-6 border border-white/5">
            <div className="flex justify-between items-center mb-8">
               <span className="text-sm text-gray-400">Total time</span>
               <span className="text-xl font-bold">3h 34min</span>
            </div>
            
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6b7280', fontSize: 12 }} 
                    dy={10}
                  />
                  <Bar dataKey="val" radius={[4, 4, 4, 4]} barSize={8}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.val > 60 ? '#2dd4bf' : '#3f3f46'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
