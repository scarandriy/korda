import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What the Korda website collects, and what it does not.",
};

export default function PrivacyPage() {
  return (
    <main className="on-paper page-top legal">
      <div className="shell">
        <h1 className="t-statement">Privacy policy</h1>
        <div className="prose">
          <p>
            This site has no forms and sets no tracking cookies. If you write to
            us on Telegram, WhatsApp or by email, we receive what you send there
            and use it only to reply and to discuss your project.
          </p>
          <p>
            We do not sell your information, share it with advertisers, or add
            you to a marketing list.
          </p>
          <p>
            To ask what we hold, or to ask us to delete it, write to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
