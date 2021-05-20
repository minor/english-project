export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl px-4 mx-auto divide-y divide-gray-200 xl:max-w-6xl sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-t border-black dark:border-white lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="#team"
                className="font-semibold text-black transition-colors duration-300 dark:text-white text-md hover:text-deep-purple-accent-400"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-semibold text-black transition-colors duration-300 dark:text-white text-md hover:text-deep-purple-accent-400"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#FAQ"
                className="font-semibold text-black transition-colors duration-300 dark:text-white text-md hover:text-deep-purple-accent-400"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#california"
                className="font-semibold text-black transition-colors duration-300 dark:text-white text-md hover:text-deep-purple-accent-400"
              >
                California
              </a>
            </li>
            <li>
              <a
                href="#newyork"
                className="font-semibold text-black transition-colors duration-300 dark:text-white text-md hover:text-deep-purple-accent-400"
              >
                New York
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="font-semibold tracking-tight text-black transition-colors duration-300 dark:text-white text-md hover:text-deep-purple-accent-400"
            >
              © 2021 C2CMHA.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
