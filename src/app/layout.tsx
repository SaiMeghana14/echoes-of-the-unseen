import type { Metadata } from "next";
import "@/styles/globals.css";

import FloatingNav from "@/components/common/FloatingNav";
import FloatingActions from "@/components/common/FloatingActions";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Echoes of the Unseen",
  description: "AI Guardian of Human Memory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FloatingNav />

        {children}

        <FloatingActions />

        <Footer />
      </body>
    </html>
  );
}
