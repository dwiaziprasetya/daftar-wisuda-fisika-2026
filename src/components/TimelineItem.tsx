import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface TimelineItemData {
  date: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  tag?: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div className="relative mb-12 last:mb-0">
      {/* Dot */}
      <motion.div
        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-card shadow-[0_0_12px_hsl(var(--timeline-glow)/0.4)]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.2 }}
      >
        {Icon ? (
          <Icon className="h-4 w-4 text-primary" />
        ) : (
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        )}
      </motion.div>

      {/* Card */}
      <div
        className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
        }`}
      >
        <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-medium text-primary">{item.date}</span>
            {item.tag && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {item.tag}
              </span>
            )}
          </div>
          <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
