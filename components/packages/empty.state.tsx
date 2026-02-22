import { LucideIcon } from "lucide-react";

const EmptyState = ({
  message,
  icon: Icon,
}: {
  message: string;
  icon?: LucideIcon;
}) => {
  return (
    <section
      className="wrapper text-center border p-12"
      style={{
        borderRadius: "4px",
      }}
    >
      {Icon && (
        <Icon className="size-12 mx-auto mb-4 text-muted-foreground/50" />
      )}
      <p className="text-lg text-muted-foreground">{message}</p>
    </section>
  );
};

export default EmptyState;
