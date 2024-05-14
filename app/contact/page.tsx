import { Metadata } from "next";
import Contact from "../about/components/contact";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Learn Next.js",
};

export default function Page() {
  return <Contact />;
}
