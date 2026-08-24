import type { ReactNode } from "react";
import { FloatingWhatsApp, Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
