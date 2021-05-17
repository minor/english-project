import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function NewYork() {
  return (
    <div className="text-black">
      <NextSeo title="New York" description="New York" />
      <Head>
        <title>New York Plan | C2CMHA</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-24 text-center max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          New York Plan
        </h1>
        <br />
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
