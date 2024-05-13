export default function Section({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 container">
      <div className="mb-4 text-center space-y-6">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-muted-foreground mb-10">{subTitle}</p>
      </div>
      {children}
    </section>
  );
}
