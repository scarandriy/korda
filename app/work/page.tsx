import type { Metadata } from "next";
import { WorkBand } from "@/components/work-band";
import { WorkFilter } from "@/components/work-filter";
import { WORK } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live sites Korda built: real estate with a custom admin panel, a worldwide jewellery store, a legal services site and more.",
};

export default function WorkPage() {
  const bands = Object.fromEntries(
    WORK.map((item) => [item.slug, <WorkBand key={item.slug} item={item} headingLevel={2} />]),
  );

  return (
    <main className="on-ink page-top">
      <div className="shell">
        <h1 className="t-display">Work</h1>
        <p className="hero-sub">
          Live sites for real businesses. Each one opens in a new tab, so you
          can check it yourself.
        </p>
      </div>
      <WorkFilter bands={bands} />
    </main>
  );
}
