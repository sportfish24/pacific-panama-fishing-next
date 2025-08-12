import React from "react";

function Link({ href, children, ...rest }) {
  return <a href={href} {...rest}>{children}</a>;
}

export default Link;
