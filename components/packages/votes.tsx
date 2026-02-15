import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

const Votes = () => {
  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <Button
        variant="ghost"
        size="icon-sm"
        className="h-8 w-8 text-primary hover:bg-primary/20"
      >
        <ChevronUp className="size-5" />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        10
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        className="h-8 w-8 text-primary hover:bg-primary/20"
      >
        <ChevronDown className="size-5" />
      </Button>
    </div>
  );
};

export default Votes;
