import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch } from "lucide-react";
import {
  mainTimeline,
  hkiBranch,
  HKI_BRANCH_INDEX,
  type RoadmapItem,
} from "@/data/timelineData";
import { TimelineCard, DetailPanel } from "./TimelineCard";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<RoadmapItem | null>(null);

  const handleClick = (item: RoadmapItem) => {
    setActiveItem((prev) => (prev?.step === item.step ? null : item));
  };

  return (
    <>
      <div className="relative mx-auto max-w-5xl px-4 py-10">
        <div className="flex-1 min-w-0">
          {mainTimeline.map((item, index) => (
            <div key={item.step}>
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
                <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
                  <motion.div
                    className={`relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 bg-card ${
                      activeItem?.step === item.step
                        ? "border-primary shadow-[0_0_16px_hsl(var(--ring)/0.3)]"
                        : "border-border"
                    } transition-all duration-300`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.06 + 0.1 }}
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-muted-foreground">{item.step}</span>
                  </motion.div>
                  {index < mainTimeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-6 sm:pb-8">
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
      </div>

      {/* Right-side overlay panel (roadmap.sh style) */}
      <AnimatePresence>
        {activeItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveItem(null)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] md:w-[480px] border-l border-border bg-card shadow-2xl overflow-y-auto"
            >
              <DetailPanel item={activeItem} onClose={() => setActiveItem(null)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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
        <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
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
          <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
            <div className="relative z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-violet-500/40 bg-card">
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
        <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
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
