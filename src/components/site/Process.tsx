import { useState } from "react";
import { ChevronDown, Hammer, Cable, Settings, ClipboardCheck } from "lucide-react";

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
    <section id="process" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Процес встановлення</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Чотири етапи. Кожна деталь під контролем.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-2 items-start">
          {groups.map((g, i) => {
            const isOpen = open === i;
            return (
              <div
                key={g.title}
                className={`overflow-hidden rounded-3xl border bg-card transition-all duration-500 ${
                  isOpen ? "border-primary/30 shadow-soft" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 p-6 text-left md:p-8"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/8 text-primary">
                    <g.icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Етап {i + 1}</span>
                    <h3 className="mt-1 text-xl font-semibold">{g.title}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
