import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CursorDot } from "./CursorDot";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen grain legal-pattern overflow-x-hidden">
      <CursorDot />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
