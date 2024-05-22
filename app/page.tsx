import { getArticles } from "@/lib/newt";
import Contact from "./components/contact";
import { Contents } from "./components/contents";
import Hero from "./components/hero";

export default async function Home() {
  const articles = await getArticles();
  console.log(articles);
  return (
    <main className="container py-10 ">
      <Hero />
      <Contents />
      <Contact />
    </main>
  );
}
