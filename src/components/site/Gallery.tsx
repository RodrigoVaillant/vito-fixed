import station1 from "../../../images/servicestation/photo_2026-05-07_14-57-28.jpg";
import station2 from "../../../images/servicestation/photo_2026-05-07_14-57-31.jpg";
import station3 from "../../../images/servicestation/photo_2026-05-07_14-57-34.jpg";
import { Reveal } from "./Reveal";

const items = [
  {
    src: station2,
    label: "Сервісний цех VITOCENTER",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: station1,
    label: "Робочі місця для Vito",
    span: "",
  },
  {
    src: station3,
    label: "Авто в зоні обслуговування",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-14 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-base uppercase tracking-[0.25em] text-primary">СТО</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Наше СТО
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Роботи виконуємо у власному сервісному просторі з підйомниками, робочими
            зонами та досвідом обслуговування Mercedes Vito.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-[240px] grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:auto-rows-[260px]">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 100} className={it.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
