import { useState } from "react";
import { ChevronDown, Hammer, Cable, Settings, ClipboardCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const groups = [
  {
    icon: ClipboardCheck,
    title: "Підготовка",
    stages: [
      "Заміна корпусу печі салону з випарником та розширювальним клапаном",
      "Заміна блоку керування пічкою",
      "Заміна радіатора гідропідсилювача керма",
      "Заміна мотор-вентилятора пічки",
    ],
  },
  {
    icon: Hammer,
    title: "Монтаж",
    stages: [
      "Встановлення крана пічки та додаткової помпи",
      "Встановлення конденсатора кондиціонера",
      "Встановлення компресора кондиціонера",
      "Встановлення вентиляторів конденсатора",
    ],
  },
  {
    icon: Cable,
    title: "Підключення",
    stages: [
      "Монтаж електропроводки кондиціонера",
      "Встановлення датчика внутрішньосалонної температури",
      "Монтаж магістралі фреону",
    ],
  },
  {
    icon: Settings,
    title: "Налаштування",
    stages: [
      "Вакуумування та заправка системи",
      "Пусконалагоджувальні роботи",
    ],
  },
];

export function Process() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="process" className="bg-background py-14 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Процес встановлення</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Чотири етапи. Кожна деталь під контролем.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:mt-16 lg:grid-cols-2 items-start">
          {groups.map((g, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={g.title} delay={i * 80}>
                <div
                  className={`group overflow-hidden rounded-3xl border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-soft ${
                    isOpen ? "border-primary/40 shadow-soft" : "border-border"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 p-6 text-left md:p-8 cursor-pointer transition-colors hover:bg-primary/[0.03]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/8 text-primary transition-transform duration-300 group-hover:scale-110">
                      <g.icon className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Етап {i + 1}</span>
                      <h3 className="mt-1 text-xl font-semibold">{g.title}</h3>
                    </div>
                    <span className="hidden sm:inline text-xs uppercase tracking-[0.18em] text-primary/80">
                      {isOpen ? "Згорнути" : "Деталі"}
                    </span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "bg-primary text-primary-foreground border-primary rotate-180" : "border-border text-primary group-hover:border-primary/50 group-hover:bg-primary/5"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 px-8 pb-8">
                        {g.stages.map((s, idx) => (
                          <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                              {idx + 1}
                            </span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
