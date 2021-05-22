import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="text-white">
      <Head>
        <title>C2CMHA: Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-semibold text-black dark:text-white sm:text-5xl title-font">
              Contact Us
            </h1>
            <p className="mx-auto text-base font-semibold leading-relaxed lg:w-2/3">
              Contact us if you have any questions about our plans!
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold leading-7 text-black dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none dark:bg-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></input>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold leading-7 text-black dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none dark:bg-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></input>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold leading-7 text-black dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none dark:bg-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-white bg-black border-0 rounded dark:text-black dark:bg-white">
                  Send
                </button>
              </div>
              <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-900 dark:border-gray-200">
                <a className="text-indigo-500">contact@c2cmha.vercel.app</a>
                <p className="my-5 leading-normal">
                  San Jose, California, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </div>
  );
}
