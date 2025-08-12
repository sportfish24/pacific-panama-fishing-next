
import React from "react";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): React.ReactElement {
  const { locale } = params;

  // Validate locale
  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  return <>{children}</>;
}
