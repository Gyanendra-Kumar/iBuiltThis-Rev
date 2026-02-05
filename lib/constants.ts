import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparkleIcon,
  UsersIcon,
} from "lucide-react";
import { HomeButtonProps, StatsProps } from "./types";

export const hero = {
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
