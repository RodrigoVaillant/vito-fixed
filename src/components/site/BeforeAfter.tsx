import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const benefits = [
  "Комфорт у спеку",
  "Підвищення вартості авто",
  "Комфорт для пасажирів",
  "Надійна робота системи",
];

export function BeforeAfter() {
  return (
    <section className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">До і після</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Відчутна різниця з першої поїздки
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Card img={beforeImg} tag="ДО" title="Спека та дискомфорт" desc="Перегрів, втома, відчуття задухи — особливо в довгій дорозі." tone="warm" />
          <Card img={afterImg} tag="ПІСЛЯ" title="Прохолода і спокій" desc="Стабільна температура, чисте повітря, повний контроль клімату." tone="cool" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b} className="rounded-2xl border border-border bg-card p-5 text-center">
              <span className="text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ img, tag, title, desc, tone }: { img: string; tag: string; title: string; desc: string; tone: "warm" | "cool" }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className={`absolute inset-0 ${tone === "warm" ? "bg-gradient-to-t from-orange-900/40 to-transparent" : "bg-gradient-to-t from-primary/40 to-transparent"}`} />
        <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.2em] ${tone === "warm" ? "bg-orange-50 text-orange-900" : "bg-white text-primary"}`}>{tag}</span>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
