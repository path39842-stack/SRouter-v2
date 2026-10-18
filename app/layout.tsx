import "./globals.css";
import type { Metadata } from "next";

/*
 * Font: Inter + JetBrains Mono, DI-HOST SENDIRI (public/fonts/).
 *
 * Kenapa bukan `next/font/google`: loader itu mengunduh font dari Google
 * SAAT BUILD. Di lingkungan build tanpa akses fonts.gstatic.com, build gagal
 * dengan "TypeError: Cannot read properties of null (reading '1')".
 *
 * Hasil visual identik: nama variabel CSS sama seperti aslinya
 * (--font-inter dan --font-mono), sehingga globals.css tidak perlu diubah.
 * File @font-face ada di public/fonts.css dan diimpor di bawah.
 */

export const metadata: Metadata = {
  title: "SRouter",
  description: "Simple personal AI router",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/fonts.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
