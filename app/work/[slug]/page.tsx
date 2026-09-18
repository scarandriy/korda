import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frames, VisitLink } from "@/components/work-band";
import { CONTACT } from "@/lib/site";
import { WORK, adjacentWork, getWork } from "@/lib/work";

export function generateStaticParams() {
  return WORK.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getWork(slug);
  if (!item) return {};
  return { title: item.name, description: item.summary };
}

export default async function WorkCasePage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const item = getWork(slug);
  if (!item) notFound();
  const { prev, next } = adjacentWork(item.slug);

  return (
    <main>
      <section className="on-ink page-top">
        <div className="shell">
          <p className="t-small">
            <Link href="/work" className="dim">
              All work
            </Link>
          </p>
          <h1 className="t-display case-title">{item.name}</h1>
          <p className="t-small dim">
            {item.niche} · {item.type}
          </p>
        </div>
        <div className="band">
          <Frames item={item} />
        </div>
      </section>

      <section className="on-paper section">
        <div className="shell case-body">
          <dl className="case-facts t-small">
            <div>
              <dt className="dim">Client</dt>
              <dd>{item.niche}</dd>
            </div>
            <div>
              <dt className="dim">Work</dt>
              <dd>{item.type}</dd>
            </div>
            {item.url ? (
              <div>
                <dt className="dim">Live</dt>
                <dd>
                  <VisitLink item={item} />
                </dd>
              </div>
            ) : null}
          </dl>
          <div className="case-text">
            <div>
              <h2 className="t-section">The problem</h2>
              <p>{item.problem}</p>
            </div>
            <div>
              <h2 className="t-section">What we built</h2>
              <p>{item.built}</p>
            </div>
            {item.result ? (
              <div>
                <h2 className="t-section">What changed</h2>
                <p>{item.result}</p>
              </div>
            ) : null}
            <p className="cta-row">
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener"
                className="btn btn-dark"
              >
                Talk about a similar project
              </a>
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="More work" className="on-paper case-nav">
        <div className="shell case-nav-row">
          <Link href={`/work/${prev.slug}`}>
            <span className="t-small dim">Previous</span>
            <span className="t-section">{prev.name}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="case-nav-next">
            <span className="t-small dim">Next</span>
            <span className="t-section">{next.name}</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
