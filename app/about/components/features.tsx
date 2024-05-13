import Section from "./section";
import Card from "./card";

export default function Features() {
  return (
    <Section title={"サービスの特徴"} subTitle={"すごいサービスがたくさん！"}>
      <div className="pb-20 grid lg:grid-cols-3 gap-4 items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}
