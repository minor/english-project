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
      <section className="relative overflow-hidden">
        <div className="container px-4 pt-24 mx-auto md:pt-36">
          <div className="w-full mx-auto text-left md:text-center md:w-8/12">
            <h1 className="mt-2 mb-6 text-5xl font-bold leading-none tracking-tight text-black dark:text-white md:text-6xl">
              <span className="block mb-4">
                Learn about our plan for{" "}
                <span className="magical-gradient">California.</span>
              </span>
            </h1>
            <p className="px-0 mb-6 text-base text-xl font-normal text-gray-800 dark:text-gray-300">
              Every individual has their own situation that warrants different
              "levels" of mental health. Over the course of our lifetime,{" "}
              <strong>half of us</strong> will have dealt with some type of
              mental health challenge – some will be more serious than others
              though. Here's the good news:{" "}
              <strong>
                we're working to build a better and safer environment
              </strong>{" "}
              in California.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 text-xl font-medium text-white bg-black rounded-lg"
                href="#plan"
              >
                <span className="justify-center">Check out our plan</span>{" "}
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
          <div className="relative w-full mx-auto mt-12 text-center md:w-10/12">
            <div className="-mb-10 md:-mb-28">
              <img
                className="transition shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:-translate-y-1 hover:duration-100"
                src="/images/sf3.jpeg"
                alt="An image of the Golden Gate Bridge"
              />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/images/blur.png)", zIndex: -1 }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover"
        ></div>
      </section>
      <div className="flex justify-center">
        <div className="h-0.5 w-3/4 md:w-1/2 mt-10 magical-bg"></div>
      </div>
      <section>
        <div className="mx-auto mt-16 text-center max-w-7xl">
          <h1 className="mb-8 text-4xl font-semibold text-gray-900 md:text-6xl dark:text-white">
            The problem.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
            Nearly{" "}
            <a
              href="https://www.chcf.org/publication/2018-edition-mental-health-ca-for-too-many-care-not-there"
              className="text-blue-600 underline dark:text-blue-500"
              target="_blank"
            >
              1 in 6 Californians
            </a>{" "}
            experienced mental illness this past year.
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 ">
            <p className="w-full mb-10 text-xl text-center text-gray-800 md:w-1/2 dark:text-gray-300">
              People with mental illnesses are stigmatized by the{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                societal narrative
              </span>{" "}
              and lack of awareness surrounding mental wellbeing. Everyday,
              people are suffering because they feel{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                wrong
              </span>
              ,{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                outcasted
              </span>
              ,{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                lonely
              </span>
              ,{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                dramatic
              </span>
              , or{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                deffective
              </span>{" "}
              – all because people dismiss the importance of mental health.{" "}
              <strong>But it is important.</strong> Mental health is vital to
              overall health. Precisely 41.2% of Californian adults reported
              symptoms of anxiety or depressive disorder during 2020,{" "}
              <a
                href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california/"
                className="text-blue-600 underline dark:text-blue-500"
                target="_blank"
              >
                according to a study by the Kaiser Family Foundation
              </a>
              . The longer we refuse to thoroughly combat and address this issue
              with{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                safe
              </span>
              ,{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                effective
              </span>{" "}
              measures, this number will continue to skyrocket. Failure to
              recognize the problem leading to the continuation of
              stigmatization, and failure to receive the right treatment can
              lead to extreme{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                detrimental effects
              </span>
              . People with mental illnesses are just as important as people
              with physical illnesses. The only difference:{" "}
              <strong>
                a mental illness diagnosis is not a death sentence.
              </strong>
            </p>
          </div>
          <h1 className="mt-8 mb-8 text-3xl font-semibold text-gray-900 md:text-4xl dark:text-white">
            Let's fact check.
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 ">
            <p className="w-full mb-10 text-xl text-left text-gray-800 md:w-1/2 dark:text-gray-300">
              <ul className="ml-5 list-disc">
                <li className="my-3">
                  According to California Health Care Almanac Mental Health
                  Care, approximately <strong>1 in 20</strong> suffer from a
                  serious mental illness that makes it difficult to carry out
                  major life activities.
                </li>
                <li className="my-3">
                  Federal & state laws, Medi-Cal eligibility, and a scope of
                  mental health services have made services available to more
                  adults. Public & private companies have created resources to
                  expand care, integrate health care, and end the toxic stigma.{" "}
                  <strong>Nonetheless</strong>, mental illnesses continue to
                  rise, and adult Californians <strong>still</strong> do not
                  receive treatment for their mental wellbeing – and to top
                  this, many have poor overall health.
                </li>
                <li className="my-3">
                  About <strong>two thirds</strong> of adults with major
                  depressive episodes did not get treatment in California
                </li>
                <li className="my-3">
                  Suicides are still the <strong>second</strong> leading cause
                  of death.
                </li>
              </ul>
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.ppic.org/wp-content/uploads/covid-19s-toll-on-mental-health-figure-1.png"
            ></img>
            <a
              href="https://www.ppic.org/blog/covid-19s-toll-on-mental-health/"
              className="w-full mb-12 text-lg text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              A histogram exhibiting the rise of anxiety/depressive disorder
              symptoms in Californian adults
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto mt-16 text-center max-w-7xl">
          <h1 className="mb-8 text-4xl font-semibold text-gray-900 md:text-6xl dark:text-white">
            The relevance.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
            <a
              href="http://doi.org/10.1001/jamanetworkopen.2020.19686"
              className="text-blue-600 underline dark:text-blue-500"
              target="_blank"
            >
              COVID-19 tripled signs of depressions.
            </a>{" "}
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 ">
            <p className="w-full mb-10 text-xl text-center text-gray-800 md:w-1/2 dark:text-gray-300">
              Prior to the COVID-19 pandemic, mental health cases were{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                already on the rise
              </span>{" "}
              for a plethora of reasons – social media, unethical working hours,
              competition, etc. Now, the hard hitting effects of the pandemic
              are taking its toll on{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                everyone
              </span>
              . Since the beginning of the pandemic, precisely{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                69%
              </span>{" "}
              of Californian adults have reported experiencing mental health
              symptoms. Yet, only 31% have acknowledged and tried to improve
              their mental health. This leaves uncertainty for the future – if
              one needs help and they are not able to get it, what are we to do?
              The best solution is to{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                educate
              </span>{" "}
              and make{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                tangible differences
              </span>{" "}
              within California.
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="/images/fig.png"
            ></img>
            <a
              href="http://doi.org/10.1001/jamanetworkopen.2020.19686"
              className="w-full mb-12 text-lg text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              The rise of <strong>moderately severe</strong> and{" "}
              <strong>severe</strong> cases represents a <strong>big</strong>{" "}
              problem in California
            </a>
          </div>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 "></div>
        </div>
      </section>
      <section id="plan">
        <div className="mx-auto mt-16 text-center max-w-7xl">
          <h1 className="mb-8 text-4xl font-semibold text-gray-900 md:text-6xl dark:text-white">
            Our plan.
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
            We're ready to make a change.
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 ">
            <p className="w-full mb-10 text-xl text-left text-gray-800 md:w-1/2 dark:text-gray-300">
              <ul className="ml-5 list-disc">
                <li className="my-3">
                  We build spaces in stress prone environments for people to{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    learn about
                  </span>{" "}
                  their mental health, as well as how to{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    take care
                  </span>{" "}
                  of it. In the workplace, we offer{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    educational clinics
                  </span>{" "}
                  and areas for people to share. On college campuses, we present{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    lectures
                  </span>{" "}
                  and materials to inform and provide a comfortable space for
                  everyone. With this method, people know they{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    are not wrong
                  </span>
                  , they{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    are not alone
                  </span>
                  , and that they{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    can speak up
                  </span>
                  .
                </li>
                <li className="my-3">
                  We host{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    speciality events
                  </span>{" "}
                  for any occasion, dedicated on educating and promoting overall
                  mental wellbeing. We’ll answer any question, debunk myths,
                  provide safe places for everyone, and help the audience learn
                  how to{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    end the shame
                  </span>{" "}
                  around mental illness. We can help everyone, everywhere, speak
                  up to know that they are not making it up in their head.
                </li>
                <li className="my-3">
                  We create{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    physical materials
                  </span>{" "}
                  for everyone to learn, support, and spread the message. From
                  weekly newsletters on helpful tips and science regarding
                  mental health, to comfortable clothing pieces that show
                  positive messages, we have it.{" "}
                  <strong>We live to spread and help others live.</strong>
                </li>
                <li className="my-3">
                  We make{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    appointments
                  </span>{" "}
                  with state and community lawmakers, advocating for mental
                  health awareness and asking for their help in{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    changing the stigmatized climate
                  </span>{" "}
                  engulfing conversations on mental wellbeing. Because,{" "}
                  <strong>change needs to be at every level.</strong>
                </li>
                <li className="my-3">
                  We provide{" "}
                  <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                    financial aid
                  </span>{" "}
                  to adults who cannot afford medical expenses regarding their
                  mental wellbeing. <strong>No one will be left behind.</strong>
                </li>
              </ul>
              <h1 className="mb-8 text-xl font-bold text-center text-gray-600 underline dark:text-gray-300">
                So, help us help you.
              </h1>
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="A Fun Image"
              src="data:image/png;base64,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"
            ></img>
            <p className="w-full mb-12 text-xl font-bold text-gray-600 dark:text-gray-200 md:w-1/3">
              It's as simple as that.
            </p>
          </div>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 "></div>
        </div>
      </section>
      <section>
        <div className="mx-auto mt-16 text-center max-w-7xl">
          <h1 className="mb-8 text-4xl font-semibold text-gray-900 md:text-6xl dark:text-white">
            Get involved!
          </h1>
          <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
            Let's build a safer community and state – one step at a time,
            together.
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0">
            <p className="w-full mb-10 text-xl text-center text-gray-800 md:w-1/2 dark:text-gray-300">
              This is why Coast-to-Coast Mental Health Awareness needs your
              help! Our goal is to{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                reduce the stigma
              </span>{" "}
              of mental health problems in California. With your help, we will
              be able to help lower the numbers. Even{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                a small donation
              </span>{" "}
              would help us <strong>greatly</strong>. What are you waiting for?
              It's <strong>your</strong> time to help ease this problem!
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/CA-ff6e2d06dd50c05e771d3649b383f97f.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california"
              className="w-full mb-12 text-lg text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              Although the situation has gotten better post-reopening,
              California <strong>still</strong> has higher rates of symptoms
              than the nation.
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://assets.website-files.com/5f16235b684d744cedb3ab00/5f56e95c23360e413434f448_d41586-020-00296-x_17665078.jpeg"
            ></img>
            <a
              href="https://www.samhsa.gov/data/report/2018-nsduh-detailed-tables"
              className="w-full mb-12 text-lg text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              It's <strong>our</strong> responsibility to help future
              generations from these mental disorders.
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/CA-241ea49107509a8ddecc626f6d7e51d8.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california"
              className="w-full mb-12 text-lg text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              More people should have access to resources if they have these
              symptoms.
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/CA-e4d1a1b3386cdf3bc1c81f594f5b194b.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california"
              className="w-full mb-12 text-lg text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              Only raising awareness and education can prevent the steady
              increase of overdoses.
            </a>
          </div>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 "></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
