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
              New York State Department of Health. Not being able to recognize
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
              src="https://static01.nyt.com/images/2020/03/11/learning/TeenIssuesGraphLN/TeenIssuesGraphLN-jumbo.png?quality=90&auto=webp"
            ></img>
            <a
              href="https://www.pewresearch.org/social-trends/2019/02/20/most-u-s-teens-see-anxiety-and-depression-as-a-major-problem-among-their-peers/"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              A histogram exhibiting the stigmatization of depression and
              different disorders
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
              inhabitants. In May of 2020, more than one third of NY adults had
              severe symptoms of psychological disorders. These numbers were
              nearly 3 times worse than numbers from national findings
              pre-pandemic. The pandemic took away the already limited access
              many had to treatment and caused severe distress leading to
              undiagnosed illnesses. As the state of New York recovers, it is
              equally as important for the people to recover. Due to the spike
              in psychological suffering, stigma around mental health has also
              worsened. Combating stigma is what New York needs to
              comprehensively heal. Becoming aware of symptoms, and raising
              awareness is an extremely beneficial way to battle the stigma.
            </p>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://lh3.googleusercontent.com/OUa5fcZYr0JYCdEsfRVdkuqdD_HpDIPuHXd_uxfP3UL-cYgRDke1MGRB9ZdthNc47Bh_s3QxOF5tgRyFyiO25Xse_SA6Yxw96XfAAnuGZT5_ZgLi3P-ZSzjP5fVU6PTCpai0MZsA"
            ></img>
            <a
              href="https://www1.nyc.gov/assets/doh/downloads/pdf/survey/depression.pdf"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              The 2016 CHS shows that over half of NY adults with depression
              received no treatment or counseling (62%).
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
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/NY-89e3f5299103d6d1b7e1d3027e9b8a14.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/new-york"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              New York is seeing massive numbers of individuals not getting the
              resources they need for their disorders.
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
              src="https://lh3.googleusercontent.com/RryDOx4fUZoDc3ltUoOLfZzpxQnKynQXJCpf8OZ1T0GSWYEjFWwdLlo4SiiOCrjhFfoS6mL0LptT_04-AZe6b4-tj4qWPuIjuLnc1Ft4aejOjXkRH5XqxcnLokgSiVIugBId52YS"
            ></img>
            <a
              href="https://healthpolicy.usc.edu/wp-content/uploads/2018/07/NY-Facts-and-Figures.pdf"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              The number of adults suffering from mental health disorders
              (according to the USC Schaeffer company).
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.amny.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-10.26.25-AM.jpg"
            ></img>
            <a
              href="https://www.amny.com/news/new-yorks-mental-health-crisis-during-covid-19-pandemic-impacting-people-of-color-at-higher-rates-report/"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              New York has seen a massive surge in depressive symptoms.
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.amny.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-10.26.52-AM.jpg"
            ></img>
            <a
              href="https://www.amny.com/news/new-yorks-mental-health-crisis-during-covid-19-pandemic-impacting-people-of-color-at-higher-rates-report/"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              It's not just with one race either – it's spread out pretty
              evenly.
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/NY-52f1be84b4e0106ff40fe29e60f57b00.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/new-york"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              Although the levels are still high, New York has been having a
              great recovery from the pandemic
            </a>
            <img
              className="object-cover object-center w-full mb-6 rounded shadow-2xl md:w-1/2"
              alt="Statistics Image"
              src="https://www.kff.org/wp-content/uploads/2021/05/NY-eca641d27796716d4bce8e91cd98fc7d.png"
            ></img>
            <a
              href="https://www.kff.org/statedata/mental-health-and-substance-use-state-fact-sheets/new-york"
              className="w-full mb-12 text-blue-600 underline md:w-1/3 dark:text-blue-500"
              target="_blank"
            >
              We have to <strong>protect</strong> individuals from overdoses.
            </a>
          </div>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto rounded-lg md:m-0 "></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
