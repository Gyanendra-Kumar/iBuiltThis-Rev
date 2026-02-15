import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

const Votes = () => {
  const hasVoted = false; // Replace with actual voting logic

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <Button
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "hover:bg-primary/10 hover:text-primary",
        )}
      >
        <ChevronUp className="size-5" />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        10
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary hover:bg-primary/20",
          hasVoted ? "hover:text-destructive" : "opacity-50 cursor-not-allowed",
        )}
      >
        <ChevronDown className="size-5" />
      </Button>
    </div>
  );
};

export default Votes;
