import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/hero/hero.svg" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Sahil Maheshwari | Web Developer",
  keyword:
    `Full-stack development,Next.js development,HTML/CSS development,Web development portfolio,Client projects,Company projects,Professional experience,2+ years experience,Web development services,Custom website development,Responsive design,User experience design,
    Web applications,
    Web design,
    Software development`,
  desc: "Skilled full-stack developer with 2+ years of experience in React, Next.js, HTML/CSS, and JavaScript. Browse my portfolio for custom website and web app examples. Expert in responsive design and user experience. Contact me for professional web development services.",
};

export default Meta;
