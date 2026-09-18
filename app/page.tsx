import Link from "next/link";
import { ChordGraph } from "@/components/chord-graph";
import { FaqList } from "@/components/faq-list";
import { ProcessList } from "@/components/process-list";
import { WorkBand } from "@/components/work-band";
import {
  ABOUT,
  CONTACT,
  HERO,
  SERVICES,
  SUPPORT_PLANS,
  SUPPORT_TERMS,
  serviceAnchor,
} from "@/lib/site";
import { featuredWork } from "@/lib/work";

export default function HomePage() {
  return (
    <main>
      <section className="on-ink hero">
        <div className="shell">
          <ChordGraph />
          <div className="hero-copy">
            <h1 className="t-display">{HERO.headline}</h1>
            <p className="hero-sub">{HERO.subhead}</p>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener"
              className="btn btn-light"
            >
              Message on Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="on-paper section" aria-labelledby="services-title">
        <div className="shell">
          <h2 id="services-title" className="t-section">
            Services
          </h2>
          <ul className="services">
            {SERVICES.map((service) => (
              <li key={service.id} id={serviceAnchor(service.id)} className="service">
                <h3 className="t-statement">{service.forLine}</h3>
                <p className="t-small dim">{service.name}</p>
                <p className="t-small">{service.includes.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="on-ink section" aria-labelledby="work-title">
        <div className="shell">
          <h2 id="work-title" className="t-section">
            Work
          </h2>
        </div>
        <div className="bands">
          {featuredWork().map((item) => (
            <WorkBand key={item.slug} item={item} />
          ))}
        </div>
        <div className="shell">
          <Link href="/work" className="btn btn-light">
            View all work
          </Link>
        </div>
      </section>

      <section id="support" className="on-paper section" aria-labelledby="support-title">
        <div className="shell">
          <h2 id="support-title" className="t-section">
            Support after launch
          </h2>
          <p className="section-lead">
            A fixed monthly price, so something breaking is not a new project.
          </p>
          <ul className="plans">
            {SUPPORT_PLANS.map((plan, index) => (
              <li
                key={plan.name}
                className={index === 1 ? "plan plan-main on-ink" : "plan"}
              >
                <h3 className="t-section">{plan.name}</h3>
                <p className="dim">{plan.forLine}</p>
                <p className="plan-price">
                  {plan.price === null ? (
                    <span aria-label="Price to be confirmed">—</span>
                  ) : (
                    <>${plan.price}</>
                  )}
                  <span className="t-small dim"> / month</span>
                </p>
                <ul className="plan-includes t-small">
                  {plan.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="plan-terms t-small">
            <p>
              <strong>Not included:</strong> {SUPPORT_TERMS.notIncluded}
            </p>
            <p>
              <strong>Payment:</strong> {SUPPORT_TERMS.payment}
            </p>
          </div>
          <p className="cta-row">
            <a
              href={CONTACT.whatsapp("Hi! I would like to ask about support plans.")}
              target="_blank"
              rel="noopener"
              className="btn btn-dark"
            >
              Ask about support on WhatsApp
            </a>
          </p>
        </div>
      </section>

      <section id="process" className="on-paper section" aria-labelledby="process-title">
        <div className="shell">
          <h2 id="process-title" className="t-section">
            How we work
          </h2>
          <ProcessList />
        </div>
      </section>

      {/* Testimonials go here once they exist. */}

      <section id="why" className="on-paper section" aria-labelledby="why-title">
        <div className="shell">
          <h2 id="why-title" className="sr-only">
            Why Korda
          </h2>
          <p className="t-display about-statement">{ABOUT.statement}</p>
          <ul className="claims">
            {ABOUT.claims.map((claim) => (
              <li key={claim.title}>
                <h3 className="claim-title">{claim.title}</h3>
                <p className="t-small dim">{claim.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="on-paper section" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <h2 id="faq-title" className="t-section">
            Questions
          </h2>
          <FaqList />
        </div>
      </section>

      <section className="on-ink section final-cta" aria-labelledby="cta-title">
        <div className="shell">
          <h2 id="cta-title" className="t-statement">
            Tell us what needs building.
          </h2>
          <p className="hero-sub">
            Write on Telegram or WhatsApp. The person who replies is the person
            who builds it.
          </p>
          <p className="cta-row">
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener"
              className="btn btn-light"
            >
              Message on Telegram
            </a>
            <a
              href={CONTACT.whatsapp()}
              target="_blank"
              rel="noopener"
              className="btn btn-outline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
