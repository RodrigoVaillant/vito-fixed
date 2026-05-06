import { Target, Clock, ShieldCheck, Package, Settings2, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Target, title: "Вузька спеціалізація", text: "Працюємо виключно з Mercedes Vito — знаємо кожну деталь авто." },
  { icon: Clock, title: "Великий досвід", text: "Сотні встановлених систем кондиціонування під ключ." },
  { icon: ShieldCheck, title: "Гарантія на роботи", text: "Офіційна гарантія на монтаж і всі виконані роботи." },
  { icon: Package, title: "Перевірені комплектуючі", text: "Оригінальні та сертифіковані компоненти від надійних брендів." },
  { icon: Settings2, title: "Повний цикл", text: "Від демонтажу до пусконалагоджувальних робіт — все в одному місці." },
  { icon: Activity, title: "Діагностика та налаштування", text: "Точна перевірка і калібрування системи після монтажу." },
];

export function Advantages() {
  return (
    <section id="advantages" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Чому VITOCENTER</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Заводський підхід до кожного встановлення
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ми зосереджені на одній моделі — і робимо це краще за інших.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
