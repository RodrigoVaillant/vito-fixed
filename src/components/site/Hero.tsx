import heroImg from "@/assets/hero-vito.jpg";
import { Award, ShieldCheck, Snowflake, Wrench } from "lucide-react";

const trust = [
  { icon: Award, label: "Досвід роботи" },
  { icon: ShieldCheck, label: "Гарантія на роботи" },
  { icon: Wrench, label: "Професійне обладнання" },
  { icon: Snowflake, label: "Робота під ключ" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-primary-foreground">
      <img
        src={heroImg}
        alt="Mercedes Vito у сервісному цеху VITOCENTER"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/50 to-ink/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--primary-glow)_40%,transparent),_transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Спеціалізація - Mercedes Vito
          </div>
          <h1 className="animate-fade-up delay-100 mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Встановлення кондиціонера на{" "}
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Mercedes Vito
            </span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Повний комплект кондиціонування для Mercedes Vito: професійний монтаж,
            перевірка системи та гарантія на виконані роботи.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Забронювати встановлення
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Отримати консультацію
            </a>
          </div>
        </div>

        <div className="animate-fade-up delay-400 mt-12 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-6">
          {trust.map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-glow/20 text-primary-glow">
                <t.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-white/90">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
