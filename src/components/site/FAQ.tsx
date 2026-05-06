import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  { q: "Скільки триває встановлення?", a: "У середньому повний цикл встановлення займає 3–5 робочих днів — залежно від модифікації Vito та обраної комплектації." },
  { q: "Які комплектуючі використовуються?", a: "Ми працюємо з оригінальними та сертифікованими компонентами перевірених виробників. Перелік узгоджується перед початком робіт." },
  { q: "Чи є гарантія?", a: "Так. Надаємо офіційну гарантію на всі виконані роботи та встановлені компоненти." },
  { q: "Чи можна встановити кондиціонер на будь-який Vito?", a: "Так, працюємо з усіма поколіннями Mercedes Vito та V-Class — від W638 до W447." },
  { q: "Як обслуговувати систему?", a: "Достатньо проходити сезонне ТО раз на рік: перевірка тиску, діагностика компонентів і за потреби — дозаправка." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Відповіді</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Часті запитання
          </h2>
        </div>
        <div className="mt-14 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className={`overflow-hidden rounded-2xl border bg-card transition-all ${isOpen ? "border-primary/30" : "border-border"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-5 p-6 text-left">
                  <span className="font-medium">{it.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground">{it.a}</p>
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
