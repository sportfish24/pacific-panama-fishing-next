import React from "react";
import { useTranslations } from "next-intl";

export default function CatchLogEN() {
  const t = useTranslations("catchLog");
  return (
    <>
      <main>
        <h1>{t("title")}</h1>
        {/* ...migrate rest of content from en/pages/catch-log.html... */}
      </main>
    </>
  );
}
