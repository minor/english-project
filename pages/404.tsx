import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error() {
  return (
    <>
      <Head>
        <title>404 | Error</title>
        <link rel="icon" href="/bridge.svg" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto text-center mt-52 max-w-2x1">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg from-indigo-100 via-red-100 to-yellow-100 bg-gradient-to-r dark:from-indigo-300 dark:via-red-300 dark:to-yellow-300 sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </>
  );
}
