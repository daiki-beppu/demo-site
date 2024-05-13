import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Card() {
  return (
    <div className="border relative p-6 shadow rounded-md space-y-3">
      <div className="aspect-video bg-muted"></div>
      <h2>
        <Link href="#">
          記事タイトル
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Button variant={"outline"}>タグA</Button>
    </div>
  );
}
