import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AvgIQ from "./components/AvgIQ";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          IQ Test Academy | Unlock Your Intelligence: Premium Online IQ Tests
        </title>
        <meta
          name="description"
          content="Discover your cognitive potential with our premium online IQ tests. Gain insights into your strengths and areas for growth with detailed results. Take the first step towards self-discovery today!"
        />
        <meta
          property="og:image"
          content="https://static.vecteezy.com/system/resources/previews/006/408/298/original/brain-icon-isolated-on-white-background-brain-icon-similar-design-illustration-brain-icon-symbol-for-logo-web-app-and-template-vector.jpg"
        />
      </Head>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
        </div>
        <Header />
        <Hero />
        <Features />
        <AvgIQ />
        <HowItWorks />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
