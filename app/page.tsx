import Contact from "./components/contact";
import { Contents } from "./components/contents";
import Hero from "./components/hero";

export default async function Home() {
  return (
    <main className="container py-10 ">
      <Hero />
      <Contents />
      <Contact />
    </main>
  );
}
