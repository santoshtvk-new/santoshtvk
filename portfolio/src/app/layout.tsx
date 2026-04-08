import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santoshtvk.github.io"),
  title: "santoshtvk > portfolio",
  description:
    "An immersive portfolio for santoshtvk aka (Tharigoppala Venkata Santosh Kumar), Senior Python automation engineer, founder of Pynfinity, and builder of practical AI-ready systems.",
  keywords: [
    "T Venkata Santosh Kumar",
    "Tharigoppala",
    "santoshtvk",
    "Python developer",
    "automation engineer",
    "Pynfinity",
    "Flask",
    "AI systems",
    "QA automation",
    "portfolio",
  ],
  openGraph: {
    title: "Santoshtvk | Portfolio",
    description:
      "Explore a cinematic portfolio world showcasing Python, automation, AI, backend engineering, and founder-led product building.",
    images: ["/images/portrait-formal.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
