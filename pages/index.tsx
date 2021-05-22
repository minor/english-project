import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Coast to Coast Mental Health Awareness"
        description="Coast to Coast Mental Health Awareness"
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
          <div className="py-10"></div>
          <div className="flex flex-col items-center px-5 py-32 mx-auto max-w-7xl md:flex-row">
            <div className="flex flex-col items-center pt-6 pb-10 mb-10 text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
              <h1 className="items-center mb-5 text-5xl text-gray-900 text-bold sm:text-6xl xl:w-2/2">
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
                className="max-w-full ml-24 rounded w-120 md:ml-10"
                alt="cover image"
                src="/images/thought.svg"
              ></img>
            </div>
          </div>
          <div className="py-2"></div>
        </section>
        <div className="pt-20 mx-auto text-center grr max-w-7xl" id="learnmore">
          <h1 className="mb-8 text-6xl font-semibold text-gray-900 dark:text-white">
            Learn more about our plans.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
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
              <h1 className="mb-5 text-6xl font-semibold text-gray-900 dark:text-gray-200">
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
              <h1 className="mb-5 text-6xl font-semibold text-gray-900 dark:text-gray-200">
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
        <section className="text-gray-600 body-font" id="team">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <h1 className="mb-5 text-6xl font-semibold text-gray-900 dark:text-gray-200">
                Our Team
              </h1>
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-9">
                Meet the team behind the plans.
              </h1>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-white rounded-full"></div>
              </div>
              <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-88"
                        src="./images/saurish.JPG"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-black dark:text-white title-font">
                          Saurish
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-88"
                        src="./images/rex.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-black dark:text-white title-font">
                          Maddie
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-88"
                        src="./images/rex.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-black dark:text-white title-font">
                          Bryan
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-88"
                        src="./images/rex.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-black dark:text-white title-font">
                          Anjali
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font" id="faq">
          <h1 className="mb-5 text-6xl font-semibold text-center text-gray-900 dark:text-gray-200">
            FAQ
          </h1>
          <h1 className="text-2xl font-semibold text-center text-gray-600 dark:text-gray-300 mb-9">
            Here are the answers to some of the most frequently asked questions.
          </h1>
          <div className="max-w-4xl px-3 pt-8 pb-24 mx-auto fsac4 md:px-1">
            <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                What will we do with money?
              </h3>
              <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                How can I help?
              </h3>
              <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                Why is this a problem?
              </h3>
              <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                What are common mental health disorders?
              </h3>
              <p className="pt-2 text-gray-200 value-text text-md dark:text-black fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
