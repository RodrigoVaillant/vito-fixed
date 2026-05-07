import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Advantages } from "@/components/site/Advantages";
import { Price } from "@/components/site/Price";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Gallery } from "@/components/site/Gallery";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VITOCENTER — Встановлення кондиціонера на Mercedes Vito" },
      { name: "description", content: "Професійне встановлення кондиціонерів на Mercedes Vito під ключ. Гарантія, заводський підхід, оригінальні комплектуючі." },
      { property: "og:title", content: "VITOCENTER — Кондиціонери на Mercedes Vito" },
      { property: "og:description", content: "Спеціалізований сервіс встановлення кондиціонерів на Mercedes Vito з гарантією." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Advantages />
      <Price />
      <Process />
      <BeforeAfter />
      <Gallery />
      <ContactForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
