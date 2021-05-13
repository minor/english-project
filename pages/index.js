import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Mental Health Awareness"
        description="Welcome to nine4 homepage."
        canonical="https://english-project-one.vercel.app/"
        openGraph={{
          url: "https://english-project-one.vercel.app/",
        }}
      />
      <Head>
        <title>Mental Health Awareness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Mental Health Awareness
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">title ^^</p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                href="https://github.com/r1/nine4-2/"
              >
                <span className="justify-center">Find out more</span>
              </a>
            </div>
          </div>
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <img
              className="w-80 md:ml-1 ml-24"
              alt="iPhone-12"
              src="/images/iPhone-12-Mockup.png"
            ></img>
          </div>
        </div>
        <div className="grr max-w-7xl pt-20 mx-auto text-center" id="learnmore">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Learn more about our plans.
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
            Here's some information about our plans.
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <img
              className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
              alt="Placeholder Image"
              src="http://picsum.photos/1600/1200"
            ></img>
          </div>
        </div>
        <section className="relative" id="california">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                California
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                Here's the plan.
              </h1>
            </div>
          </div>
        </section>
        <section className="relative" id="newyork">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                New York
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                Here's the plan.
              </h1>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
