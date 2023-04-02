import Link from "next/link";

const hero = () => {
  return (
    <section className="relative pb-10 pt-20 md:pt-32 h-1900">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full">
        <img
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture>

      <div className="container h-full mx-auto">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
            <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
              Hi , <br/> <span className="animate-gradient">I am Sahil.</span>
            </h1>
            <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
              Welcome to my website! I&apos;m a Full stack developer with experience working for 2+ companies and collaborating with a wide range of freelancing clients. 
            </p>
            <div className="flex space-x-4">
              <Link href="/create">
                <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                  My Work
                </a>
              </Link>
                <a href="#contact" className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white">
                  Hire Me!
                </a>
            </div>
          </div>

          {/* <!-- Hero image --> */}
          <div className="col-span-6 xl:col-span-8">
          <div className="relative">
                <figure className="flex items-center justify-center">
                  <img
                    src="/images/hero/hero.svg"
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-2 dark:border-jacarta-600"
                  />
                  <img
                    src="/images/dao/3d_elements_circle.png"
                    alt="benifit"
                    className="absolute w-3/4 lg:w-7/10 animate-spin-slow"
                  />
                </figure>
              </div>
          </div>
        </div>
      </div>
      <div className="container h-full mx-auto">
      <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
        <h2 className="text-jacarta-700 font-bold font-display mb-6 text-center text-3xl dark:text-white md:text-left">
         Why hire me ?
        </h2>
        <ul>
         <li className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
         As a highly skilled and dedicated web developer, I have the skills, knowledge, and experience necessary to help you create a website that&apos;s not only visually stunning but also highly functional and user-friendly.
         </li>
         <li className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
         With several years of experience in the industry, I have a deep understanding of the latest web development trends and technologies. From responsive design to user experience optimization, I have the skills and knowledge necessary to build a website that not only looks great but also delivers exceptional performance and usability.
         </li>
         <li className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
         But what really sets me apart is my commitment to my clients. I believe in taking a collaborative approach to web development, working closely with my clients to understand their unique needs and goals. Whether you&apos;re looking to build a new website from scratch or revamp an existing one, I&apos;ll work with you every step of the way to ensure that your vision is brought to life.
         </li>
         <li className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
         But my commitment to my clients doesn&apos;t end there. I understand that web development is an ongoing process, and I&apos;m dedicated to providing ongoing support and maintenance to ensure that your website continues to perform at its best. From bug fixes to security updates, I&apos;m here to help you keep your website running smoothly and efficiently.
         </li>
         <li className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
         So if you&apos;re looking for a web developer who is not only highly skilled and experienced but also deeply committed to your success, look no further. Contact me today to discuss your project and learn more about how I can help you take your online presence to the next level.
         </li>
        </ul>     
      </div>
      </div>
    </section>
  );
};

export default hero;
