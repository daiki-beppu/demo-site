import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mood-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="container h-16 flex items-center border-b">
      <Button variant="ghost" asChild className="font-bold">
        <Link href={"/"}>Blog</Link>
      </Button>
      <span className="flex-1"></span>
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item.label}>
            <Button asChild variant="ghost">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <span className="flex-1"></span>
      <ModeToggle />
    </header>
  );
}
