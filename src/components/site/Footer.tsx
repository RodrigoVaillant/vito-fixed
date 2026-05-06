import { Phone, Send, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground font-bold">V</span>
            <span className="font-display text-lg font-semibold tracking-tight">VITOCENTER</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Спеціалізований сервіс встановлення кондиціонерів на Mercedes Vito.
          </p>
        </div>

        <FooterCol title="Контакти">
          <a href="tel:+380000000000" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /> +380 (00) 000 00 00</a>
          <a href="https://t.me/vitocenter" className="flex items-center gap-2 hover:text-foreground"><Send className="h-4 w-4" /> @vitocenter</a>
        </FooterCol>

        <FooterCol title="Адреса">
          <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> м. Київ, вул. Сервісна, 1</span>
          <span className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4" /> Пн–Сб, 9:00 – 19:00</span>
        </FooterCol>

        <FooterCol title="Соцмережі">
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:bg-muted"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:bg-muted"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Telegram" className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:bg-muted"><Send className="h-4 w-4" /></a>
          </div>
        </FooterCol>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} VITOCENTER. Усі права захищено.
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
