import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h2>Home</h2>
        <Button variant={"destructive"}>Test</Button>
      </div>
    </div>
  );
}
