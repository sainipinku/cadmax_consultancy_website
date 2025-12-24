import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  icon,
  trend,       // "up" | "down"
  percent,     // number
  color = "blue"
}) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600"
  };

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg ${colors[color]}`}
        >
          {icon}
        </div>

        {/* Trend */}
        {percent !== undefined && (
          <div
            className={`flex items-center gap-1 text-sm font-medium ${
              trend === "down" ? "text-red-600" : "text-green-600"
            }`}
          >
            {trend === "down" ? (
              <ArrowDownRight size={16} />
            ) : (
              <ArrowUpRight size={16} />
            )}
            {percent}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm text-slate-500">
          {title}
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mt-1">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default StatCard;
