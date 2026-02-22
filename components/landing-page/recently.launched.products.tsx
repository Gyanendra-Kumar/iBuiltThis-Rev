import { CalendarIcon, RocketIcon } from "lucide-react";
import { featuredProducts } from "../../lib/constants";
import ProductCard from "../packages/dynamic.card";
import EmptyState from "../packages/empty.state";
import { SectionHeader } from "../packages/section.header";

export const RecentlyLaunchedProducts = () => {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched Products"
          icon={RocketIcon}
          description="The most recently launched products on the platform."
        />
        {featuredProducts.length > 0 ? (
          <div className="grid-wrapper">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
};
