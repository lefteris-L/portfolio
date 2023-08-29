import { Inter } from "next/font/google";
import Head from "next/head";
import About from '~/components/About';
import Experience from '~/components/Experience';
import Footer from '~/components/Footer';
import Header from "~/components/Header";
import Projects from '~/components/Projects';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/logo-white.svg" />
      </Head>
      <div
        className={
          "mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 " +
          inter.className
        }
      >
        <div className="min-h-screen lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
