import NavBar from "@/components/NavBar";
import PageMenu from "@/components/PageMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col min-h-screen ">
      <NavBar />
      <PageMenu />
    </main>
  );
}
