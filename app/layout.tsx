import type { Metadata } from "next";
import { Bricolage_Grotesque, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Display face: Bricolage has visible quirks at large sizes, which is the
// point — it stops the headlines reading like a default UI font.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Text face: Archivo is a plain workhorse, deliberately quiet next to it.
const text = Archivo({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Global Initiative - Changing the world. One problem at a time.",
  description:
    "A student-led nonprofit organization dedicated to making real, measurable impact through community-driven initiatives.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
