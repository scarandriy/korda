"use client";

import { useState } from "react";
import { PROCESS } from "@/lib/site";

type Step = (typeof PROCESS)[number];

function StepDetail({ step }: { step: Step }) {
  return (
    <dl className="process-detail">
      <div>
        <dt className="t-small dim">Takes</dt>
        <dd className="t-section">{step.time}</dd>
      </div>
      <div>
        <dt className="t-small dim">What happens</dt>
        <dd>{step.what}</dd>
      </div>
      <div>
        <dt className="t-small dim">What you do</dt>
        <dd>{step.you}</dd>
      </div>
    </dl>
  );
}

export function ProcessList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="process">
      <ol className="process-steps">
        {PROCESS.map((step, index) => {
          const id = `step-${index}`;
          const isOpen = open === index;
          return (
            <li key={step.name}>
              <button
                type="button"
                className="process-step"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(index)}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setOpen(index);
                }}
                onFocus={() => setOpen(index)}
              >
                <span className="process-num t-small">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="process-name">{step.name}</span>
                <span className="process-time t-small">{step.time}</span>
              </button>
              <div id={`${id}-panel`} className="process-inline" hidden={!isOpen}>
                <StepDetail step={step} />
              </div>
            </li>
          );
        })}
      </ol>
      <div className="process-panel" aria-live="polite">
        <StepDetail step={PROCESS[open]} />
      </div>
    </div>
  );
}
