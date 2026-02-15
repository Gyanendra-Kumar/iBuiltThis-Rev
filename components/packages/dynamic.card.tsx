"use client";

import { StarIcon } from "lucide-react";
import Link from "next/link";
import { featuredProductsProps } from "../../lib/types";
import { Badge } from "../ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Votes from "./votes";

const ProductCard = ({ product }: { product: featuredProductsProps }) => {
  return (
    <div>
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
                      <StarIcon className="size-3 fill-current" />
                      Featured
                    </Badge>
                  )}
                </div>

                <CardDescription>{product.description}</CardDescription>
              </div>
              {/* voting button */}
              <Votes />
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
    </div>
  );
};

export default ProductCard;
