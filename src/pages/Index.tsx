import Timeline from "@/components/Timeline";
import { timelineItems } from "@/data/timelineData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="pt-20 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Our Journey
        </h1>
        <p className="mt-3 text-muted-foreground">
          Key milestones that shaped our story
        </p>
      </header>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Index;
