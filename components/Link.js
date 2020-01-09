import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.asPath === href) {
    className = `${className} active-page-link`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
