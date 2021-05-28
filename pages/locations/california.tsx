import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Coast to Coast Mental Health Awareness"
        description="We create plans to solve the mental health crisis in New York and California."
        canonical="https://c2cmha.vercel.app/locations/california"
        openGraph={{
          url: "https://c2cmha.vercel.app/locations/california",
          images: [{ url: "/images/image.jpg" }],
        }}
      />
      <Head>
        <title>California | C2CMHA</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <section className="text-gray-600">
        <div className="py-6 md:py-12"></div>
        <section className="h-full max-h-full bg-center bg-no-repeat bg-sfgate">
          <div className="flex flex-col items-center px-5 py-32 mx-auto max-w-7xl md:flex-row">
            <div className="flex flex-col items-center pt-6 pb-10 mt-10 text-center lg:flex-grow md:w-1/2">
              <h1 className="items-center mb-5 text-6xl font-bold text-gray-900 sm:text-6xl xl:w-2/2">
                <span className="py-0.5 px-2 bg-yellow-100 leading-relaxed rounded">
                  Here's our plan for California.
                </span>
              </h1>
              <p className="mb-4 text-xl font-medium text-gray-600 xl:w-3/4">
                <span className="py-0.5 px-1 bg-indigo-100 leading-relaxed rounded">
                  We're dedicated to providing the best plan for California –
                  our plan has been supported by many&nbsp; &nbsp;organizations,
                  such as:
                </span>
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 border rounded-lg"
                  href="#learn"
                >
                  <span className="justify-center">Find out more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="py-4 md:py-12"></div>
        </section>
        <div className="pt-20 mx-auto text-center grr max-w-7xl" id="learn">
          <h1 className="mb-8 text-6xl font-semibold text-gray-900 dark:text-white">
            Our plan puts the <span className="underline">~~</span> in happy.
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
                href="/locations/california"
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
                href="/locations/newyork"
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
                        src="./images/maddie.JPG"
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
                        src="./images/bryan.jpeg"
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
                        src="./images/anjali.jpeg"
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
