import { ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  badges?: { label: string; variant?: string }[] | false;
  className?: string;
}

export default function Logos({
  title = "Powered by Industry-Leading Protocols",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      {siteConfig.stats.merchants} merchants on the waitlist
    </Badge>
  ),
  badges = [
    { label: "OpenAI ACP Compatible" },
    { label: "Google AP2 Supported" },
    { label: "Stripe Partner" },
    { label: "PCI Compliant" },
    { label: "SOC 2 Certified" },
    { label: "GDPR Ready" },
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {badges !== false && badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-1.5 px-4 py-2 text-sm"
              >
                <ShieldCheck className="size-3.5" />
                {item.label}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
