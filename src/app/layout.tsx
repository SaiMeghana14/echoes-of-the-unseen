import type { Metadata } from "next";

import "@/styles/globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Echoes of the Unseen",
  description:
    "What Humanity Forgets, We Remember.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <div className="starfield" />

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
