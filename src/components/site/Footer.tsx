import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 md:py-16">
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
          <a href="tel:+380661907070" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /> (066) 190-70-70</a>
          <a href="tel:+380961907070" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /> (096) 190-70-70</a>
          <a href="tel:+380731907070" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /> (073) 190-70-70</a>
          <a href="mailto:mail@vitocenter.com.ua" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" /> mail@vitocenter.com.ua</a>
        </FooterCol>

        <FooterCol title="Адреса">
          <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> м. Дніпро, вул. Залізної Дивізії, 27</span>
          <span className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4" /> Пн–Сб, 9:00 – 19:00</span>
        </FooterCol>

        <FooterCol title="Соцмережі">
          <div className="flex gap-3">
            <a href="https://www.instagram.com/vitocenterdnipro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:bg-muted"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.facebook.com/dnipro.vito.center.ruslan.odanets/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:bg-muted"><Facebook className="h-4 w-4" /></a>
          </div>
        </FooterCol>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-6 pt-6 text-xs text-muted-foreground md:mt-12">
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
