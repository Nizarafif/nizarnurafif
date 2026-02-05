import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nizar Nur Afif | Web Developer",
  description:
    "Portfolio pribadi Nizar Nur Afif, Web Developer dari Indonesia yang berfokus pada pengembangan aplikasi web modern dan minimalis.",
  icons: {
    icon: "/nizar-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth antialiased bg-white text-[#111827]`}>
        {children}
      </body>
    </html>
  );
}
