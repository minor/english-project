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
        <title>C2C Mental Health Awareness</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <section className="text-gray-600 body-font">
        <section className="bg-green-100 md:bg-gradient-to-r md:dark:from-green-200 md:dark:via-purple-200 md:dark:to-green-200 md:from-green-100 md:via-purple-100 md:to-green-100 md:animate-gradient-xy">
          <div className="py-9"></div>
          <div className="flex flex-col items-center px-5 py-32 mx-auto max-w-7xl md:flex-row">
            <div className="flex flex-col items-center pt-6 pb-10 mb-10 text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
              <h1 className="items-center mb-5 text-5xl text-gray-900 sm:text-6xl Avenir xl:w-2/2">
                Coast-to-Coast Mental Health Awareness
              </h1>
              <p className="mb-4 text-lg text-gray-600 xl:w-3/4">
                Support our plan through your donation!
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 border rounded-lg"
                  href="#learnmore"
                >
                  <span className="justify-center">Find out more</span>
                </a>
              </div>
            </div>
            <div className="mb-0 mr-48 xl:mr-44 sm:mr-0 sm:mb-28 lg:mb-0 md:pl-10">
              <img
                className="ml-24 border-2 border-purple-500 rounded w-120 md:ml-10"
                alt="cover image"
                src="/images/cover.png"
              ></img>
            </div>
          </div>
        </section>
        <div className="pt-20 mx-auto text-center grr max-w-7xl" id="learnmore">
          <h1 className="mb-8 text-6xl font-semibold text-gray-900 dark:text-white Avenir">
            Learn more about our plans.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300 Avenir">
            Here's some information about our plans.
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <img
              className="object-cover object-center w-3/4 mb-10 border rounded-lg shadow-md g327"
              alt="Placeholder Image"
              src="/images/image.jpg"
            ></img>
          </div>
        </div>
        <section className="relative" id="california">
          <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
            <div className="py-12">
              <h1 className="mb-5 text-6xl font-semibold text-gray-900 dark:text-gray-200 Avenir">
                California
              </h1>
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-9">
                Here's the plan.
              </h1>
              <img src=""></img>
              <p className="text-lg text-gray-800 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum malesuada nisl non orci fermentum consectetur. Ut
                iaculis tortor ut lacinia gravida. Vivamus eget ex massa. Ut sit
                amet tristique nisi. Praesent tempor quam non aliquet vehicula.
                Maecenas nec justo nunc. Pellentesque in lobortis enim. Morbi
                rutrum diam id dui semper, ut mollis dolor rhoncus. Phasellus in
                arcu et ligula malesuada rhoncus in sed lorem. Maecenas posuere
                imperdiet nunc at vulputate. Ut est lectus, accumsan vitae leo
                non, mollis elementum augue. Maecenas volutpat tellus a euismod
                commodo. Donec tellus enim, condimentum vel venenatis quis,
                malesuada non ex. Integer posuere tellus velit, eu semper ipsum
                semper et. Suspendisse porttitor et sapien et vestibulum. In non
                venenatis sem, ac mattis mi. Quisque rutrum placerat vehicula.
                Donec elit massa, faucibus a tortor vel, egestas semper sem.
                Aenean rutrum elementum scelerisque.
              </p>
              <a
                className="inline-flex items-center px-5 py-3 mt-6 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 border rounded-lg dark:text-black dark:bg-white"
                href="/california"
              >
                <span className="justify-center">Read more!</span>
              </a>
            </div>
          </div>
        </section>
        <section className="relative" id="newyork">
          <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl font-semibold text-gray-900 dark:text-gray-200 Avenir">
                New York
              </h1>
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-9">
                Here's the plan.
              </h1>
              <p className="text-lg text-gray-800 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum malesuada nisl non orci fermentum consectetur. Ut
                iaculis tortor ut lacinia gravida. Vivamus eget ex massa. Ut sit
                amet tristique nisi. Praesent tempor quam non aliquet vehicula.
                Maecenas nec justo nunc. Pellentesque in lobortis enim. Morbi
                rutrum diam id dui semper, ut mollis dolor rhoncus. Phasellus in
                arcu et ligula malesuada rhoncus in sed lorem. Maecenas posuere
                imperdiet nunc at vulputate. Ut est lectus, accumsan vitae leo
                non, mollis elementum augue. Maecenas volutpat tellus a euismod
                commodo. Donec tellus enim, condimentum vel venenatis quis,t
                malesuada non ex. Integer posuere tellus velit, eu semper ipsum
                semper et. Suspendisse porttitor et sapien et vestibulum. In non
                venenatis sem, ac mattis mi. Quisque rutrum placerat vehicula.
                Donec elit massa, faucibus a tortor vel, egestas semper sem.
                Aenean rutrum elementum scelerisque.
              </p>
              <a
                className="inline-flex items-center px-5 py-3 mt-6 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 border rounded-lg dark:text-black dark:bg-white"
                href="/newyork"
              >
                <span className="justify-center">Read more!</span>
              </a>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
