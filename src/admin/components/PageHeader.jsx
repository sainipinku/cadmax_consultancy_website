import { ChevronRight } from "lucide-react";

const PageHeader = ({
  title,
  description,
  action,
  actionLabel,
  onAction
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          {title}
        </h1>

        {description && (
          <p className="text-sm text-slate-500 mt-1">
            {description}
          </p>
        )}
      </div>

      {/* Right Action */}
      {action && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-sm"
        >
          {action}
          <span>{actionLabel}</span>
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default PageHeader;
