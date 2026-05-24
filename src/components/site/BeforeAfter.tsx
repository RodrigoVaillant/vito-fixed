import beforeImg from "../../../images/img_to.jpg";
import afterImg from "../../../images/img_before.jpg";
import { Reveal } from "./Reveal";

const benefits = [
  "Акуратне розбирання панелі",
  "Штатний вигляд після монтажу",
  "Перевірка роботи системи",
  "Гарантія на встановлення",
];

export function BeforeAfter() {
  return (
    <section className="bg-gradient-soft py-14 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base uppercase tracking-[0.25em] text-primary">До і після</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Як виглядає встановлення кондиціонера в салоні
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2">
          <Reveal>
            <Card
              img={beforeImg}
              tag="ДО"
              title="Консоль у процесі монтажу"
              desc="Панель розібрана для доступу до корпусу пічки, проводки та вузлів системи кондиціонера."
              tone="warm"
            />
          </Reveal>
          <Reveal delay={120}>
            <Card
              img={afterImg}
              tag="ПІСЛЯ"
              title="Акуратно зібраний салон"
              desc="Після встановлення панель збирається назад, а система проходить перевірку та налаштування."
              tone="cool"
            />
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <span className="text-sm font-medium">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  img,
  tag,
  title,
  desc,
  tone,
}: {
  img: string;
  tag: string;
  title: string;
  desc: string;
  tone: "warm" | "cool";
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 ${
            tone === "warm"
              ? "bg-gradient-to-t from-orange-900/40 to-transparent"
              : "bg-gradient-to-t from-primary/40 to-transparent"
          }`}
        />
        <span
          className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.2em] ${
            tone === "warm" ? "bg-orange-50 text-orange-900" : "bg-white text-primary"
          }`}
        >
          {tag}
        </span>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
