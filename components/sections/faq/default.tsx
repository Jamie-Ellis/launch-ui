import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "How quickly can I start testing the API?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Sign up for a free API key and you can make your first query in under 5 minutes. We provide SDKs for Python, Node.js, and Go, plus comprehensive REST API docs. Free tier includes 10K queries per month.
        </p>
      ),
    },
    {
      question: "What's the pricing model?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[600px]">
          Usage-based: pay per API query. Free tier for testing (10K queries/month). Production starts at $0.001 per query with volume discounts. Merchants list products free, we take a small % only on completed sales.
        </p>
      ),
    },
    {
      question: "How do you keep product data up to date?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Real-time sync with merchant platforms. When a merchant updates inventory on Shopify, it reflects in our API within seconds. We handle webhooks, polling, and data normalization automatically.
        </p>
      ),
    },
    {
      question: "Do you support ACP and AP2?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Yes. We natively support both OpenAI's Agentic Commerce Protocol (ACP) and Google's Agent Payments Protocol (AP2). Use our unified API and we handle the protocol translation.
        </p>
      ),
    },
    {
      question: "What if I'm building a custom AI shopping agent?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Perfect use case. Our API gives you instant access to millions of products without onboarding merchants yourself. Focus on your AI logic, we handle product discovery and inventory.
        </p>
      ),
    },
    {
      question: "Is my data secure?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          SOC 2 Type II certified, PCI-compliant, GDPR-ready. All data encrypted in transit (TLS 1.3) and at rest (AES-256). We never store payment credentials—only product metadata and inventory.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
