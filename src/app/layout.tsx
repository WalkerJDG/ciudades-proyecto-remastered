import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyecto SENA – Web React 2025",
  description: "Aplicación de ciudades desarrollada con Next.js y TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} min-h-screen bg-gray-50 text-gray-900`}
      >
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
