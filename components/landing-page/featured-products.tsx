import { StarIcon } from "lucide-react";
import Link from "next/link";
import { featuredDetails, featuredProducts } from "../../lib/constants";
import DynamicCard from "../packages/dynamic.card";
import { SectionHeader } from "../packages/section.header";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
            <DynamicCard key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[180px]">
                  <CardHeader className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-color">
                            {product.name}
                          </CardTitle>
                          {product.isFeatured && (
                            <Badge className="gap-1 bg-primary text-primary-foreground">
                              <StarIcon className="size-3 fill-current"/>
                              Featured
                            </Badge>
                          )}
                        </div>

                        <CardDescription>{product.description}</CardDescription>
                      </div>
                      {/* voting button */}
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      {product.tags.map((t, i) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </DynamicCard>
          ))}
        </div>
      </div>
    </section>
  );
};
