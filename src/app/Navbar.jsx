import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function MyNavbar() {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Navbar
      fluid
      rounded
      className="bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <NavbarBrand href="#home">
        <span className="self-center whitespace-nowrap text-xl font-bold tracking-[0.25em] text-slate-800 dark:text-slate-50 transition-colors">
          SUJIT
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-2 md:order-2">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-300 flex items-center justify-center cursor-pointer border border-slate-200 dark:border-slate-800 shadow-sm"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <LightModeIcon className="w-5 h-5 text-amber-400 animate-pulse" />
          ) : (
            <DarkModeIcon className="w-5 h-5 text-slate-700" />
          )}
        </button>
        <NavbarToggle className="hover:bg-slate-100 dark:hover:bg-slate-800/60" />
      </div>

      <NavbarCollapse className="md:order-1">
        <NavbarLink
          href="#home"
          active={activeHash === "#home"}
          className="text-sm font-semibold tracking-wide"
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="#about"
          active={activeHash === "#about"}
          className="text-sm font-semibold tracking-wide"
        >
          About
        </NavbarLink>
        <NavbarLink
          href="#skills"
          active={activeHash === "#skills"}
          className="text-sm font-semibold tracking-wide"
        >
          Skills
        </NavbarLink>
        <NavbarLink
          href="#portfolio"
          active={activeHash === "#portfolio"}
          className="text-sm font-semibold tracking-wide"
        >
          Portfolio
        </NavbarLink>
        <NavbarLink
          href="#contact"
          active={activeHash === "#contact"}
          className="text-sm font-semibold tracking-wide"
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
