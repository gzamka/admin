import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
const Home = ({ docs, language,news }) => {
	return (
		<>
			<Hero language={language} />
			<Carousel docs={docs} />
			<Content {...heroTwo} />
			<Content {...heroOne} />
			<Content {...heroThree} />
			<Features news={news} />
		</>
	);
};

export default Home;
