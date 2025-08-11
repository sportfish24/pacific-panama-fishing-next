const React = require("react");

function NextIntlClientProvider({ children }) {
  return React.createElement(React.Fragment, null, children);
}

module.exports = {
  useTranslations: () => (key) => key,
  useLocale: () => "en",
  useFormatter: () => (value) => value,
  useMessages: () => ({}),
  useNow: () => new Date(),
  useTimeZone: () => "UTC",
  NextIntlClientProvider,
};
