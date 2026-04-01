import { GraduationCap } from "lucide-react";
import Timeline from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="pt-16 pb-2 text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-5">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">Jurusan Fisika</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Prosedur Sidang s/d Wisuda
        </h1>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto text-sm">
          Roadmap lengkap dari pengajuan skripsi hingga wisuda. Klik tahapan untuk melihat detail.
        </p>
      </header>
      <Timeline />
      <footer className="pb-10 text-center">
        <p className="text-[11px] text-muted-foreground">
          Edit data di{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-primary font-mono">
            src/data/timelineData.ts
          </code>
        </p>
      </footer>
    </div>
  );
};

export default Index;
