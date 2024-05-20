import Link from "next/link";

export const NavItemMobile = ({ handleNav, href, pathname, children }) => (
  <li role="menuitem">
    <Link onClick={handleNav} href={href} className={`${pathname === href}`}>
      {children}
    </Link>
    {pathname === href && (
      <div className="z-30 w-2 h-2 rounded-[1.5px] rotate-45"></div>
    )}
  </li>
);
