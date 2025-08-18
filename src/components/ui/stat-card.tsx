import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  className?: string;
  variant?: "default" | "gradient" | "success";
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
  variant = "default",
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-success";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getCardVariant = () => {
    switch (variant) {
      case "gradient":
        return "gradient-card border-0 shadow-soft";
      case "success":
        return "border-success/20 bg-success/5";
      default:
        return "shadow-soft hover:shadow-medium transition-shadow";
    }
  };

  return (
    <Card className={cn(getCardVariant(), "transition-smooth", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {subtitle && (
              <p className={cn("text-sm", getTrendColor())}>{subtitle}</p>
            )}
          </div>
          {Icon && (
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg",
              variant === "gradient" ? "bg-primary/10" : "bg-muted/50"
            )}>
              <Icon className={cn(
                "h-6 w-6",
                variant === "gradient" ? "text-primary" : "text-muted-foreground"
              )} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};