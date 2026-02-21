import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CompassIcon,
  EyeIcon,
  HomeIcon,
  RocketIcon,
  SparkleIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import { featuredProductsProps, HomeButtonProps, StatsProps } from "./types";

// HERO SECTION
export const hero: Record<string, string> = {
  badge: "Join thousands of creators sharing their work",
  heading: "Share what you&apos;ve Built, Discovered what&apos;s Launching",
  description:
    "A community platform for creators to showcase their apps, AI tools, SAAS products and creative projects. Authentic launches, real builder, genuine feedback.",
};

export const heroButton: HomeButtonProps[] = [
  {
    id: 1,
    href: "/submit",
    label: "Share your project",
    variant: "default",
    icon: SparkleIcon,
  },
  {
    id: 2,
    href: "/explore",
    label: "Explore projects",
    variant: "secondary",
    icon: ArrowRightIcon,
  },
];

export const statsData: StatsProps[] = [
  {
    id: 1,
    icon: RocketIcon,
    value: "2.5K+",
    label: "projects shared",
  },
  {
    id: 2,
    icon: UsersIcon,
    value: "10K+",
    label: "active creators",
    hasBorder: true,
  },
  {
    id: 3,
    icon: EyeIcon,
    value: "50K+",
    label: "monthly visitors",
  },
];

// FEATURED SECTION
export const featuredDetails = {
  title: "Featured Today",
  icon: StarIcon,
  description: "Top picks from our community this week.",
  buttonLabel: [
    {
      id: 1,
      label: "View All",
      href: "/explore",
      icon: ArrowUpRightIcon,
    },
  ],
};

export const featuredProducts: featuredProductsProps[] = [
  {
    id: 1,
    name: "ParityKit",
    description: "A tool for creating parity products.",
    tags: ["SAAS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Developer to Leaders",
    description: "A tool for creating parity products.",
    tags: ["Pricing", "Global"],
    votes: 615,
    isFeatured: false,
  },
  {
    id: 3,
    name: "ParityKit 2",
    description: "A tool for creating parity products.",
    tags: ["SAAS", "Pricing"],
    votes: 615,
    isFeatured: false,
  },
  {
    id: 4,
    name: "ParityKit 3",
    description: "A tool for creating parity products.",
    tags: ["SAAS", "Global"],
    votes: 615,
    isFeatured: true,
  },
];

export const navItems = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    icon: CompassIcon,
    label: "Explore",
    href: "/explore",
  }
]