import { Metadata } from "next";
import Hero from "../components/hero";
import { Contents } from "../components/contents";

export const metadata: Metadata = {
  title: "サービス紹介",
  description: "Learn Next.js",
};

export default function Page() {
  return (
    <div className="container py-10">
      <Contents />
    </div>
  );
}
