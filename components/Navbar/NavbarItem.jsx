import Link from "next/link";

export const NavbarItem = ({ href, pathname, children }) => (
  <li>
    <Link href={href}>{children}</Link>
    {pathname === href}
  </li>
);
