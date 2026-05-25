import { Target, Package, Settings2, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Target, title: "Досвід роботи", text: "16 років професійної роботи з Mercedes-Benz Vito та точне розуміння всіх особливостей моделі." },
  { icon: ShieldCheck, title: "Гарантія на роботи", text: "14 днів гарантії на монтаж, перевірку системи та виконані роботи." },
  { icon: Settings2, title: "Професійне обладнання", text: "Оригінальна діагностика Mercedes DAS / XENTRY для точної перевірки та коректної роботи системи." },
  { icon: Package, title: "Робота під ключ", text: "Повний комплекс робіт: від монтажу до заправки, перевірки та фінального тестування системи." },
];

export function Advantages() {
  return (
    <section id="advantages" className="bg-gradient-soft py-14 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base uppercase tracking-[0.25em] text-primary">Чому VITOCENTER</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Професійний монтаж із заводським підходом
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ми зосереджені на одній моделі — і робимо це краще за інших.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary/8 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
