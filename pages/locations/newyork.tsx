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
        <title>New York | C2CMHA</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <section className="relative overflow-hidden">
        <div className="container px-4 pt-24 mx-auto md:pt-36">
          <div className="w-full mx-auto text-left md:text-center md:w-8/12">
            <h1 className="mt-2 mb-6 text-5xl font-bold leading-none tracking-tight text-black dark:text-white md:text-6xl">
              <span className="block mb-4">
                Learn about our plan for{" "}
                <span className="magical-gradient">New York.</span>
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
              in New York.
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
                src="/images/bb2.jpeg"
                alt="An image of the Brooklyn Bridge"
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
            <a
              href="https://www.chcf.org/publication/2018-edition-mental-health-ca-for-too-many-care-not-there"
              className="text-blue-600 underline dark:text-blue-500"
              target="_blank"
            >
              1 in 5 New Yorkers
            </a>{" "}
            experienced mental illness this past year.
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 ">
            <p className="w-full mb-10 text-xl text-center text-gray-800 md:w-1/2 dark:text-gray-300">
              The intense environment has exposed and worsened the intensity of
              struggle that many face. More than{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                1 in 5
              </span>{" "}
              New Yorkers have symptoms of a mental disorder, according to the
              New York state Department of Health. Not being able to recognize
              the symptoms of a disorder is an{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                obstacle
              </span>{" "}
              New York inhabitants face due to the{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                stigmatization
              </span>{" "}
              revolving around mental health and{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                discrimination
              </span>{" "}
              in the health field. The stigma around mental health has been
              pushed by society and is devastatingly a{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                huge factor
              </span>{" "}
              in the crisis.
            </p>
          </div>
          <h1 className="mt-8 mb-8 text-3xl font-semibold text-gray-900 md:text-4xl dark:text-white">
            Let's fact check.
          </h1>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 ">
            <p className="w-full mb-10 text-xl text-left text-gray-800 md:w-1/2 dark:text-gray-300">
              <ul className="ml-5 list-disc">
                <li className="my-3">
                  Prior to the pandemic, in 2015, a national survey by the
                  National Institutes of Mental Health stated that over 3
                  million adults living in New York faced severe psychological
                  distress and/or diagnoses.
                </li>
                <li className="my-3">
                  <a
                    href="https://www.health.ny.gov/prevention/prevention_agenda/mental_health_and_substance_abuse/mental_health.htm"
                    className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
                    target="_blank"
                  >
                    New York State Department of Health
                  </a>{" "}
                  explains that <strong>1 in 10 adults and children</strong>{" "}
                  living in NY experience challenges regarding mental health
                  that have the potential to/ or already affect everyday
                  functionality.
                </li>
                <li className="my-3">
                  The 2016 CHS{" "}
                  <a
                    href="https://www1.nyc.gov/assets/doh/downloads/pdf/survey/depression.pdf"
                    className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
                    target="_blank"
                  >
                    (Community Health Survey)
                  </a>{" "}
                  exposed that almost 10% of NY adults had one of the most
                  common disorders, depression.
                </li>
                <li className="my-3">
                  According to the 2016 CHS{" "}
                  <a
                    href="https://www1.nyc.gov/assets/doh/downloads/pdf/survey/depression.pdf"
                    className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
                    target="_blank"
                  >
                    (Community Health Survey)
                  </a>{" "}
                  , 62% of New York city adults with depression had no
                  treatment, mediation, or counseling.
                </li>
                <li className="my-3">
                  Suicides are the 2nd leading cause of death, and depression is
                  the leading cause of death of disability affected life years{" "}
                  <a
                    href="https://www1.nyc.gov/assets/doh/downloads/pdf/survey/depression.pdf"
                    className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
                    target="_blank"
                  >
                    (Community Health Survey)
                  </a>{" "}
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
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
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
              Prior to the COVID-19 pandemic beginning in early 2020, New York’s
              mental health crisis was already worsening. New York was heavily
              affected by the pandemic and was not only struggling with the
              economic effects but also the psychological effects on its
              inhabitants. In May of 2020, more than ⅓ of NY adults had severe
              symptoms of psychological disorders. These numbers were nearly 3
              times worse than numbers from national findings pre-pandemic. The
              pandemic took away the already limited access many had to
              treatment and caused severe distress leading to undiagnosed
              illnesses. As the state of New York recovers, it is equally as
              important for the people to recover. Due to the spike in
              psychological suffering, stigma around mental health has also
              worsened. Combating stigma is what New York needs to
              comprehensively heal. Becoming aware of symptoms, and raising
              awareness is an extremely beneficial way to battle the stigma.
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="/images/fig.png"
            ></img>
            <a
              href="http://doi.org/10.1001/jamanetworkopen.2020.19686"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
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
      <section>
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
              src="/images/fig.png"
            ></img>
            <a
              href="http://doi.org/10.1001/jamanetworkopen.2020.19686"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
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
              It's{" "}
              <span className="p-0.5 bg-lightBlue-100 rounded dark:bg-lightBlue-800">
                your
              </span>{" "}
              time to help ease this problem!
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/CA-ff6e2d06dd50c05e771d3649b383f97f.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              The rise of <strong>moderately severe</strong> and{" "}
              <strong>severe</strong> cases represents a <strong>big</strong>{" "}
              problem in California
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://assets.website-files.com/5f16235b684d744cedb3ab00/5f56e95c23360e413434f448_d41586-020-00296-x_17665078.jpeg"
            ></img>
            <a
              href="https://www.samhsa.gov/data/report/2018-nsduh-detailed-tables"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              The rise of <strong>moderately severe</strong> and{" "}
              <strong>severe</strong> cases represents a <strong>big</strong>{" "}
              problem in California
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/CA-241ea49107509a8ddecc626f6d7e51d8.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              The rise of <strong>moderately severe</strong> and{" "}
              <strong>severe</strong> cases represents a <strong>big</strong>{" "}
              problem in California
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/CA-e4d1a1b3386cdf3bc1c81f594f5b194b.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/california"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
            <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
              How can I help?
            </h3>
            <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
            <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
              Why is this a problem?
            </h3>
            <p className="pt-2 text-gray-200 dark:text-black value-text text-md fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="p-8 bg-black rounded-lg dark:bg-gray-200">
            <h3 className="pt-3 text-lg font-semibold text-white dark:text-black">
              What are common mental health disorders?
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md dark:text-black fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
