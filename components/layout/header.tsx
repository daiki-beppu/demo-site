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
    <header className="container h-16 flex items-center border-b justify-between">
      <Button variant="ghost" asChild>
        <Link href={"/"} className="font-bold">
          LOGO
        </Link>
      </Button>
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <Button asChild variant="ghost">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </header>
  );
}
