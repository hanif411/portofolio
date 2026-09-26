const StatusBadge = () => {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="label-mono normal-case tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
        Available for Work &amp; Freelance
      </span>
    </span>
  );
};

export default StatusBadge;
