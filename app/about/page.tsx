import { Metadata } from "next";
import Features from "./components/features";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "サービス紹介",
  description: "Learn Next.js",
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
