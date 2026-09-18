import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/lib/work";

function Frames({ item }: { item: WorkItem }) {
  const { images } = item;
  return (
    <div className="frames">
      {images?.backdrop ? (
        <Image
          src={images.backdrop}
          alt=""
          fill
          sizes="100vw"
          className="frames-backdrop"
        />
      ) : null}
      <div className="frame frame-desktop">
        <div className="frame-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{item.domain}</span>
        </div>
        <div className="frame-screen">
          {images ? (
            <Image
              src={images.desktop}
              alt={`${item.name} website on desktop`}
              fill
              sizes="(min-width: 768px) 70vw, 100vw"
            />
          ) : (
            <span className="frame-standin" aria-hidden="true">
              {item.name}
            </span>
          )}
        </div>
      </div>
      <div className="frame frame-phone">
        <div className="frame-screen">
          {images ? (
            <Image
              src={images.mobile}
              alt={`${item.name} website on a phone`}
              fill
              sizes="(min-width: 768px) 16rem, 60vw"
            />
          ) : (
            <span className="frame-standin" aria-hidden="true">
              {item.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function VisitLink({ item }: { item: WorkItem }) {
  if (!item.url) return null;
  return (
    <a href={item.url} target="_blank" rel="noopener" className="link">
      Visit site
    </a>
  );
}

export function WorkBand({
  item,
  headingLevel = 3,
}: {
  item: WorkItem;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="band">
      <header className="band-head t-small">
        <Heading className="band-name">
          <Link href={`/work/${item.slug}`}>{item.name}</Link>
        </Heading>
        <p className="dim">{item.niche}</p>
      </header>
      <Frames item={item} />
      <div className="band-foot">
        <div>
          <p className="t-small dim">{item.type}</p>
          <p className="band-summary">{item.summary}</p>
        </div>
        <p className="band-links">
          <Link href={`/work/${item.slug}`} className="link">
            Read the case
          </Link>
          <VisitLink item={item} />
        </p>
      </div>
    </article>
  );
}

export { Frames };
