import { StatsProps } from "../../lib/types";
import { cn } from "../../lib/utils";

const StatsCard = ({ icon: Icon, value, label, hasBorder }: StatsProps) => {
  return (
    <section
      className={cn("space-y-2", hasBorder && "border-x border-border/50")}
    >
      <div className="flex items-center justify-center gap-2">
        <Icon className="size-5 text-primary/70" />
        <p className="text-3xl sm:text-4xl font-bold">{value}</p>
      </div>
      <p className="text-sm text-muted-foreground capitalize">{label}</p>
    </section>
  );
};

export default StatsCard;
