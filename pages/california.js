import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function California() {
  return (
    <div className="text-black">
      <NextSeo title="California" description="California" />
      <Head>
        <title>California Plan | C2CMHA</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-24 text-center max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          California Plan
        </h1>
        <br />
        <h3 className="text-3xl font-semibold text-gray-700 mb-9">
          Here's the plan.
        </h3>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-1/3 mb-2 transform border rounded-lg shadow-md hover:-translate-y-2 g327"
            alt="Placeholder Image"
            src="/images/cali_covid.jpg"
          ></img>
          <p className="w-1/3 mb-10">
            Image decsribes the average rate of Californians who are depressed
            or anxious during the pandemic, Source: KFF
          </p>
          <img
            className="object-cover object-center w-1/3 mb-10 transform border rounded-lg shadow-md hover:-translate-y-2 g327"
            alt="Placeholder Image"
            src="/images/cali_unmet.jpg"
          ></img>
          <img
            className="object-cover object-center w-1/3 mb-10 transform border rounded-lg shadow-md hover:-translate-y-2 g327"
            alt="Placeholder Image"
            src="/images/cali_no_treatment.jpg"
          ></img>
        </div>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
