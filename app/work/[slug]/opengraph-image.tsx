import { OG_SIZE, ogImage } from "@/lib/og";
import { WORK, getWork } from "@/lib/work";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Korda case study";

export function generateStaticParams() {
  return WORK.map((item) => ({ slug: item.slug }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  return ogImage({
    title: item?.name ?? "Work",
    caption: item ? `${item.niche} · ${item.type}` : undefined,
  });
}
