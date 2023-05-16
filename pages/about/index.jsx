import Link from "next/link";
import React, { useState } from "react";
import News_item from "../../components/blog/news_item";
import { news_data, single_news_data } from "../../data/news_data";
import Meta from "../../components/Meta";

const Blog = () => {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const [data, setdata] = useState(single_news_data.slice(0, 5));

  const handleLoadMore = () => {
    setdata(news_data);
    setLoadMoreBtn(false);
  };
  return (
    <>
      <Meta title="Blog || Sahil Maheshwari || Web Developer" />
      {/* <!-- Blog --> */}
      <h1 className="text-center mt-24 font-display text-4xl -mb-24">About</h1>
      <section className="relative  pt-[5.5rem] lg:pt-24">
        <div className="py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>

          <div className="container">
            {/* <!-- Featured Post --> */}
            <article className="mb-[1.875rem] md:mb-16">
              <div className="rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row">
                <figure className="group overflow-hidden md:w-1/2">
                  <Link href="/single_post/post_1">
                    <a>
                      <img
                        src="/images/blog/post_1.jpg"
                        alt="post 1"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                      />
                    </a>
                  </Link>
                </figure>

                {/* <!-- Body --> */}
                <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border bg-white p-[10%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                  {/* <!-- Meta --> */}

                  <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-3xl">
                    <Link href="/single_post/post_1">
                      <a> What I learnt by doing more than 40+ certifications on Coursera</a>
                    </Link>
                  </h2>
                  <p className="dark:text-jacarta-200 mb-8">
                  As someone who has always been interested in learning, I found myself drawn to Coursera ...
                  </p>
                </div>
              </div>
            </article>
            <News_item data={data} />
          </div>
        </div>
      </section>
      {/* <!-- end blog --> */}
    </>
  );
};

export default Blog;
