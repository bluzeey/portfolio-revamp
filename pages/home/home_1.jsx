import React from 'react';
import {
	Hero,
	Browse_category,
} from '../../components/component';
import TrustedPartner from "../../components/dao/TrustedPartner";
import Testimonial from "../../components/testimonial/Testimonial";
import CoverflowCarousel from '../../components/carousel/CoverflowCarousel';
import Meta from '../../components/Meta';
import Cta from "../../components/cta/Cta";

const Home_1 = () => {
	return (
		<main>
			<Meta title="Home 1 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero />
			<Browse_category />
			<TrustedPartner/>
			<CoverflowCarousel/>
			<Testimonial/>
			<Cta/>
		</main>
	);
};

export default Home_1;
