import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Meditation', value: 61, color: '#d8b4fe' },
  { name: 'Breathwork', value: 24, color: '#fde68a' },
  { name: 'Yoga', value: 15, color: '#2dd4bf' },
];

export function ActivityScreen() {
  return (
    <div className="p-6 pb-24 min-h-screen text-white flex flex-col">
      <h1 className="text-gray-400 mb-8 text-lg">Activity Types</h1>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-64 h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold">48</span>
            <span className="text-sm text-gray-400">min</span>
          </div>
        </div>

        <div className="mt-12 w-full max-w-xs space-y-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-300">{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
