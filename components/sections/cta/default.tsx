import { Clock, Award, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  subtitle?: string;
  urgencyPoints?: { icon: ReactNode; text: string }[];
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Ship Product Discovery This Week",
  subtitle = "Start with our free tier. Test with real queries. Upgrade when you're ready to launch. Join AI platforms and merchants already using AgentGraph.",
  urgencyPoints = [
    {
      icon: <Clock className="size-4" />,
      text: "API access in 5 minutes",
    },
    {
      icon: <Award className="size-4" />,
      text: "Free tier: 10K queries/month",
    },
    {
      icon: <TrendingUp className="size-4" />,
      text: "10M+ products already indexed",
    },
  ],
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Free API Key",
      variant: "default",
    },
    {
      href: siteConfig.docsUrl,
      text: "View API Docs",
      variant: "glow",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-[680px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-[640px] text-base font-medium sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {urgencyPoints && urgencyPoints.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {urgencyPoints.map((point, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-primary/30 text-primary flex items-center gap-2 px-4 py-2 text-sm font-semibold"
              >
                {point.icon}
                {point.text}
              </Badge>
            ))}
          </div>
        )}

        {buttons !== false && buttons.length > 0 && (
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
              >
                <a
                  href={button.href}
                  data-attr={`cta-${button.text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                >
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>
              </Button>
            ))}
          </div>
        )}

        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            🔒 No credit card required
          </span>
          <span className="flex items-center gap-1">
            ⚡ 5-minute setup
          </span>
          <span className="flex items-center gap-1">
            💰 14-day free trial
          </span>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
