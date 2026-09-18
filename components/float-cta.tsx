"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/site";

// Mobile only (hidden by CSS from 768px). Shown once the page's own
// Telegram button is off screen, so the two never sit on top of each other.
export function FloatCta() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={CONTACT.telegram}
      target="_blank"
      rel="noopener"
      className="btn btn-light float-cta"
      data-shown={shown || undefined}
      tabIndex={shown ? undefined : -1}
      aria-hidden={shown ? undefined : true}
    >
      Message on Telegram
    </a>
  );
}
