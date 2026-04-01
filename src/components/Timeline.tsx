import { motion } from "framer-motion";
import { TimelineItem, type TimelineItemData } from "./TimelineItem";

interface TimelineProps {
  items: TimelineItemData[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-12">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
        >
          <TimelineItem item={item} index={index} total={items.length} />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
