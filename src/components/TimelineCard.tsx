import { X, ExternalLink } from "lucide-react";
import { X, ExternalLink } from "lucide-react";
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
      className={`cursor-pointer rounded-lg border p-3 sm:p-4 transition-all duration-300 ${
        isActive
          ? "border-primary/50 bg-primary/5 shadow-[0_0_24px_hsl(var(--ring)/0.1)]"
          : "border-border bg-card hover:border-primary/30"
      }`}
    >
      <div className="mb-1.5 sm:mb-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
        {Icon && <Icon className="h-3.5 w-3.5 text-primary shrink-0" />}
        <span className="text-[10px] sm:text-[11px] font-medium text-primary">{item.date}</span>
        {item.tag && (
          <span className={`rounded-full px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}>
            {item.tag}
          </span>
        )}
      </div>
      <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
      <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-muted-foreground line-clamp-2">{item.summary}</p>
    </div>
  );
};

/** Roadmap.sh-style side panel */
interface DetailPanelProps {
  item: RoadmapItem | null;
  onClose: () => void;
}

export const DetailPanel = ({ item, onClose }: DetailPanelProps) => {
  if (!item) return null;

  const Icon = item.icon;
  const tagStyle = item.tag ? tagColors[item.tag] ?? "bg-primary/10 text-primary" : "";

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
          )}
          <div>
            <span className="text-[11px] font-mono text-muted-foreground block">Tahap {item.step}</span>
            <span className="text-[11px] text-primary">{item.date}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {item.tag && (
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tagStyle}`}>
              {item.tag}
            </span>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">
        <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">{item.title}</h2>
        
        <p className="text-sm leading-relaxed text-muted-foreground mb-6">{item.detail}</p>

        {/* Resources section (like roadmap.sh) */}
        {item.resources && item.resources.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                📎 Sumber Daya
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-2">
              {item.resources.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    {res.label}
                  </span>
                  <span className="flex-1 truncate">{res.title}</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
