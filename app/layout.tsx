import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import TopInfo from "@/components/common/TopInfo";
import Footer from "@/components/common/Footer";
import SearchBarMobile from "@/components/common/SearchBarMobile";

export const metadata: Metadata = {
  title: "বইপোকা",
  description: "In the city of books, the light of knowledge shines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <TopInfo />
        <Navbar />
        <SearchBarMobile />

        <main className="min-h-screen bg-gray-200">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
