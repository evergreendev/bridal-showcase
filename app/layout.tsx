import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "49th Annual Bridal Showcase",
  description:
    "Black Hills Bridal Showcase in Rapid City, SD — meet photographers, florists, DJs, venues, planners, beauty pros and more. Get tickets, fashion show times, prizes, dates, and details for the 49th Annual Bridal Showcase at the Best Western Ramkota.",
  keywords: [
    "49th Annual Bridal Showcase",
    "Black Hills bridal showcase",
    "Black Hills bridal show",
    "Rapid City bridal showcase",
    "Rapid City bridal show",
    "bridal show Rapid City",
    "wedding expo Black Hills",
    "wedding expo Rapid City",
    "bridal showcase BH",
    "black hills bridal show case"
  ],
  openGraph: {
    title: "49th Annual Bridal Showcase | Rapid City, Black Hills",
    description:
      "Plan to attend the 49th Annual Bridal Showcase — meet top wedding professionals in the Black Hills. Tickets, fashion show times, prizes, and details.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-50 text-zinc-800`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M2GF8J6833" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M2GF8J6833');
          `}
        </Script>
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-pink-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center text-black">
            <nav aria-label="Primary" className="hidden sm:flex gap-6 text-sm font-medium">
              <a href="#dates" className="hover:text-pink-700">Dates</a>
              <a href="#fashion" className="hover:text-pink-700">Vendors & Prizes</a>
              <a href="#sponsors" className="hover:text-pink-700">Sponsors</a>
              <a href="https://www.eventbrite.com/e/1762416438009?aff=oddtdtcreator" className="hover:text-pink-700">Buy Tickets</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-pink-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Bridal Showcase" width={120} height={45} className="object-contain" />
              <span>© {new Date().getFullYear()} Bridal Showcase</span>
            </div>
            <div className="flex gap-6">
              <Link className="hover:text-pink-700" href="#dates">Dates</Link>
              <Link className="hover:text-pink-700" href="#fashion">Vendors & Prizes</Link>
              <Link className="hover:text-pink-700" href="#sponsors">Sponsors</Link>
              <Link className="hover:text-pink-700" href="https://www.eventbrite.com/e/1762416438009?aff=oddtdtcreator">Tickets</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
