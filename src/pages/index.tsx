import { Inter } from "next/font/google";
import Head from "next/head";
import About from '~/components/About';
import Experience from '~/components/Experience';
import Footer from '~/components/Footer';
import Header from "~/components/Header";
import Projects from '~/components/Projects';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lefteris Loizides</title>
        <meta name='title' content='Lefteris Loizides' />
        <meta name="site_name" content="Lefteris Loizides" />
        <meta name="description" content="Lefteris Loizides is a software engineer who builds SaaS products and digital experiences for the web" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#292929" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lefterisloizides.com" />
        <meta property="og:title" content="Lefteris Loizides" />
        <meta property="og:site_name" content="Lefteris Loizides" />
        <meta property="og:description" content="Lefteris Loizides is a software engineer who builds SaaS products and digital experiences for the web" />
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
            <SpeedInsights />
          </main>
        </div>
      </div>
    </>
  );
}
