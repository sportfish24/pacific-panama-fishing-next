const React = require("react");

function Link({ href, children, prefetch, replace, scroll, shallow, ...rest }) {
  // Omit Next.js-specific props not valid on <a>
  return React.createElement("a", { href, ...rest }, children);
}

module.exports = Link;
