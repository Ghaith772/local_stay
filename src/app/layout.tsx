import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles.css";

export const metadata: Metadata = {
  title: {
    default: "Local Stay",
    template: "%s | Local Stay",
  },
  description: "منصة لتأجير العقارات السكنية والترفيهية داخل سوريا.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="page-enter flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
