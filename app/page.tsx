import { getArticles } from "@/lib/newt";
import { format } from "date-fns";
import Link from "next/link";

export default async function Home() {
  const articles = await getArticles();
  console.log(articles);
  return (
    <main className="container py-10">
      <ul className="space-y-4">
        {articles.map((article) => {
          return (
            <li
              key={article._id}
              className="relative p-4 hover:bg-accent border rounded-lg"
            >
              <h3>
                <Link href={`articles/${article.slug}`}>
                  {article.title}
                  <span className="absolute inset-0"></span>
                </Link>
              </h3>
              <time className="text-muted-foreground">
                最終更新日:{format(new Date(article._sys.updatedAt), "yyyy日MM月dd")}
              </time>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
