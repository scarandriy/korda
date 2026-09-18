import { FAQ } from "@/lib/site";

export function FaqList() {
  return (
    <div className="faq">
      {FAQ.map((item) => (
        <details key={item.q} name="faq" className="faq-item">
          <summary>
            <span>{item.q}</span>
            <span aria-hidden="true" className="faq-mark" />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
