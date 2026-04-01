import { Rocket, Code, Zap, Star, Flag } from "lucide-react";
import type { TimelineItemData } from "@/components/TimelineItem";

export const timelineItems: TimelineItemData[] = [
  {
    date: "January 2024",
    title: "Project Kickoff",
    description: "Initial planning and architecture design. Set up the development environment and core infrastructure.",
    icon: Rocket,
    tag: "Milestone",
  },
  {
    date: "March 2024",
    title: "Core Development",
    description: "Built the main features including user authentication, dashboard, and API integrations.",
    icon: Code,
  },
  {
    date: "June 2024",
    title: "Performance Optimization",
    description: "Improved load times by 60% through code splitting, caching strategies, and database query optimization.",
    icon: Zap,
    tag: "Update",
  },
  {
    date: "September 2024",
    title: "Beta Launch",
    description: "Released to 500 beta users. Collected feedback and iterated on UX improvements.",
    icon: Star,
    tag: "Release",
  },
  {
    date: "December 2024",
    title: "Public Launch",
    description: "Officially launched to the public with full feature set, documentation, and support channels.",
    icon: Flag,
    tag: "Milestone",
  },
];
