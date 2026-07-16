import { Plug, Sparkles, Rocket } from "lucide-react";
import { ReactNode } from "react";

import { Section } from "../../ui/section";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  time?: string;
}

interface HowItWorksProps {
  title?: string;
  description?: string;
  steps?: Step[];
  className?: string;
}

export default function HowItWorks({
  title = "How It Works",
  description = "Three simple steps to access millions of products",
  steps = [
    {
      number: "01",
      title: "Get Your API Key",
      description:
        "Sign up for free. Get instant access to our product API. Test with 10K queries per month on our free tier.",
      icon: <Plug className="size-8 stroke-1" />,
      time: "5 minutes",
    },
    {
      number: "02",
      title: "Make Your First Query",
      description:
        "Search millions of products with natural language. Get real-time pricing, inventory, and merchant data. SDKs for Python, Node.js, and Go.",
      icon: <Sparkles className="size-8 stroke-1" />,
      time: "One API call",
    },
    {
      number: "03",
      title: "Ship Your Feature",
      description:
        "Integrate product discovery into your AI agent or app. Usage-based pricing scales with you from prototype to production.",
      icon: <Rocket className="size-8 stroke-1" />,
      time: "1 weekend",
    },
  ],
  className,
}: HowItWorksProps) {
  return (
    <Section id="how-it-works" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[680px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-[560px] text-lg font-medium">
              {description}
            </p>
          )}
        </div>

        <div className="grid w-full gap-8 sm:gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center gap-4 rounded-lg border bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="from-primary to-primary/60 mb-2 bg-linear-to-r bg-clip-text text-6xl font-bold text-transparent opacity-20 transition-opacity group-hover:opacity-30">
                {step.number}
              </div>
              <div className="text-primary flex size-16 items-center justify-center rounded-full border bg-background">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed sm:text-base">
                {step.description}
              </p>
              {step.time && (
                <div className="bg-primary/10 text-primary mt-2 rounded-full px-4 py-1 text-xs font-medium">
                  {step.time}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
