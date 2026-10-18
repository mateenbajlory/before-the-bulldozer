import Header from "@/components/Header";
import RadarView from "@/components/RadarView";
import { permits } from "@/lib/permits";

export default function Home() {
  return (
    <main className="flex flex-col md:h-screen">
      <Header />
      <RadarView permits={permits} />
    </main>
  );
}
