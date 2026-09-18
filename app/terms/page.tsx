import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Korda website.",
};

export default function TermsPage() {
  return (
    <main className="on-paper page-top legal">
      <div className="shell">
        <h1 className="t-statement">Terms</h1>
        <div className="prose">
          <p>
            This site is operated by {SITE.legalEntity ?? SITE.name}. Content,
            design and code on this site belong to {SITE.name} unless a case page
            names another owner.
          </p>
          <p>
            Linked live sites belong to their clients. A case page describes
            work we did; it is not an endorsement of the client’s current
            business.
          </p>
          <p>
            Project work is governed by a written agreement, not by this page.
          </p>
          <p>
            Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
