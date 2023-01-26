import Header from "../components/header";
import About from "../components/about";
import Works from "../components/works";
import Contact from "../components/contact";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

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