import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function LocationsIndex() {
  return (
    <>
      <NextSeo
        title="Locations | C2CMHA"
        description="Find the locations that we offer our services."
        canonical="https://c2cmha.vercel.app/locations"
        openGraph={{
          url: "https://c2cmha.vercel.app/locations",
          images: [{ url: "/images/image.jpg" }],
        }}
      />
      <Head>
        <title>Locations | C2CMHA</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto text-center mt-36 max-w-2x1">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Our Locations
        </h1>
        <br />
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg from-indigo-100 via-red-100 to-yellow-100 bg-gradient-to-r dark:from-indigo-300 dark:via-red-300 dark:to-yellow-300 sm:p-4"
          href="/locations/california"
        >
          California
        </a>
        <br />
        <br />
        <a
          className="w-64 p-1 mx-auto mb-32 font-bold text-center text-black border border-gray-500 rounded-lg from-yellow-100 via-red-100 to-indigo-100 bg-gradient-to-r dark:from-yellow-300 dark:via-red-300 dark:to-indigo-300 sm:p-4"
          href="/locations/newyork"
        >
          New York
        </a>
      </div>
      <Footer />
    </>
  );
}
