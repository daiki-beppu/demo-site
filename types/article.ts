export interface Article {
  _id: string;
  src: string;
  title: string;
  slug: string;
  body: string;
  coverImage: {
    src: string;
  };
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
}
