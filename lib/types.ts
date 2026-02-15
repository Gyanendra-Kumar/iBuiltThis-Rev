import { LucideIcon } from "lucide-react";

export interface HomeButtonProps {
  id: number;
  href: string;
  label: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  icon: LucideIcon;
}

export interface StatsProps {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}

export interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface featuredProductsProps {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}