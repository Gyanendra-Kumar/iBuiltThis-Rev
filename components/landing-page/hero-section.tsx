import Link from "next/link";
import { hero, heroButton, statsData } from "../../lib/constants";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import StatsCard from "./stats.card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative h-2 w-2 flex items-center justify-center gap-1">
        <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-primary opacity-75"></span>
        <span className="absolute inline-flex h-2 w-2 rounded-full bg-primary"></span>
      </span>
      <span className="text-muted-foreground">{hero.badge}</span>
    </Badge>
  );
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center py-12 lg:py-24 text-center">
          <LiveBadge />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            {hero.badge}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {heroButton.map((button) => {
              const Icon = button.icon;

              return (
                <Button
                  key={button.id}
                  asChild
                  size="lg"
                  className="text-base px-8 shadow-lg"
                  variant={button.variant}
                >
                  <Link href={button.href}>
                    {button.id === 1 && Icon && <Icon size={5} />}
                    <span>{button.label}</span>
                    {button.id === 2 && Icon && <Icon size={5} />}
                  </Link>
                </Button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
            {statsData.map((stat) => {
              return <StatsCard key={stat.id} {...stat} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
