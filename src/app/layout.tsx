import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zouphy LMS",
  description: "Sistema de Gerenciamento de Aprendizagem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Sidebar />
        <main className="flex-1 p-20 ml-56 transition-all duration-300">{children}</main>
      </body>
    </html>
  );
}
