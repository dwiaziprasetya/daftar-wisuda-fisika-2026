import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch } from "lucide-react";
import {
  timelineNodes,
  type RoadmapItem,
  type ParallelGroup,
  type TimelineNode,
} from "@/data/timelineData";
import { TimelineCard, DetailPanel } from "./TimelineCard";

/* ── Color map for branches ──────────────────── */
const branchColors: Record<string, { border: string; bg: string; text: string; line: string; dot: string }> = {
  sky:    { border: "border-sky-500/30",    bg: "bg-sky-500/5",    text: "text-sky-400",    line: "bg-sky-500/20",    dot: "border-sky-500/40" },
  amber:  { border: "border-amber-500/30",  bg: "bg-amber-500/5",  text: "text-amber-400",  line: "bg-amber-500/20",  dot: "border-amber-500/40" },
  violet: { border: "border-violet-500/30", bg: "bg-violet-500/5", text: "text-violet-400", line: "bg-violet-500/20", dot: "border-violet-500/40" },
  rose:   { border: "border-rose-500/30",   bg: "bg-rose-500/5",   text: "text-rose-400",   line: "bg-rose-500/20",   dot: "border-rose-500/40" },
  emerald:{ border: "border-emerald-500/30",bg: "bg-emerald-500/5",text: "text-emerald-400",line: "bg-emerald-500/20",dot: "border-emerald-500/40" },
};

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<RoadmapItem | null>(null);

  const handleClick = (item: RoadmapItem) => {
    setActiveItem((prev) => (prev?.step === item.step ? null : item));
  };

  return (
    <>
      <div className="relative mx-auto max-w-6xl px-4 py-10">
        {timelineNodes.map((node, nodeIndex) => (
          <div key={nodeIndex}>
            {node.type === "step" ? (
              <StepNode
                item={node.item}
                isActive={activeItem?.step === node.item.step}
                onClick={() => handleClick(node.item)}
                index={nodeIndex}
                isLast={nodeIndex === timelineNodes.length - 1}
              />
            ) : (
              <ParallelNode
                node={node}
                activeStep={activeItem?.step}
                onClickItem={handleClick}
                index={nodeIndex}
              />
            )}
          </div>
        ))}
      </div>

      {/* Side panel overlay */}
      <AnimatePresence>
        {activeItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveItem(null)}
            />
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

/* ── Single Step Node ────────────────────────── */
function StepNode({
  item,
  isActive,
  onClick,
  index,
  isLast,
}: {
  item: RoadmapItem;
  isActive: boolean;
  onClick: () => void;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative flex gap-4 max-w-2xl mx-auto"
    >
      {/* Line + Dot */}
      <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
        <motion.div
          className={`relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 bg-card ${
            isActive
              ? "border-primary shadow-[0_0_16px_hsl(var(--ring)/0.3)]"
              : "border-border"
          } transition-all duration-300`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 + 0.1 }}
        >
          <span className="text-[10px] sm:text-xs font-bold text-muted-foreground">{item.step}</span>
        </motion.div>
        {!isLast && <div className="w-px flex-1 bg-border" />}
      </div>

      {/* Card */}
      <div className="flex-1 pb-6 sm:pb-8">
        <TimelineCard item={item} isActive={isActive} onClick={onClick} />
      </div>
    </motion.div>
  );
}

/* ── Parallel Node ───────────────────────────── */
function ParallelNode({
  node,
  activeStep,
  onClickItem,
  index,
}: {
  node: Extract<TimelineNode, { type: "parallel" }>;
  activeStep?: string;
  onClickItem: (item: RoadmapItem) => void;
  index: number;
}) {
  const leftGroups = node.groups.filter((g) => g.side === "left");
  const rightGroups = node.groups.filter((g) => g.side === "right");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative"
    >
      {/* Fork indicator */}
      <div className="max-w-2xl mx-auto flex gap-4 mb-2">
        <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
          <div className="w-px h-2 bg-border" />
          <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <GitBranch className="h-3 w-3 text-primary" />
          </div>
          <div className="w-px h-2 bg-border" />
        </div>
        <div className="flex-1 flex items-center">
          <div className="rounded-lg border border-border bg-secondary/30 px-3 py-1.5 w-full">
            <span className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              {node.label}
            </span>
          </div>
        </div>
      </div>

      {/* Parallel branches grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-2 px-0 sm:px-4">
        {/* Left groups */}
        {leftGroups.map((group) => (
          <BranchColumn
            key={group.id}
            group={group}
            activeStep={activeStep}
            onClickItem={onClickItem}
          />
        ))}
        {/* Right groups */}
        {rightGroups.map((group) => (
          <BranchColumn
            key={group.id}
            group={group}
            activeStep={activeStep}
            onClickItem={onClickItem}
          />
        ))}
      </div>

      {/* Merge indicator */}
      <div className="max-w-2xl mx-auto flex gap-4 mt-1">
        <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
          <div className="w-px h-4 bg-border" />
        </div>
        <div className="flex-1 flex items-center gap-2 pb-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">↓ Semua proses nyatu di sini ges</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Branch Column ───────────────────────────── */
function BranchColumn({
  group,
  activeStep,
  onClickItem,
}: {
  group: ParallelGroup;
  activeStep?: string;
  onClickItem: (item: RoadmapItem) => void;
}) {
  const colors = branchColors[group.color] ?? branchColors.sky;

  return (
    <motion.div
      initial={{ opacity: 0, x: group.side === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border ${colors.border} ${colors.bg} p-3 sm:p-4`}
    >
      {/* Branch header */}
      <div className="flex items-center gap-2 mb-3">
        <GitBranch className={`h-3 w-3 ${colors.text}`} />
        <span className={`text-[10px] sm:text-[11px] font-semibold ${colors.text} uppercase tracking-wider`}>
          {group.label}
        </span>
      </div>

      {/* Branch items */}
      {group.items.map((item, i) => (
        <div key={item.step} className="flex gap-2.5">
          {/* Mini timeline */}
          <div className="flex flex-col items-center shrink-0 w-5">
            <div className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full border ${colors.dot} bg-card`}>
              <span className={`text-[8px] font-bold ${colors.text}`}>{i + 1}</span>
            </div>
            {i < group.items.length - 1 && (
              <div className={`w-px flex-1 ${colors.line}`} />
            )}
          </div>

          {/* Card */}
          <div className="flex-1 pb-3">
            <TimelineCard
              item={item}
              isActive={activeStep === item.step}
              onClick={() => onClickItem(item)}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Timeline;
