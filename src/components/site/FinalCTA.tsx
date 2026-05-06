import { Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-12 text-primary-foreground md:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Зробіть поїздки комфортними вже цього літа
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Записуйтесь на встановлення — поки є вільні місця в графіку.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]">
                Залишити заявку
              </a>
              <a href="tel:+380000000000" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                <Phone className="h-4 w-4" /> Зателефонувати
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
