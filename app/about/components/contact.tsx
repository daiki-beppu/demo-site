import { Button } from "@/components/ui/button";
import Section from "./section";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Section title={"お問い合わせ"} subTitle={"ご気軽に連絡ください"}>
      <div className="m-12 flex items-center justify-center">
        <Button variant={"secondary"}>
          <Mail className="mr-2 h-4 w-4" /> お問い合わせはこちらから
        </Button>
      </div>
    </Section>
  );
}
