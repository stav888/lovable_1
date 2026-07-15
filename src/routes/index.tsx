import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Bento } from "@/components/site/Bento";
import { Timeline } from "@/components/site/Timeline";
import { Credibility } from "@/components/site/Credibility";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ConsultationWizard } from "@/components/site/ConsultationWizard";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero onOpenWizard={() => setWizardOpen(true)} />
      <Bento />
      <Timeline />
      <Credibility />
      <Testimonials />
      <Contact />
      <Footer />
      <ConsultationWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </main>
  );
}
