import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProGlide Garage Doors | Instalación y Reparación Premium",
  description: "Servicios profesionales y premium de reparación, cambio de resortes e instalación de portones de garaje modernos. Atención de emergencias 24/7.",
  keywords: ["reparación de portones", "instalación de puertas de garaje", "resortes de garaje", "portones modernos", "servicio de emergencia 24/7"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
