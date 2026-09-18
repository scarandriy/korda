import Link from "next/link";
import { FloatCta } from "@/components/float-cta";
import { CONTACT } from "@/lib/site";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#support", label: "Support" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <>
      <header className="site-header on-ink">
        <div className="shell header-row">
          <Link href="/" className="logo">
            korda
          </Link>
          <nav aria-label="Main" className="header-nav">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener"
            className="btn btn-light header-cta"
          >
            Telegram
          </a>
        </div>
      </header>
      <FloatCta />
    </>
  );
}
