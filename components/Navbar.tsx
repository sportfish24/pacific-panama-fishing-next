"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(): React.ReactElement {
  const pathname = usePathname();
  
  // Determine current locale from pathname
  const locale = pathname.startsWith('/es') ? 'es' : 'en';
  
  const links = [
    { href: `/${locale}/charters`, label: locale === 'es' ? 'Excursiones' : 'Charters' },
    { href: `/${locale}/species`, label: locale === 'es' ? 'Especies' : 'Species' },
    { href: `/${locale}/catch-log`, label: locale === 'es' ? 'Registro' : 'Catch Log' },
    { href: `/${locale}/gallery`, label: locale === 'es' ? 'Galería' : 'Gallery' },
    { href: `/${locale}/contact`, label: locale === 'es' ? 'Contacto' : 'Contact' },
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
          <Link href={switchLocaleHref}>
            {otherLocale === "en" ? "English" : "Español"}
          </Link>
        </button>
      </div>
    </nav>
  );
}
