"use client";
import { useState } from "react";
import Link from "next/link";
//import { NavbarItem } from "./NavbarItem";
import { usePathname } from "next/navigation";
import { FiMenu, FiPlus } from "react-icons/fi";
import { NavItemMobile } from "./NavItemMobile";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const menuIconStyle = { fontSize: "2.2em" };
  const XIconStyle = {
    fontSize: "2.2em",
    transform: "rotate(45deg)",
    marginLeft: "-10px",
  };

  return (
    <div className="w-full">
      <div className="lg:hidden w-full flex items-center justify-between px-6 py-6">
        <button onClick={handleNav}>
          <FiMenu style={menuIconStyle} />
        </button>
        <div className="flex gap-6">
          <Link href="/" className="flex justify-center items-center">
            <h4 className="text-2xl">AC.</h4>
          </Link>
        </div>
      </div>
      <hr class="my-4 border-grey-darker sm:mx-auto" />

      <div
        className={
          menuOpen
            ? "z-20 fixed right-0 top-0 w-full h-screen lg:hidden bg-grey-darker ease-in px-6 py-4 duration-500"
            : "z-20 fixed right-[100%] w-full h-screen top-0 ease-in px-6 py-4 duration-500"
        }
      >
        <nav className="flex flex-col w-full items-start text-background">
          <button onClick={handleNav}>
            <FiPlus style={XIconStyle} />
          </button>
          <ul className="z-30 mt-10 pr-4 text-xl flex flex-col gap-7">
            <NavItemMobile href="/" handleNav={handleNav} pathname={pathname}>
              Home
            </NavItemMobile>
            <NavItemMobile
              href="/skills"
              handleNav={handleNav}
              pathname={pathname}
            >
              Skills
            </NavItemMobile>
            <NavItemMobile
              href="/projects"
              handleNav={handleNav}
              pathname={pathname}
            >
              Projects
            </NavItemMobile>
            <NavItemMobile
              href="/contact"
              handleNav={handleNav}
              pathname={pathname}
            >
              Contact
            </NavItemMobile>
          </ul>
        </nav>
      </div>

      {/*  <nav>
        <Link href="/">
          <h3 className="font-dancingscript text-purple-darker pt-5 pl-5">
            AC.
          </h3>
        </Link>

        <ul>
          <NavbarItem href="/" pathname={pathname}>
            Hjem
          </NavbarItem>
          <NavbarItem href="/skills" pathname={pathname}>
            Skills
          </NavbarItem>
          <NavbarItem href="/projects" pathname={pathname}>
            Projects
          </NavbarItem>
          <NavbarItem href="/contact" pathname={pathname}>
            Contact
          </NavbarItem>
        </ul>
      </nav> */}
    </div>
  );
};
