import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { RoadmapItem } from "@/data/timelineData";

interface TimelineCardProps {
  item: RoadmapItem;
  isActive: boolean;
  onClick: () => void;
}

const tagColors: Record<string, string> = {
  Persiapan: "bg-sky-500/10 text-sky-400",
  Administrasi: "bg-amber-500/10 text-amber-400",
  Wajib: "bg-rose-500/10 text-rose-400",
  Selesai: "bg-emerald-500/10 text-emerald-400",
  HKI: "bg-violet-500/10 text-violet-400",
};

export const TimelineCard = ({ item, isActive, onClick }: TimelineCardProps) => {
  const Icon = item.icon;
  const tagStyle = item.tag ? tagColors[item.tag] ?? "bg-primary/10 text-primary" : "";

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border p-4 transition-all duration-300 ${
        isActive
          ? "border-primary/50 bg-primary/5 shadow-[0_0_24px_hsl(var(--ring)/0.1)]"
          : "border-border bg-card hover:border-primary/30"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {Icon && <Icon className="h-3.5 w-3.5 text-primary shrink-0" />}
        <span className="text-[11px] font-medium text-primary">{item.date}</span>
        {item.tag && (
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}>
            {item.tag}
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">{item.summary}</p>
    </div>
  );
};

/** Detail panel yang muncul saat card diklik */
interface DetailPanelProps {
  item: RoadmapItem | null;
  onClose: () => void;
}

export const DetailPanel = ({ item, onClose }: DetailPanelProps) => {
  const Icon = item?.icon;
  const tagStyle = item?.tag ? tagColors[item.tag] ?? "bg-primary/10 text-primary" : "";

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl border border-border bg-card p-6 sticky top-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            {Icon && (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            )}
            <div>
              <span className="text-[11px] font-mono text-muted-foreground">Tahap {item.step}</span>
              <p className="text-[11px] text-primary">{item.date}</p>
            </div>
            {item.tag && (
              <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}>
                {item.tag}
              </span>
            )}
          </div>

          <h2 className="text-lg font-bold text-foreground mb-3">{item.title}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
