import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
 
import "../globals.css";

export const metadata: Metadata = {
  title: "Пицца от Руслана | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
