import { GraduationCap } from "lucide-react";
import Timeline from "@/components/Timeline";
import { timelineItems } from "@/data/timelineData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="pt-20 pb-4 text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-6">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">Jurusan Fisika</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Prosedur Sidang s/d Wisuda
        </h1>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
          Roadmap lengkap tahapan yang harus dilalui mahasiswa Fisika dari pengajuan skripsi hingga wisuda.
        </p>
      </header>
      <Timeline items={timelineItems} />
      <footer className="pb-12 text-center">
        <p className="text-xs text-muted-foreground">
          Data dapat diperbarui di{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-[11px] text-primary">
            src/data/timelineData.ts
          </code>
        </p>
      </footer>
    </div>
  );
};

export default Index;
