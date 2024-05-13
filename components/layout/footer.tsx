import { ModeToggle } from "./mood-toggle";

export default function Footer() {
  return (
    <footer className="container h-16 flex items-center justify-between border-t sticky top-full">
      <p>&copy; demo-site</p>
      <ModeToggle />
    </footer>
  );
}
