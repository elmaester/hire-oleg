import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
  const router = useRouter();

  let className = "";
  if (router.asPath === href) {
    className = "active-page-link";
  }

  return (
    <li className={className}>
      <Link href={href}>{React.cloneElement(children)}</Link>
    </li>
  );
};

export default NavLink;
