interface StatBadgeProps {
  value: string;
  label: string;
  className?: string;
}

const StatBadge = ({ value, label, className = "" }: StatBadgeProps) => {
  return (
    <div
      className={`
        bg-white/95 backdrop-blur-sm border border-slate-100
        shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-slate-800
        rounded-lg py-3 px-5
        ${className}
      `}
    >
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
        <span className="block text-2xl font-bold tracking-tight text-foreground">
          {value}
        </span>
      </div>
      <span className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
};

export default StatBadge;
