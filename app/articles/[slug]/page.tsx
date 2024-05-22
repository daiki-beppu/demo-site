import { getArticleBySlug } from "@/lib/newt";

export default async function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const article = await getArticleBySlug(slug);

  if (!article) return null;
  return (
    <article className="prose container py-10">
      <h1 className="bg-img">{article?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </article>
  );
}
