import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect, useState } from "react";

export default function MyNavbar() {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <Navbar fluid rounded className="bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <NavbarBrand href="#home">
        <span className="self-center whitespace-nowrap text-xl font-semibold tracking-[0.25em] text-slate-50">
          SUJIT
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#home" active={activeHash === "#home"}>
          Home
        </NavbarLink>
        <NavbarLink href="#about" active={activeHash === "#about"}>
          About
        </NavbarLink>
        <NavbarLink href="#skills" active={activeHash === "#skills"}>
          Skills
        </NavbarLink>
        <NavbarLink href="#portfolio" active={activeHash === "#portfolio"}>
          Portfolio
        </NavbarLink>
        <NavbarLink href="#contact" active={activeHash === "#contact"}>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
