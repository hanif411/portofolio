const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
        Available for Full-time & Freelance
      </span>
    </div>
  );
};

export default StatusBadge;
