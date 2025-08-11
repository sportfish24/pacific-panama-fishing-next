"use client";
import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const links = [
    { href: `/${locale}/charters`, label: t("charters") },
    { href: `/${locale}/species`, label: t("species") },
    { href: `/${locale}/catch-log`, label: t("catchLog") },
    { href: `/${locale}/gallery`, label: t("gallery") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = locale === "en" ? "es" : "en";
  const switchLocaleHref = `/${otherLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href={`/${locale}`} className="logo">
          Pacific Panama 🇵🇦 Fishing
        </Link>
        <ul className="nav-menu">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="lang-toggle">
          <Link href={switchLocaleHref} prefetch={false}>
            {otherLocale === "en" ? "English" : "Español"}
          </Link>
        </button>
      </div>
    </nav>
  );
}
