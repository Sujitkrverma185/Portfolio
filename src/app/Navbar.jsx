
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function MyNavbar() {
  return (
    <Navbar fluid rounded className="bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <NavbarBrand href="#home">
        <span className="self-center whitespace-nowrap text-xl font-semibold tracking-[0.25em] text-slate-50">
          SUJIT
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#home" active>
          Home
        </NavbarLink>
        <NavbarLink href="#about">
          About
        </NavbarLink>
        <NavbarLink href="#skills">
          Skills
        </NavbarLink>
        <NavbarLink href="#portfolio">
          Portfolio
        </NavbarLink>
        <NavbarLink href="#contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
