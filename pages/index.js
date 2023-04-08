import React, { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import Home_1 from "./home/home_1";
import { NextSeo } from 'next-seo';


export default function Home() {
  const { scrollRef } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <>
    <NextSeo
      title="Sahil Maheshwari | Web Developer"
      description="This is portfolio of Sahil Maheshwari , a web developer with 2+ years of experience."
      canonical="https://sahilmaheshwari.com/"
      openGraph={{
        url: 'https://sahilmaheshwari.com/',
        title: 'Sahil Maheshwari | Web Developer',
        description: 'This is portfolio of Sahil Maheshwari , a web developer with 2+ years of experience."',
        images: [
          {
            url: 'https://sahilmaheshwari.com/images/hero/hero.svg',
            width: 800,
            height: 600,
            alt: 'My animated picture',
            type: 'image/jpeg',
          },
          {
            url: 'https://sahilmaheshwari.com/images/projects/googlesearch.svg',
            width: 900,
            height: 800,
            alt: 'Search Application Project on  portfolio',
            type: 'image/jpeg',
          },
        ],
        site_name: 'sahilmaheshwari',
      }}
      twitter={{
        handle: '@TalkinIdeas',
        site: '@site',
        cardType: 'summary_large_image',
      }} />
      <Home_1 />
    </>
  );
}
