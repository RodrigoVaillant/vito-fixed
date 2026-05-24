import { ArrowRight, BadgeEuro, CalendarClock, CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const included = [
  "Комплект кондиціонера",
  "Монтаж під ключ",
  "Заправка та перевірка системи",
  "Гарантія на виконані роботи",
];

export function Price() {
  return (
    <section id="price" className="bg-background py-14 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-base uppercase tracking-[0.25em] text-primary">Вартість</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Прозора вартість без прихованих платежів
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Базова вартість встановлення кондиціонера на Mercedes Vito вказана одразу,
              щоб ви швидко прийняли рішення і залишили заявку без зайвого очікування.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-soft p-6 shadow-soft md:p-8">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-glow/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <BadgeEuro className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Під ключ
                </span>
              </div>

              <div className="mt-7">
                <div className="flex items-end gap-3">
                  <span className="font-display text-6xl font-semibold tracking-tight text-foreground md:text-7xl">
                    900
                  </span>
                  <span className="pb-2 text-2xl font-semibold text-muted-foreground">€</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  У вартість входить комплект кондиціонування, монтаж, підключення,
                  налаштування та перевірка роботи системи.
                </p>
                <p className="mt-2 text-xs text-muted-foreground/70">
                  Додаткові роботи погоджуються до початку монтажу.
                </p>
              </div>

              <div className="mt-7 grid gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5 text-primary" />
                  <span>Запис на найближчу вільну дату</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>Безкоштовна консультація перед встановленням</span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Забронювати встановлення
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
