import Link from "next/link";
import { socialIcons } from "../data/footer_data";
import Image from "next/image";

const footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="m-auto">
              {/* <!-- Logo --> */}
              <Link href="#">
                <a className="flex justify-center my-3">
                  <Image
                    width={48}
                    height={48}
                    src="/images/logo.svg"
                    className="h-12 dark:hidden"
                    alt="Xhibiter | NFT Marketplace"
                  />
                </a>
              </Link>

              <Link href="#">
                <a className="flex justify-center my-3">
                  <Image
                    width={48}
                    height={48}
                    src="/images/logo_white.svg"
                    className="hidden h-12 dark:block mb-6"
                    alt="Developer Logo"
                  />
                </a>
              </Link>
              <p className="dark:text-jacarta-300 mb-12">
                Let&apos;s develop something truly amazing together.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex space-x-5 justify-center">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} - Made by</span>
              <Link href="https://themeforest.net/user/ib-themes">
                <a className="hover:text-accent dark:hover:text-white">
                  {" "}
                  Sahil Maheshwari
                </a>
              </Link>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Terms and conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Privacy policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
