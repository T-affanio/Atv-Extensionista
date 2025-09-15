import { Header } from "@/components/header";
import HomePage from "@/components/Home-Page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <HomePage />
      </div>
    </div>
  );
}
