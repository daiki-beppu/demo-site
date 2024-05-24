import * as React from "react";
import { getArticles } from "@/lib/newt";
import Link from "next/link";
import { RotateCw } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";

export async function Contents() {
  const articles = await getArticles();
  return (
    <div className=" container py-10 border rounded-lg ">
      <h1 className="pb-10 font-bold text-xl text-center">記事一覧</h1>
      <ul className="grid gap-8 lg:grid-cols-2">
        {articles.map((article) => {
          return (
            <li
              key={article._id}
              className="flex flex-col relative p-4 hover:bg-accent border rounded-lg"
            >
              <div className="aspect-video border object-cover object-center relative rounded-lg mb-4 ">
                <Image alt="" src={article.coverImage.src} fill />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="mb-4">
                  <Link href={`articles/${article.slug}`}>
                    {article.title}
                    <span className="absolute inset-0"></span>
                  </Link>
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.body.substring(3, 100) + "...",
                  }}
                />
                <time className="pt-4 text-sm text-muted-foreground flex items-center justify-end gap-2 mt-auto">
                  <RotateCw size={14} />
                  最終更新日:
                  {format(new Date(article._sys.updatedAt), "yyyy日MM月dd日")}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
