import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Korda — Work";

export default function OpenGraphImage() {
  return ogImage({ title: "Work", caption: "Live sites for real businesses" });
}
