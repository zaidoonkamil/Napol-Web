import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Napol Tg | حلول رقمية احترافية",
  description:
    "Napol Tg شركة رقمية متخصصة بتصميم وبرمجة التطبيقات والمواقع الاحترافية مع حضور بصري راقٍ.",
  icons: {
    icon: "/site-icon.svg",
    shortcut: "/site-icon.svg",
    apple: "/site-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
