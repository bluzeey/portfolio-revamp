import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import News_item from '../../components/blog/news_item';
import { news_data } from '../../data/news_data';
import { single_news_data } from '../../data/news_data';
import Head from 'next/head';
import Meta from '../../components/Meta';

const Single_post = () => {
	const router = useRouter();
	const pid = router.query.single_post;

	console.log(pid);

	return (
		<div>
			<Meta title={`${pid} || Xhibiter | NFT Marketplace Next.js Template`} />

			<div className="pt-[5.5rem] lg:pt-24">
				{/* <!-- Post --> */}
				<section className="relative py-16 md:py-24">
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
					</picture>
					{single_news_data
						.filter((item) => item.id === pid)
						.map((item) => {
							const { id, image, title, text , firstPara, secondPara,thirdPara,fourthPara,fifthPara,quote, quoteOwner } =
								item;
							// console.log(image);
							return (
								<div className="container" key={id}>
									<header className="mx-auto mb-16 max-w-lg text-center">

										<h1 className="font-display text-jacarta-700 mb-4 text-2xl dark:text-white sm:text-5xl">
											{title}
										</h1>
										{/* <!-- Author --> */}
									</header>

									{/* <!-- Featured image --> */}
									<figure className="mb-16">
										<img src={image} alt="post 1" className="rounded-2xl w-full" />
									</figure>

									{/* <!-- Article --> */}
									<article className="mb-12">
										{/* <!-- Content --> */}
										<div className="article-content">
											<p className="text-lg leading-normal">
												{firstPara}
											</p>
											<p className="text-lg leading-normal">
												{secondPara}
											</p>
											<p className="text-lg leading-normal">
												{thirdPara}
											</p>
											<p className="text-lg leading-normal">
												{fourthPara}
											</p>
											<p className="text-lg leading-normal">
												{fifthPara}
											</p>
											<blockquote className="text-jacarta-700 !my-10 text-xl italic dark:text-white">
												{quote}
												<cite className="text-jacarta-400 text-2xs mt-3 block not-italic tracking-tight">
													— {quoteOwner}
												</cite>
											</blockquote>
										</div>
									</article>

									<div className="mx-auto max-w-[48.125rem]">
										{/* <!-- Share --> */}
										<div className="mb-16 flex items-center">
											<span className="dark:text-jacarta-300 mr-4 text-sm font-bold">Share:</span>
											<div className="flex space-x-2">
												<a
													href="#"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="facebook"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
													</svg>
												</a>
												<a
													href="#"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="twitter"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
													</svg>
												</a>
												<a
													href="#"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="linkedin"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"
													>
														<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
													</svg>
												</a>
												<a
													href="mailto:test@gmail.com"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="email"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
													</svg>
												</a>
											</div>
										</div>

										
										{/* <!-- Related --> */}
										<h2 className="font-display text-jacarta-700 mb-8 text-3xl dark:text-white">
											Related Posts
										</h2>

										{/* <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
						</div> */}
										{/* <!-- Posts --> */}
										<News_item
											data={news_data.slice(4)}
											classes="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2"
										/>
									</div>
									{/* <!-- end related --> */}
								</div>
							);
						})}
				</section>
				{/* <!-- end post --> */}
			</div>
		</div>
	);
};

export default Single_post;
