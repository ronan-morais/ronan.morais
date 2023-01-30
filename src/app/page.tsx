import Header from "../components/header";
import About from "../components/about";
import Works from "../components/works";
import Contact from "../components/contact";
import { Inter } from "@next/font/google";
import Cursor from "../utils/cursor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Works />
      <Contact />
    </main>
  );
}
