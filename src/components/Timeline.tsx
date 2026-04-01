import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import {
  mainTimeline,
  hkiBranch,
  HKI_BRANCH_INDEX,
  type RoadmapItem,
} from "@/data/timelineData";
import { TimelineCard, DetailPanel } from "./TimelineCard";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<RoadmapItem | null>(null);
  const isMobile = useIsMobile();

  const handleClick = (item: RoadmapItem) => {
    setActiveItem((prev) => (prev?.step === item.step ? null : item));
  };

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-10">
      <div className="flex gap-8">
        {/* Left: Timeline */}
        <div className="flex-1 min-w-0">
          {mainTimeline.map((item, index) => (
            <div key={item.step}>
              {/* Render HKI branch before the merge point */}
              {index === HKI_BRANCH_INDEX && (
                <HKIBranch
                  items={hkiBranch}
                  activeStep={activeItem?.step}
                  onClickItem={handleClick}
                />
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative flex gap-4"
              >
                {/* Line + Dot */}
                <div className="flex flex-col items-center shrink-0 w-10">
                  <motion.div
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-card ${
                      activeItem?.step === item.step
                        ? "border-primary shadow-[0_0_16px_hsl(var(--ring)/0.3)]"
                        : "border-border"
                    } transition-all duration-300`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.06 + 0.1 }}
                  >
                    <span className="text-xs font-bold text-muted-foreground">{item.step}</span>
                  </motion.div>
                  {index < mainTimeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-8">
                  <TimelineCard
                    item={item}
                    isActive={activeItem?.step === item.step}
                    onClick={() => handleClick(item)}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right: Detail Panel (desktop) */}
        <div className="hidden lg:block w-80 shrink-0">
          {activeItem ? (
            <DetailPanel item={activeItem} onClose={() => setActiveItem(null)} />
          ) : (
            <div className="sticky top-8 rounded-xl border border-dashed border-border p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Klik salah satu tahapan untuk melihat detail lengkap
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Drawer from right */}
      <Drawer open={!!activeItem && isMobile} onOpenChange={(open) => { if (!open) setActiveItem(null); }}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="text-left">
            <DrawerTitle>{activeItem?.title}</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-6 overflow-y-auto">
            {activeItem && <DetailPanel item={activeItem} onClose={() => setActiveItem(null)} />}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

/** Komponen cabang HKI */
function HKIBranch({
  items,
  activeStep,
  onClickItem,
}: {
  items: RoadmapItem[];
  activeStep?: string;
  onClickItem: (item: RoadmapItem) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative mb-2"
    >
      {/* Branch label */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center shrink-0 w-10">
          <div className="w-px flex-1 bg-border" />
        </div>
        <div className="flex-1 pb-3">
          <div className="flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/5 px-3 py-2">
            <GitBranch className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
              Cabang HKI
            </span>
            <span className="text-[10px] text-violet-400/60 ml-auto">Opsional</span>
          </div>
        </div>
      </div>

      {/* HKI items */}
      {items.map((item, i) => (
        <div key={item.step} className="flex gap-4">
          <div className="flex flex-col items-center shrink-0 w-10">
            {/* Branched line with different style */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/40 bg-card">
              <span className="text-[10px] font-bold text-violet-400">{i + 1}</span>
            </div>
            <div className="w-px flex-1 bg-violet-500/20" />
          </div>
          <div className="flex-1 pb-4">
            <TimelineCard
              item={item}
              isActive={activeStep === item.step}
              onClick={() => onClickItem(item)}
            />
          </div>
        </div>
      ))}

      {/* Merge indicator */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center shrink-0 w-10">
          <div className="w-px h-4 bg-violet-500/20" />
        </div>
        <div className="flex-1 pb-4">
          <div className="flex items-center gap-2 text-[10px] text-violet-400/60">
            <div className="h-px flex-1 bg-violet-500/20" />
            <span>↓ Kembali ke alur utama</span>
            <div className="h-px flex-1 bg-violet-500/20" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Timeline;
