import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Korda — Contact";

export default function OpenGraphImage() {
  return ogImage({ title: "Write to us.", caption: "Telegram · WhatsApp" });
}
