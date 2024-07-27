import type { Metadata } from "next";
import "./globals.css";
// import "@/public/fonts/fontawesome-free-6.1.2-web/css/all.min.css";

export const metadata: Metadata = {
  title: "Portfolio - Santiago Suarez",
  description: "Personal portfolio of Santiago Suarez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
