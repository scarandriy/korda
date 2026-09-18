import { HERO } from "@/lib/site";
import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Korda";

export default function OpenGraphImage() {
  return ogImage({ title: HERO.headline });
}
