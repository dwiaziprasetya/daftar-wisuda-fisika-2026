import { GraduationCap } from "lucide-react";
import Timeline from "@/components/Timeline";
import ThemeToggle from "@/components/ThemeToggle";
import { APP_CONFIG } from "@/config/appConfig";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <header className="pt-16 pb-2 text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-5">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Fisika UNDIP • Unofficial
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Daftar Wisuda Fisika 2026
        </h1>

        <p className="mt-2 text-muted-foreground max-w-md mx-auto text-sm">
          Alur dari daftar Wisuda, daftar HKI, dan Kelulusan ya ges ya
        </p>
      </header>

      <Timeline />

      <footer className="pb-10 text-center space-y-2">
        <p className="text-[11px] text-muted-foreground">
          Last update:{" "}
          <span className="font-medium text-foreground">
            Wisuda {APP_CONFIG.wisudaTerakhir}
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Index;