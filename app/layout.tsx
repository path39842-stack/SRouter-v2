import "./globals.css";
import type { Metadata } from "next";

/*
 * Font Google diganti CSS variable lokal.
 *
 * SEBAB: `next/font/google` mengunduh font dari Google saat BUILD.
 * Di lingkungan build yang tidak bisa keluar ke fonts.gstatic.com, loader
 * gagal dengan "TypeError: Cannot read properties of null (reading '1')"
 * dan seluruh build berhenti.
 *
 * Solusi: pakai font stack sistem. Tidak ada unduhan, build selalu jalan,
 * tampilan tetap rapi (fallback modern).
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
      <body>{children}</body>
    </html>
  );
}
