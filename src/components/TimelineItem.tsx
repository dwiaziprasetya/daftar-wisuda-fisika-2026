import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface TimelineItemData {
  /** Nomor urut tahapan */
  step?: string;
  /** Estimasi waktu */
  date: string;
  /** Judul tahapan */
  title: string;
  /** Penjelasan detail */
  description: string;
  /** Icon dari lucide-react (opsional) */
  icon?: LucideIcon;
  /** Label/tag seperti "Wajib", "Administrasi" (opsional) */
  tag?: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  total: number;
}

const tagColors: Record<string, string> = {
  Persiapan: "bg-primary/10 text-primary",
  Administrasi: "bg-amber-500/10 text-amber-400",
  Wajib: "bg-rose-500/10 text-rose-400",
  Selesai: "bg-emerald-500/10 text-emerald-400",
};

export const TimelineItem = ({ item, index, total }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;
  const Icon = item.icon;
  const isLast = index === total - 1;
  const tagStyle = item.tag ? tagColors[item.tag] ?? "bg-primary/10 text-primary" : "";

  return (
    <div className="relative mb-14 last:mb-0">
      {/* Dot */}
      <motion.div
        className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-card ${
          isLast
            ? "border-emerald-400 shadow-[0_0_16px_hsl(var(--timeline-glow)/0.5)]"
            : "border-primary shadow-[0_0_12px_hsl(var(--timeline-glow)/0.3)]"
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.08 + 0.15 }}
      >
        {Icon ? (
          <Icon className={`h-4.5 w-4.5 ${isLast ? "text-emerald-400" : "text-primary"}`} />
        ) : (
          <span className="text-xs font-bold text-primary">{item.step}</span>
        )}
      </motion.div>

      {/* Step number badge (mobile: hidden, desktop: opposite side) */}
      {item.step && (
        <div
          className={`hidden md:flex absolute top-2.5 md:left-1/2 items-center ${
            isLeft ? "md:translate-x-5" : "md:-translate-x-[calc(100%+1.25rem)]"
          }`}
        >
          <span className="text-xs font-mono text-muted-foreground">
            Tahap {item.step}
          </span>
        </div>
      )}

      {/* Card */}
      <div
        className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="group rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--timeline-glow)/0.08)]">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-primary">{item.date}</span>
            {item.tag && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}
              >
                {item.tag}
              </span>
            )}
          </div>
          <h3 className="mb-1.5 text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
