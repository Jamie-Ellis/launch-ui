import { Section } from "../../ui/section";

interface ProblemProps {
  title?: string;
  description?: string;
  stats?: {
    value: string;
    label: string;
  }[];
  className?: string;
}

export default function Problem({
  title = "We handle the complexity so you can focus on growth.",
  description = "TheAgentCommerce simplifies your operations, saving you time and unlocking new revenue streams. ",
  stats = [
    {
      value: "18 months",
      label: "average time to onboard 100K merchants",
    },
    {
      value: "700M",
      label: "weekly ChatGPT users ready to shop",
    },
    {
      value: "10M+",
      label: "products ready in our API today",
    },
    {
      value: "1 weekend",
      label: "to integrate and ship",
    },
  ],
  className,
}: ProblemProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-[800px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
            <br />
            <span className="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
           
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[680px] text-lg font-medium sm:text-xl">
            {description}
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center"
            >
              <div className="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
