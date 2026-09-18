import Link from "next/link";
import { CONTACT, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-ink site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="logo">
            korda
          </Link>
          <nav aria-label="Footer" className="footer-nav t-small">
            <Link href="/work">Work</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#support">Support</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-messengers">
          <a href={CONTACT.telegram} target="_blank" rel="noopener">
            Telegram
          </a>
          <a href={CONTACT.whatsapp()} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="shell footer-small t-small dim">
        <p className="footer-links">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={CONTACT.x} target="_blank" rel="noopener">
            X
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
        </p>
        <p className="footer-links">
          <span>
            © {new Date().getFullYear()} {SITE.legalEntity ?? SITE.name}
          </span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
