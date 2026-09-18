import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Korda on Telegram or WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="on-ink page-top contact">
      <div className="shell">
        <h1 className="t-display">Write to us.</h1>
        <p className="hero-sub">
          Tell us what you have today and what you need. The person who replies
          is the person who builds it.
        </p>
        <ul className="contact-main">
          <li>
            <a href={CONTACT.telegram} target="_blank" rel="noopener">
              Telegram
            </a>
          </li>
          <li>
            <a href={CONTACT.whatsapp()} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </li>
        </ul>
        <p className="t-small dim contact-rest">
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
      </div>
    </main>
  );
}
