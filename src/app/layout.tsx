import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etudiantz - Student Services",
  description: "Professional student services platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
