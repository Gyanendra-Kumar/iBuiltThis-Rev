import Link from "next/link";
import { featuredDetails, featuredProducts } from "../../lib/constants";
import ProductCard from "../packages/dynamic.card";
import { SectionHeader } from "../packages/section.header";
import { Button } from "../ui/button";

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title={featuredDetails.title}
            icon={featuredDetails.icon}
            description={featuredDetails.description}
          />
          {featuredDetails.buttonLabel.map((button) => {
            const ButtonIcon = button.icon;
            return (
              <Button
                variant="outline"
                asChild
                className="hidden sm:flex"
                key={button.id}
              >
                <Link href={button.href}>
                  {button.label}
                  <ButtonIcon className="size-4" />
                </Link>
              </Button>
            );
          })}
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
