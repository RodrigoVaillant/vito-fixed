import { useState } from "react";
import { BadgeEuro, Clock, Phone } from "lucide-react";

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 12);
  if (digits.length === 0) return "";
  let result = "+";
  if (digits.length <= 3) return result + digits;
  result += digits.slice(0, 3) + " (";
  if (digits.length <= 5) return result + digits.slice(3);
  result += digits.slice(3, 5) + ") ";
  if (digits.length <= 8) return result + digits.slice(5);
  result += digits.slice(5, 8) + " ";
  if (digits.length <= 10) return result + digits.slice(8);
  result += digits.slice(8, 10) + " ";
  result += digits.slice(10, 12);
  return result;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-14 text-primary-foreground md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_color-mix(in_oklab,var(--primary-glow)_30%,transparent),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary-glow">Заявка на встановлення</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Кондиціонер для Mercedes Vito — встановлення під ключ від 900 €
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Перевіримо сумісність саме з вашим Vito, узгодимо комплектацію та
            забронюємо найближчу дату встановлення.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <BadgeEuro className="h-6 w-6 text-primary-glow" />
            <div>
              <div className="text-2xl font-semibold">900 €</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/55">Монтаж + комплектуючі + заправка</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/45">
            Фінальна вартість залежить від комплектації авто та обраної системи.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
            <Clock className="h-5 w-5 text-primary-glow" />
            Відповімо протягом 15 хвилин
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setError(false);
            const form = e.currentTarget;
            const data = {
              name: (form.elements.namedItem("name") as HTMLInputElement).value,
              phone,
              year: (form.elements.namedItem("year") as HTMLInputElement).value,
              model: (form.elements.namedItem("model") as HTMLSelectElement).value,
            };
            try {
              const res = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });
              if (res.ok) {
                setSent(true);
              } else {
                setError(true);
              }
            } catch {
              setError(true);
            } finally {
              setLoading(false);
            }
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10"
        >
          {sent ? (
            <div className="grid place-items-center py-10 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary-glow/20 text-2xl">✓</div>
              <h3 className="mt-5 text-2xl font-semibold">Заявку прийнято</h3>
              <p className="mt-2 text-white/70">Ми зателефонуємо вам найближчим часом.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <Field label="Ваше ім'я" name="name" placeholder="Андрій" />
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-white/60">Телефон</label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="+380 (XX) XXX XX XX"
                  required
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary-glow"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Рік авто" name="year" placeholder="2018" />
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-white/60">Модель Vito</label>
                  <select name="model" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary-glow">
                    <option className="bg-ink">Vito W639</option>
                    <option className="bg-ink">Vito W447</option>
                    <option className="bg-ink">V-Class</option>
                  </select>
                </div>
              </div>
              {error && (
                <p className="text-center text-sm text-red-400">Помилка відправки. Зателефонуйте нам.</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Відправляємо..." : "Забронювати встановлення за 900 €"}
                {!loading && <span className="transition-transform group-hover:translate-x-1">→</span>}
              </button>
              <a href="tel:+380000000000" className="flex items-center justify-center gap-2 text-sm text-white/70 hover:text-white">
                <Phone className="h-4 w-4" /> або зателефонуйте нам
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-white/60">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary-glow"
      />
    </div>
  );
}
