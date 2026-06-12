import type { Metadata } from "next";
import "@/styles/globals.css";

import Navbar from "@/components/common/Navbar";
import FloatingNav from "@/components/common/FloatingNav";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Echoes of the Unseen",
  description:
    "AI Guardian of Human Memory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-blue">
        <FloatingNav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
