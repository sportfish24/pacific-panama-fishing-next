import { NextIntlClientProvider } from "next-intl";
import React from "react";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  // If desired, provide en-specific context/providers here.
  return (
    <NextIntlClientProvider locale="en">{children}</NextIntlClientProvider>
  );
}
