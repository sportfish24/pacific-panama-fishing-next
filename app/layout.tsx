import type { Metadata } from "next";
import "../src/app/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Pacific Panama Fishing",
  description: "World-class sport fishing in South Pacific Panama",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
