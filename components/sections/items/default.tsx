import {
  Zap,
  Bot,
  Target,
  BarChart3,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "One Integration, Unlimited Reach",
  items = [
    {
      title: "Effortless Integration",
      description: "Connect your store in minutes, not months. Our streamlined process makes setup simple, with no deep technical expertise required.",
      icon: <Boxes className="size-5 stroke-1" />,
    },
    {
      title: "Unified Management",
      description: "Control your products, pricing, and inventory across all AI platforms from a single, intuitive dashboard. Say goodbye to fragmented systems.",
      icon: <Zap className="size-5 stroke-1" />,
    },
    {
      title: "Automated Engagement",
      description: "Leverage AI to enhance customer interactions. Our tools help you provide automated, real-time support and personalized shopping experiences.",
      icon: <Bot className="size-5 stroke-1" />,
    },
    {
      title: "Actionable Insights",
      description: "Gain a clear view of your performance with real-time analytics. Make data-driven decisions to optimize your strategy and boost sales.",
      icon: <Target className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
