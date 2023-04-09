import Link from "next/link";
import { socialIcons } from "../data/footer_data";
import Image from "next/image";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="m-auto">
              {/* <!-- Logo --> */}
              <Link  href="#">
                <a className="flex justify-center my-3">
                  {theme == 'light' ? <Image
                    width={48}
                    height={48}
                    src="/images/logo.svg"
                    className="h-12 mb-6"
                    alt="Developer Logo"
                  /> : <Image
                  width={48}
                  height={48}
                  src="/images/logo_white.svg"
                  className="h-12 mb-6"
                  alt="Developer Logo"
                />}
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

          <div className="flex flex-col items-center justify-center space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} - Made by</span>
              <Link href="https://twitter.com/TalkinIdeas">
                <a className="hover:text-accent dark:hover:text-white">
                  {" "}
                  Sahil Maheshwari
                </a>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
