import { User, Users } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Simple, Transparent Pricing",
  description = "Get started with a 14-day free trial. No credit card required. Cancel anytime.",
  plans = [
    {
      name: "Starter",
      icon: <User className="size-4" />,
      description: "For small stores getting started with AI commerce",
      price: 99,
      priceNote: "Per month. Billed monthly.",
      cta: {
        variant: "glow",
        label: "Start Free Trial",
        href: siteConfig.pricing.starter,
      },
      features: [
        "Single protocol (ACP or AP2)",
        "Up to 1,000 products",
        "AI feed optimization",
        "Basic analytics",
        "Email support",
      ],
      variant: "default",
    },
    {
      name: "Growth",
      icon: <User className="size-4" />,
      description: "For mid-market stores scaling with AI",
      price: 299,
      priceNote: "Per month. Most popular plan.",
      cta: {
        variant: "default",
        label: "Start Free Trial",
        href: siteConfig.pricing.growth,
      },
      features: [
        "Both protocols (ACP + AP2)",
        "Up to 10,000 products",
        "Advanced analytics",
        "Priority support",
        "Custom feed rules",
      ],
      variant: "glow-brand",
    },
    {
      name: "Enterprise",
      icon: <Users className="size-4" />,
      description: "For large operations with advanced needs",
      price: 999,
      priceNote: "Per month. Unlimited everything.",
      cta: {
        variant: "default",
        label: "Contact Sales",
        href: siteConfig.pricing.enterprise,
      },
      features: [
        "Unlimited products",
        "White-label option",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
