interface SectionHeadingProps {
  index: string;
  title: string;
}

const SectionHeading = ({ index, title }: SectionHeadingProps) => {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-baseline justify-between border-b border-foreground pb-3">
        <h2 className="label-mono text-foreground">{title}</h2>
        <span className="label-mono tabular-nums text-primary">{index}</span>
      </div>
    </header>
  );
};

export default SectionHeading;
