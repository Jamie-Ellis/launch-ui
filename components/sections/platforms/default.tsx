import { Check } from "lucide-react";

import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface Platform {
  name: string;
  users: string;
  status: "launching" | "opportunity" | "future";
  highlight?: boolean;
}

interface PlatformsProps {
  title?: string;
  description?: string;
  platforms?: Platform[];
  className?: string;
}

export default function Platforms({
  title = "Built for AI Platforms & Developers",
  description = "Whether you're ChatGPT, a custom AI agent, or building the next AI shopping assistant—get instant access to millions of products.",
  platforms = [
    {
      name: "ChatGPT",
      users: "700M weekly users",
      status: "launching",
      highlight: true,
    },
    {
      name: "Google Gemini",
      users: "Product search built-in",
      status: "launching",
      highlight: true,
    },
    {
      name: "Claude (Anthropic)",
      users: "Enterprise AI assistant",
      status: "opportunity",
    },
    {
      name: "Perplexity",
      users: "AI-powered search",
      status: "opportunity",
    },
    {
      name: "Microsoft Copilot",
      users: "Windows + Office integration",
      status: "opportunity",
    },
    {
      name: "Amazon Alexa+",
      users: "Voice commerce platform",
      status: "opportunity",
    },
    {
      name: "Meta AI",
      users: "WhatsApp + Instagram",
      status: "future",
    },
    {
      name: "Apple Intelligence",
      users: "iOS ecosystem",
      status: "future",
    },
  ],
  className,
}: PlatformsProps) {
  const getStatusBadge = (status: Platform["status"]) => {
    switch (status) {
      case "launching":
        return (
          <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
            Live Now
          </Badge>
        );
      case "opportunity":
        return (
          <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
            Integration Target
          </Badge>
        );
      case "future":
        return (
          <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400">
            Future Opportunity
          </Badge>
        );
    }
  };

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[680px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[640px] text-lg font-medium">
            {description}
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 rounded-lg border p-6 transition-all hover:border-primary/50 hover:shadow-lg ${
                platform.highlight ? "border-primary/30 bg-primary/5" : "bg-card"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">{platform.name}</h3>
                {platform.highlight && (
                  <Check className="text-primary size-5 shrink-0" />
                )}
              </div>
              <p className="text-muted-foreground text-sm">{platform.users}</p>
              {getStatusBadge(platform.status)}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground max-w-[560px] text-base font-medium">
            Building for any of these platforms? Get API access today. Free tier available for testing and development.
          </p>
        </div>
      </div>
    </Section>
  );
}
