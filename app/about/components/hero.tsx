import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 flex font-bold items-center">
      <div className="container">
        <h1 className="font-bold text-4xl lg:text-6xl">Hero</h1>
        <p className="text-muted-foreground mt-3 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          exercitationem rerum, voluptas asperiores dignissimos harum temporibus
          sint laboriosam quia hic. Eaque quos dolor ea cum dolorum consequuntur
          sed labore iusto?
        </p>

        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
