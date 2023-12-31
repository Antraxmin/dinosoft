import Figure from "@/components/figure";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Section from "@/components/section";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Figure />
      <Section />
      <Footer />
    </>
  );
}
