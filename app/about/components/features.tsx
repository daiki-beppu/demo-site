import Section from "./section";
import Card from "./card";

export default function Features() {
  return (
    <Section title={"サービスの特徴"} subTitle={"すごいサービスがたくさん！"}>
      <div className="grid lg:grid-cols-3 gap-4 items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}

// 躓いたところ Linkのインポート先を間違えていてカード全体がリンクにならなかった next/linkをインポートする！
