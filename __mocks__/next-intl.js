import React from "react";

export function NextIntlClientProvider({ children }) {
  return <>{children}</>;
}

export const useTranslations = () => (key) => key;
export const useLocale = () => "en";
export const useFormatter = () => (value) => value;
export const useMessages = () => ({});
export const useNow = () => new Date();
export const useTimeZone = () => "UTC";
