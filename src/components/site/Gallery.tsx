import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { Reveal } from "./Reveal";

const items = [
  { src: g3, label: "Процес встановлення", span: "md:col-span-2 md:row-span-2" },
  { src: g1, label: "Підкапотний монтаж", span: "" },
  { src: g2, label: "Салон та клімат-контроль", span: "" },
  { src: g4, label: "Mercedes Vito", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Галерея</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Наші роботи
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Сервісний цех, етапи встановлення та готові системи на Mercedes Vito.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100} className={it.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                <img src={it.src} alt={it.label} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-5 left-5 translate-y-3 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {it.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
