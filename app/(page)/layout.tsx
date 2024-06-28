"use client";

import Footer from "@/components/reusable/Footer";
import NavbarHeader from "@/components/reusable/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarHeader />
      {children}
      <Footer />
    </>
  );
}
