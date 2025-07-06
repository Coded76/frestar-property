import Buy from "@/components/Buy";
import Buysell from "@/components/Buysell";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import ImageGrid from "@/components/Talktoagent";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <Buysell/>
      <Buy/>
      <ImageGrid/>
      <Connect/>
      <Footer/>
    </div>
  );
}
