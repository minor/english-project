import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Coast to Coast Mental Health Awareness"
        description="We create plans to solve the mental health crisis in New York and California."
        canonical="https://c2cmha.vercel.app"
        openGraph={{
          url: "https://c2cmha.vercel.app",
          images: [{ url: "/images/image.jpg" }],
        }}
      />
      <Head>
        <title>C2C Mental Health Awareness</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <section className="text-gray-600">
        <section className="bg-green-100 md:bg-gradient-to-r md:dark:from-green-200 md:dark:via-purple-200 md:dark:to-green-200 md:from-green-100 md:via-purple-100 md:to-green-100 md:animate-gradient-xy">
          <div className="py-10"></div>
          <div className="flex flex-col items-center px-5 py-24 mx-auto max-w-7xl md:flex-row">
            <div className="flex flex-col items-center pt-6 pb-10 mb-10 text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
              <h1 className="items-center mb-5 text-5xl font-bold text-gray-900 sm:text-5xl md:text-5xl md:text-6xl xl:w-2/2">
                Coast-to-Coast Mental Health Awareness
              </h1>
              <p className="mb-4 text-lg text-gray-600 md:w-11/12">
                Join us in <strong>destigmatizing</strong> mental health
                disorders, while <strong>educating</strong> others to support a{" "}
                <span className="font-bold underline">brighter</span> future for
                tomorrow. Help us make a difference through your donation!
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 border rounded-lg"
                  href="#learn"
                >
                  <span className="justify-center">Find out more</span>{" "}
                  <svg
                    className="flex w-3 h-3 ml-2 -mr-1 text-white fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
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
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 200"
            version="1.1"
            className="text-white fill-current dark:text-gray-background"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              d="M0,80L26.7,86.7C53.3,93,107,107,160,100C213.3,93,267,67,320,66.7C373.3,67,427,93,480,93.3C533.3,93,587,67,640,56.7C693.3,47,747,53,800,76.7C853.3,100,907,140,960,153.3C1013.3,167,1067,153,1120,136.7C1173.3,120,1227,100,1280,80C1333.3,60,1387,40,1440,36.7C1493.3,33,1547,47,1600,63.3C1653.3,80,1707,100,1760,106.7C1813.3,113,1867,107,1920,113.3C1973.3,120,2027,140,2080,126.7C2133.3,113,2187,67,2240,60C2293.3,53,2347,87,2400,96.7C2453.3,107,2507,93,2560,73.3C2613.3,53,2667,27,2720,36.7C2773.3,47,2827,93,2880,116.7C2933.3,140,2987,140,3040,120C3093.3,100,3147,60,3200,40C3253.3,20,3307,20,3360,33.3C3413.3,47,3467,73,3520,90C3573.3,107,3627,113,3680,116.7C3733.3,120,3787,120,3813,120L3840,120L3840,200L3813.3,200C3786.7,200,3733,200,3680,200C3626.7,200,3573,200,3520,200C3466.7,200,3413,200,3360,200C3306.7,200,3253,200,3200,200C3146.7,200,3093,200,3040,200C2986.7,200,2933,200,2880,200C2826.7,200,2773,200,2720,200C2666.7,200,2613,200,2560,200C2506.7,200,2453,200,2400,200C2346.7,200,2293,200,2240,200C2186.7,200,2133,200,2080,200C2026.7,200,1973,200,1920,200C1866.7,200,1813,200,1760,200C1706.7,200,1653,200,1600,200C1546.7,200,1493,200,1440,200C1386.7,200,1333,200,1280,200C1226.7,200,1173,200,1120,200C1066.7,200,1013,200,960,200C906.7,200,853,200,800,200C746.7,200,693,200,640,200C586.7,200,533,200,480,200C426.7,200,373,200,320,200C266.7,200,213,200,160,200C106.7,200,53,200,27,200L0,200Z"
            ></path>
          </svg>
        </section>
        <div className="mx-auto text-center max-w-7xl" id="learn">
          <h1 className="mb-8 text-5xl font-semibold text-gray-900 md:text-5xl md:text-6xl dark:text-white">
            The problem – it's bigger than we think.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
            Over{" "}
            <a
              href="http://dx.doi.org/10.15585/mmwr.mm6932a1"
              className="text-blue-600 underline dark:text-blue-500"
              target="_blank"
            >
              1 in 4 Americans
            </a>{" "}
            experienced mental illness this past year.
          </h1>
          <p className="mb-10 text-xl text-gray-800 dark:text-gray-400">
            {" "}
            The novel coronavirus pandemic was <strong>devastating</strong>,
            with rapid increases in substance usage and depressive symptoms
            across all age groups.
          </p>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <img
              className="object-cover object-center w-1/2 mb-10 border border-black rounded-lg shadow-md dark:border-white"
              alt="Statistics Image"
              src="/images/19v20.png"
            ></img>
          </div>
        </div>
        <section className="relative" id="california">
          <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
            <div className="py-12">
              <h1 className="mb-5 text-5xl font-semibold text-gray-900 md:text-6xl dark:text-gray-200">
                California
              </h1>
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-9">
                1 in 6 Californians.
              </h1>
              <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
                <img
                  className="object-cover object-center w-1/2 mb-10 rounded shadow-3xl"
                  alt="Golden Gate Bridge Image"
                  src="/images/sf2.jpeg"
                ></img>
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-400">
                California is one of the most populated states in the US, with
                an even higher population of adults with mental illnesses.
                Amidst the growing numbers, many just feel like a statistic.{" "}
                <strong>But you matter.</strong> We hear you, we listen, and we
                will help. Coast-to-Coast Mental Health Awareness strives to
                decrease the amount of people suffering from mental illnesses by
                providing safe spaces in stress prone environments, creating
                tangible items to promote wellness and awareness, and arranging
                financial aid to those who need it.
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
            <div className="py-12 mb-10">
              <h1 className="mb-5 text-5xl font-semibold text-gray-900 md:text-6xl dark:text-gray-200">
                New York
              </h1>
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-9">
                1 in 5 New Yorkers.
              </h1>
              <div className="container flex flex-col items-center justify-center mx-auto">
                <img
                  className="object-cover object-center w-1/2 mb-10 rounded shadow-3xl"
                  alt="Brooklyn Bridge Image"
                  src="/images/bb1.jpeg"
                ></img>
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-400">
                With New York city life absorbed by finance, social trends, and
                physical health, mental wellbeing continues to be forgotten. All
                while mental illness cases rise exponentially. No one is alone
                in their mental health struggles, even if it may seem like you
                are ignored. <strong>But you matter.</strong> We aim to combat
                the sudden surge by giving people in a typically stressful
                environment a place to speak out, providing items that spread
                the right information and awareness, and finally granting
                financial assistance to those who can not afford adequate care.
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
            <div className="mt-4 mb-20 text-center">
              <h1 className="mb-5 text-5xl font-semibold text-gray-900 md:text-6xl dark:text-gray-200">
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
          <h1 className="mb-5 text-5xl font-semibold text-center text-gray-900 md:text-6xl dark:text-gray-200">
            FAQ
          </h1>
          <h1 className="text-2xl font-semibold text-center text-gray-600 dark:text-gray-300 mb-9">
            Here are the answers to some of the most frequently asked questions.
          </h1>
          <div className="max-w-4xl px-3 pt-8 pb-24 mx-auto fsac4 md:px-1">
            <div className="p-8 md:m-0 m-1.5 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                What will C2CMHA do with money?
              </h3>
              <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
                All donations and funds received by C2CMHA will be directed
                towards{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  different outlets
                </span>{" "}
                to help increase awareness and decrease stigmatization. Funds
                will help us{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  organize specialty events and spaces
                </span>{" "}
                at schools, offices, fairs, shows, and/or private vendors. A
                bulk of donations will be dedicated to{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  creating physical items,
                </span>{" "}
                such as: clothing and stress balls. A portion of profits will be
                used to cover travel expenses for speaker volunteers, in
                addition to other{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  financial aid
                </span>{" "}
                to individuals who cannot afford medical care.
              </p>
            </div>
            <div className="p-8 m-1.5 md:m-0 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                How can I help?
              </h3>
              <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
                Fortunately, there are a few ways to help! The first possible
                way is through{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  your donation
                </span>{" "}
                – any small amount will help our organization provide safe
                spaces where people can openly discuss mental health, create
                materials to educate the public, and provide financial aid to
                individuals. The second is through{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  <span className="italic">your</span> education and personal
                  research
                </span>{" "}
                to gain a better understanding of the many different disorders,
                as well as the proper ways to interact with individuals with
                those disorders. This would be a tremendous help in decreasing{" "}
                <span className="font-bold">stigmatization</span> of depression
                and mental health illnesses in your state.
              </p>
            </div>
            <div className="p-8 md:m-0 m-1.5 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                Why is this a problem?
              </h3>
              <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
                Especially in minority groups,{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  care and understanding of mental health is decreasing.
                </span>{" "}
                People tend to brush off mental health, not believe in its
                importance, and continue to stigmatize these disorders. The
                longer this continues,{" "}
                <span className="p-0.5 bg-yellow-600 rounded dark:bg-yellow-100">
                  the more people we will lose
                </span>{" "}
                to something completely manageable and preventable – all because
                some are simply unaware of how valuable mental health is to
                quality of life.
              </p>
            </div>
            <div className="p-8 md:m-0 m-1.5 bg-black rounded-lg dark:bg-gray-200">
              <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
                What are common mental health disorders?
              </h3>
              <p className="pt-2 text-gray-200 value-text text-md dark:text-black fkrr1">
                In California and New York, the most common mental illnesses
                continue to be depression, general anxiety (GAD), Post Traumatic
                Stress Disorder (PTSD), Eating Disorders, and Bipolar Disorder.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto text-gray-600 body-font">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
              <h1 className="mb-5 text-5xl font-semibold text-center text-gray-900 md:text-6xl dark:text-gray-200">
                Partnered with Leading Mental Health Non-Profits
              </h1>
              <p className="mx-auto mt-2 text-base text-xl leading-relaxed text-gray-800 dark:text-gray-400 xl:w-2/4 lg:w-3/4">
                We partner with some of the world's most impactful and dedicated
                non-profit organizations. Together, we hope to build a better
                future and eliminate stigmatization of mental health disorders.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 mb-8 bg-black rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-16 mt-2 mb-16 text-center md:mr-10 lg:grid-cols-4">
              <div className="flex items-center justify-center">
                <img
                  src="/images/eachmindmatters.png"
                  alt="Each Mind Matters Logo"
                  className="block object-contain h-16 duration-500 filter grayscale hover:filter-none"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/vibrant.svg"
                  alt="Vibrant Logo"
                  className="block object-contain h-16 duration-500 filter grayscale hover:filter-none"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/nami.svg"
                  alt="Nami Logo"
                  className="block object-contain h-16 duration-500 filter grayscale hover:filter-none"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/ccm.webp"
                  alt="California Coalition for Mental Health Logo"
                  className="block object-contain h-16 duration-500 filter grayscale hover:filter-none"
                ></img>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
