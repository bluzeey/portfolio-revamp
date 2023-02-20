import React from 'react';
import {
	Hero,
	Bids
} from '../../components/component';
import Meta from '../../components/Meta';
import Testimonial from "../../components/testimonial/Testimonial";
import CoverflowCarousel from '../../components/carousel/coverflowCarousel';
import TrustedPartner from "../../components/dao/TrustedPartner";
import Process from "../../components/blog/process";
import Cta from "../../components/cta/cta";

const Home_1 = () => {
	return (
		<main>
			<Meta title="Home 1 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero />
			<Process/>
			<TrustedPartner />
			<CoverflowCarousel />
			<Testimonial/>
			<Cta/>
		</main>
	);
};

export default Home_1;
