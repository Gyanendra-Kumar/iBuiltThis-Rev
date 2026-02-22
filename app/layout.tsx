import type { Metadata } from "next";
import Footer from "../components/landing-page/footer";
import Header from "../components/landing-page/header";
import { outfit } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "iBuiltThis - Share Your Creations, Discover New Launches",
  description:
    "A community platform for creators to showcase their apps, AI tools, SAAS products and creative projects. Authentic launches, real builder, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
